# Set Node.js paths
$env:PATH = "C:\nvm-noinstall\v22.14.0;$env:PATH"

# Clean cache
Write-Host "Cleaning Next.js cache..." -ForegroundColor Yellow
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue

# Run the development server
Write-Host "Starting development server..." -ForegroundColor Green
& "C:\nvm-noinstall\v22.14.0\npm.cmd" run dev
