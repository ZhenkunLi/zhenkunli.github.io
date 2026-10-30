$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

# Prefer the executable: the bundled .cmd launcher can fail when its path contains spaces.
$quartoCommand = Get-Command quarto.exe, quarto -ErrorAction SilentlyContinue | Select-Object -First 1
$quartoPath = if ($quartoCommand) { $quartoCommand.Source } else { $null }
if (-not $quartoPath) {
    $candidates = @(
        "$env:ProgramFiles\Quarto\bin\quarto.exe",
        "$env:LOCALAPPDATA\Programs\Quarto\bin\quarto.exe",
        "$env:ProgramFiles\RStudio\resources\app\bin\quarto\bin\quarto.exe",
        'D:\Program Files\RStudio\resources\app\bin\quarto\bin\quarto.exe'
    )
    $quartoPath = $candidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
}
if (-not $quartoPath) {
    throw 'Install Quarto 1.9.38 from https://quarto.org/docs/get-started/ and run this script again.'
}

python scripts/build_publications.py
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& $quartoPath render
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
python scripts/check_site.py
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host 'Local preview: http://127.0.0.1:4273/ (Ctrl+C to stop)'
& $quartoPath preview --host 127.0.0.1 --port 4273 --no-browser --no-render
