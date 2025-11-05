<#
  scripts/init-and-push.ps1

  Initializes a local git repo (if needed), commits the project, and pushes to GitHub.

  Behavior:
  - If Git is not installed, the script exits with instructions.
  - If the repository already has a remote called 'origin', you'll be asked whether to push to it.
  - If GH CLI (gh) is installed you can choose to create a new GitHub repo and push in one step.
  - Otherwise you can provide an existing remote URL (HTTPS or SSH).

  Usage (PowerShell):
    # Allow script execution for this run if needed
    powershell -ExecutionPolicy Bypass -File .\scripts\init-and-push.ps1

  Or run interactively from project root:
    Set-Location (Resolve-Path .) ; .\scripts\init-and-push.ps1
#>

function Exit-WithMessage($msg) {
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

# Ensure we are run from the project root (where this script lives in scripts/)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDir '..')
Set-Location $projectRoot

# Check git
try {
    git --version > $null 2>&1
} catch {
    Exit-WithMessage "Git is not installed or not on PATH. Install Git (https://git-scm.com/) and re-run this script."
}

# Check gh CLI availability
$hasGH = $false
try {
    gh --version > $null 2>&1
    $hasGH = $true
} catch {
    $hasGH = $false
}

Write-Host "Project root: $($projectRoot.Path)"

# Initialize git if needed
if (-not (Test-Path .git)) {
    Write-Host "No .git folder detected. Initializing git repository..."
    git init | Out-Null
} else {
    Write-Host "Existing git repository detected."
}

# Ensure .gitignore exists (we've added one), stage files
if (-not (Test-Path '.gitignore')) {
    Write-Host "No .gitignore found. Creating a basic .gitignore..."
    @"
node_modules/
dist/
.env
.vscode/
.DS_Store
"@ | Set-Content -Path .gitignore -Encoding UTF8
}

# Stage everything
Write-Host "Staging files..."
git add --all

# Commit
# Only commit if there are staged changes
$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Host "No changes to commit."
} else {
    $message = Read-Host "Enter commit message (default: 'Initial commit: The Little Prints')"
    if ([string]::IsNullOrWhiteSpace($message)) { $message = "Initial commit: The Little Prints" }
    git commit -m "$message"
}

# Check for remote
$remoteUrl = $null
$originExists = $false
try {
    $remotes = git remote
    if ($remotes -match "origin") { $originExists = $true }
} catch {
    $originExists = $false
}

if ($originExists) {
    Write-Host "Remote 'origin' already exists."
    $remoteUrl = git remote get-url origin
    Write-Host "origin -> $remoteUrl"
    $push = Read-Host "Push to existing origin? (y/n)"
    if ($push -match '^[Yy]') {
    try { git branch -M main } catch { }
        git push -u origin main
        Write-Host "Pushed to existing origin."
        exit 0
    }
}

# No origin or user chose not to push to existing origin
if ($hasGH) {
    $useGh = Read-Host "gh CLI detected. Create a new GitHub repo with gh and push? (y/n)"
    if ($useGh -match '^[Yy]') {
        $repoName = Read-Host "Enter repository name (default: the-little-prints)"
        if ([string]::IsNullOrWhiteSpace($repoName)) { $repoName = "the-little-prints" }
        $visibility = Read-Host "Visibility? (public/private) (default: public)"
        if ([string]::IsNullOrWhiteSpace($visibility)) { $visibility = "public" }

        # Create the repo and push
        Write-Host "Creating GitHub repo '$repoName' (visibility: $visibility) and pushing..."
        gh repo create $repoName --$visibility --source=. --remote=origin --push
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Repository created and pushed via gh."
            exit 0
        } else {
            Exit-WithMessage "gh repo create failed. You can add a remote manually and push."
        }
    }
}

# Ask for remote URL fallback
$manual = Read-Host "Provide an existing remote URL to add (HTTPS or SSH), or leave blank to skip pushing"
if (-not [string]::IsNullOrWhiteSpace($manual)) {
    git remote add origin $manual
    try { git branch -M main } catch { }
    Write-Host "Pushing to $manual..."
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Pushed successfully."
    } else {
        Exit-WithMessage "Push failed. Check remote URL and your authentication (PAT or SSH keys)."
    }
} else {
    Write-Host "No remote provided. Local git repository is ready. When you have a remote, run:"
    Write-Host "  git remote add origin <your-remote-url>"
    Write-Host "  git branch -M main"
    Write-Host "  git push -u origin main"
}
