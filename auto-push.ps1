# HomePilot Auto-Push Script
# Lock dosyalarini siler ve push yapar

Set-Location C:\HomePilot

# Lock dosyalarini temizle
$locks = @(
    ".git\HEAD.lock",
    ".git\index.lock",
    ".git\refs\remotes\origin\main.lock",
    ".git\objects\maintenance.lock"
)
foreach ($lock in $locks) {
    if (Test-Path $lock) {
        Remove-Item $lock -Force
        Write-Host "Silindi: $lock"
    }
}

# Stage ve commit
git add -A
$status = git status --porcelain
if ($status) {
    git commit -m "fix: use absolute title format to prevent double HomePilot in title tag"
    Write-Host "Commit yapildi."
} else {
    Write-Host "Degisiklik yok, commit atlanıyor."
}

# Push
git push origin main
Write-Host "Push tamamlandi."
