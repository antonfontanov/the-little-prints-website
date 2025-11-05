#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const themeDir = path.join(projectRoot, 'shopify-theme');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Run `npm run build` first to generate `dist`.');
  process.exit(1);
}

// Clean theme dir
if (fs.existsSync(themeDir)) {
  fs.rmSync(themeDir, { recursive: true, force: true });
}

// Create basic Shopify theme structure
const layoutDir = path.join(themeDir, 'layout');
const templatesDir = path.join(themeDir, 'templates');
const assetsDir = path.join(themeDir, 'assets');
ensureDir(layoutDir);
ensureDir(templatesDir);
ensureDir(assetsDir);

// Copy dist assets
const distAssets = path.join(distDir, 'assets');
if (fs.existsSync(distAssets)) {
  copyRecursive(distAssets, assetsDir);
} else {
  // For Vite, sometimes build outputs to 'assets' under root of dist
  copyRecursive(distDir, assetsDir);
}

// Copy index.html -> templates/index.liquid (basic conversion)
const indexHtmlPath = path.join(distDir, 'index.html');
let indexHtml = '';
if (fs.existsSync(indexHtmlPath)) {
  indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
} else {
  console.error('index.html not found in dist. Aborting.');
  process.exit(1);
}

// Replace absolute asset paths to liquid asset_url filter where possible
// This is a best-effort naïve replacement: /assets/<name> -> {{ 'name' | asset_url }}
indexHtml = indexHtml.replace(/(["'])\/assets\/([^"']+?)\1/g, (m, q, name) => {
  return `${q}{{ '${name}' | asset_url }}${q}`;
});

// Inject meta required for Shopify theme layout
const templatesIndex = `<!doctype html>\n` + indexHtml;
fs.writeFileSync(path.join(templatesDir, 'index.liquid'), templatesIndex, 'utf8');

// Minimal layout file referencing content
const layoutContent = `<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <title>{{ page_title }}</title>\n  {{ content_for_header }}\n</head>\n<body>\n  {{ content_for_layout }}\n</body>\n</html>`;
fs.writeFileSync(path.join(layoutDir, 'theme.liquid'), layoutContent, 'utf8');

console.log('Shopify theme scaffold created at:', themeDir);
console.log('Place any additional Shopify-specific snippets or sections as needed.');
