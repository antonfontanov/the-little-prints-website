<#
  scripts/deploy-all.ps1

  High-level: interactive, safe orchestration script you run locally.
  It will:
    - check for required tools (node, npm, git)
    - run `npm ci` and `npm run build` and `npm run build:shopify`
    - call `scripts\init-and-push.ps1` to create the GitHub repo & push
    - optionally create an Azure Static Web App via `az` CLI (if installed)

  IMPORTANT: This script will NOT store credentials. You must be authenticated
  to GitHub (gh auth login) and Azure (az login) before running commands that
  require that. The script prompts before any remote-changing action.

  Run:
    powershell -ExecutionPolicy Bypass -File .\scripts\deploy-all.ps1
#>

function Check-Command($cmd, $name) {
  try { & $cmd --version > $null 2>&1; return $true } catch { Write-Host "$name not found" -ForegroundColor Yellow; return $false }
}

Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)\..\
$projectRoot = Resolve-Path .
Write-Host "Project root: $($projectRoot.Path)"

$hasNode = Check-Command 'node' 'Node.js'
$hasNpm = Check-Command 'npm' 'npm'
$hasGit = Check-Command 'git' 'git'
$hasGh = Check-Command 'gh' 'GitHub CLI (gh)'
$hasAz = Check-Command 'az' 'Azure CLI (az)'

if (-not ($hasNode -and $hasNpm -and $hasGit)) {
  Write-Host "One or more required tools are missing (node, npm, git). Install them and re-run." -ForegroundColor Red
  exit 1
}

Write-Host "Installing dependencies (npm ci)..."
npm ci
if ($LASTEXITCODE -ne 0) { Write-Host "npm ci failed" -ForegroundColor Red; exit 1 }

Write-Host "Building production bundle (npm run build)..."
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "npm run build failed" -ForegroundColor Red; exit 1 }

Write-Host "Converting to Shopify theme (npm run build:shopify)..."
npm run build:shopify
if ($LASTEXITCODE -ne 0) { Write-Host "npm run build:shopify failed" -ForegroundColor Red; exit 1 }

Write-Host "Compressing dist into The-Little-Prints-dist.zip..."
if (Test-Path .\The-Little-Prints-dist.zip) { Remove-Item .\The-Little-Prints-dist.zip -Force }
Compress-Archive -Path .\dist\* -DestinationPath .\The-Little-Prints-dist.zip -Force

# Call init-and-push to handle git & GitHub repo creation (interactive)
if (Test-Path .\scripts\init-and-push.ps1) {
  Write-Host "Running init-and-push script to initialize git and push to GitHub..."
  powershell -ExecutionPolicy Bypass -File .\scripts\init-and-push.ps1
} else {
  Write-Host "init-and-push.ps1 not found; please run scripts\init-and-push.ps1 manually to create/push the repo." -ForegroundColor Yellow
}

# Optionally create Azure Static Web App
if ($hasAz) {
  $doAz = Read-Host "Would you like to create an Azure Static Web App and connect GitHub for CI/CD? (y/n)"
  if ($doAz -match '^[Yy]') {
    Write-Host "You must be logged into Azure (az login) and GitHub (the CLI will prompt if needed)."
    $appName = Read-Host "Enter a globally unique app name for Azure Static Web App (e.g. the-little-prints-xxx)"
    if ([string]::IsNullOrWhiteSpace($appName)) { Write-Host "App name required"; exit 1 }
    $rg = Read-Host "Enter resource group name to create/ use (will be created if it doesn't exist)"
    if ([string]::IsNullOrWhiteSpace($rg)) { $rg = "rg-the-little-prints" }
    $location = Read-Host "Azure location (default: West Europe)"
    if ([string]::IsNullOrWhiteSpace($location)) { $location = "West Europe" }
    $branch = Read-Host "Repository branch to deploy (default: main)"
    if ([string]::IsNullOrWhiteSpace($branch)) { $branch = "main" }

    Write-Host "Creating resource group (if needed)..."
    az group create --name $rg --location "$location" | Out-Null

    # Attempt to detect the GitHub repo URL from git remote
    $remote = $null
    try { $remote = git remote get-url origin } catch { $remote = $null }
    if (-not $remote) {
      Write-Host "No git remote detected. Ensure the repository is pushed to GitHub before running az staticwebapp create." -ForegroundColor Yellow
    } else {
      Write-Host "Detected remote: $remote"
    }

    $outputLocation = Read-Host "Output folder (the built app in the repo). Default: dist"
    if ([string]::IsNullOrWhiteSpace($outputLocation)) { $outputLocation = "dist" }

    Write-Host "Creating Azure Static Web App (this will open a browser to authorize GitHub if needed)..."
    az staticwebapp create --name $appName --resource-group $rg --location "$location" --source $remote --branch $branch --output-location $outputLocation
    if ($LASTEXITCODE -eq 0) { Write-Host "Azure Static Web App creation attempted. Check the Azure Portal for status." }
    else { Write-Host "az staticwebapp create failed or needs manual steps. See Azure docs." -ForegroundColor Yellow }
  }
} else {
  Write-Host "Azure CLI not found. If you want to create an Azure Static Web App, install the Azure CLI and run: az staticwebapp create ..." -ForegroundColor Yellow
}

Write-Host "All done. If you ran init-and-push, check your GitHub repository. If you created Azure SWA, check the Azure Portal for the deployment status." -ForegroundColor Green
