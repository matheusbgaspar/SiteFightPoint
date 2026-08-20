# Gera o favicon do site a partir do logo da Fight Point.
# Usa o PNG do logo branco (transparente) sobre fundo escuro da marca (#292524)
# e salva como favicon.ico (16/32/48) + PNG de alta resolucao.

Add-Type -AssemblyName System.Drawing

$root     = 'c:\VS_WORK\FightPointSite'
$logoPng  = Join-Path $root 'public\assets\logo\fp-logo-white_No_Background.png'
$logFile  = Join-Path $root 'favicon_generation.log'
$tmpDir   = Join-Path $root 'tmp_favicon'

Remove-Item $logFile, $tmpDir -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null

function Write-Log($msg) {
    $msg | Out-File -FilePath $logFile -Append -Encoding utf8
}

Write-Log "Iniciando geracao do favicon..."

$src = [System.Drawing.Image]::FromFile($logoPng)
Write-Log "Logo PNG: $($src.Width)x$($src.Height)"

$bgColor = [System.Drawing.Color]::FromArgb(255, 41, 37, 36)  # #292524

function New-FaviconPng([int]$size, [string]$path) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)

    # Fundo escuro com cantos arredondados (raio ~22%)
    $radius = [int]($size * 0.22)
    $pathRect = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $radius * 2
    $pathRect.AddArc(0, 0, $d, $d, 180, 90)
    $pathRect.AddArc($size - $d, 0, $d, $d, 270, 90)
    $pathRect.AddArc($size - $d, $size - $d, $d, $d, 0, 90)
    $pathRect.AddArc(0, $size - $d, $d, $d, 90, 90)
    $pathRect.CloseFigure()
    $g.FillPath((New-Object System.Drawing.SolidBrush($bgColor)), $pathRect)

    # Logo centralizado com padding
    $pad = [int]($size * 0.18)
    $drawW = $size - (2 * $pad)
    $drawH = [int]($src.Height * ($drawW / $src.Width))
    $x = $pad
    $y = [int](($size - $drawH) / 2)
    $g.DrawImage($src, $x, $y, $drawW, $drawH)

    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose(); $pathRect.Dispose()
    Write-Log "PNG gerado: $path ($size x $size)"
}

# PNG de alta resolucao usado como favicon moderno
$faviconPngPath = Join-Path $root 'public\assets\logo\fp-favicon.png'
New-FaviconPng 64 $faviconPngPath

# Versao 180px para apple-touch-icon (tela inicial de celulares)
$favicon180Path = Join-Path $root 'public\assets\logo\fp-favicon-180.png'
New-FaviconPng 180 $favicon180Path

# PNGs individuais (16/32/48) para compor o ICO
$sizes = @(16, 32, 48)
$pngFiles = @{}
foreach ($s in $sizes) {
    $p = Join-Path $tmpDir "fav_$s.png"
    New-FaviconPng $s $p
    $pngFiles[$s] = $p
}

# Monta o ICO manualmente (PNG embutido — suportado por browsers e Windows)
$icoPath = Join-Path $root 'public\favicon.ico'
$icoStream = [System.IO.File]::Create($icoPath)
$bw = New-Object System.IO.BinaryWriter($icoStream)

# ICONDIR
$bw.Write([uint16]0)       # reservado
$bw.Write([uint16]1)       # tipo: 1 = icone
$bw.Write([uint16]$sizes.Count)

# ICONDIRENTRY de cada imagem + coleta dos dados
$imageData = @{}
$offset = 6 + (16 * $sizes.Count)
foreach ($s in $sizes) {
    $bytes = [System.IO.File]::ReadAllBytes($pngFiles[$s])
    $w = if ($s -ge 256) { 0 } else { $s }
    $h = if ($s -ge 256) { 0 } else { $s }
    $bw.Write([byte]$w)          # largura
    $bw.Write([byte]$h)          # altura
    $bw.Write([byte]0)           # paleta (0 = sem paleta)
    $bw.Write([byte]0)           # reservado
    $bw.Write([uint16]1)         # planos de cor
    $bw.Write([uint16]32)        # bits por pixel
    $bw.Write([uint32]$bytes.Length)
    $bw.Write([uint32]$offset)
    $offset += $bytes.Length
    $imageData[$s] = $bytes
}

# Dados das imagens
foreach ($s in $sizes) {
    $bw.Write($imageData[$s])
}

$bw.Flush(); $bw.Close(); $icoStream.Close()
Write-Log "ICO gerado: $icoPath ($($sizes -join '/'))"

$src.Dispose()
Remove-Item $tmpDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Log "Concluido."

# Versao 180px para apple-touch-icon
