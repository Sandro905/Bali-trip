param(
  [int]$Port = 8000,
  [string]$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

# Minimal static file server on HttpListener. Binds http://localhost:<port>/
# which does not require admin / URL ACL. Serves the Bali-trip site for local preview.

$ErrorActionPreference = "Stop"
$Root = (Resolve-Path $Root).Path

$mime = @{
  ".html"="text/html; charset=utf-8"; ".htm"="text/html; charset=utf-8";
  ".css"="text/css; charset=utf-8";   ".js"="application/javascript; charset=utf-8";
  ".json"="application/json; charset=utf-8"; ".md"="text/markdown; charset=utf-8";
  ".svg"="image/svg+xml"; ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg";
  ".gif"="image/gif"; ".ico"="image/x-icon"; ".webp"="image/webp";
  ".woff"="font/woff"; ".woff2"="font/woff2"; ".ttf"="font/ttf"; ".txt"="text/plain; charset=utf-8"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $Root at http://localhost:$Port/"

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch {
    break
  }
  $req = $ctx.Request
  $res = $ctx.Response
  try {
    # decode path, strip query, default to index.html
    $path = $req.Url.AbsolutePath
    $path = [System.Uri]::UnescapeDataString($path)
    if ($path -eq "/" -or $path -eq "") { $path = "/index.html" }

    $rel = $path.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
    $full = [System.IO.Path]::GetFullPath((Join-Path $Root $rel))

    Write-Host "$($req.HttpMethod) $path"

    if (-not $full.StartsWith($Root, [StringComparison]::OrdinalIgnoreCase)) {
      $res.StatusCode = 403
      $res.Close()
    } elseif (Test-Path -LiteralPath $full -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $res.ContentLength64 = $bytes.Length
      if ($req.HttpMethod -ne "HEAD") { $res.OutputStream.Write($bytes, 0, $bytes.Length) }
      $res.Close()
    } else {
      $res.StatusCode = 404
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $res.ContentType = "text/plain; charset=utf-8"
      $res.ContentLength64 = $body.Length
      if ($req.HttpMethod -ne "HEAD") { $res.OutputStream.Write($body, 0, $body.Length) }
      $res.Close()
    }
  } catch {
    Write-Host "err: $($_.Exception.Message)"
    try { $res.Abort() } catch {}
  }
}
