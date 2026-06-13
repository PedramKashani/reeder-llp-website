#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/images/logos/r-favicon.svg"
APP="$ROOT/src/app"

# Flat serif R (~74% canvas). Prefer Georgia when available; else fall back to r-favicon.svg.
if [[ -f /System/Library/Fonts/Supplemental/Georgia.ttf ]]; then
  magick -size 512x512 xc:'#0a0a0a' \
    -font '/System/Library/Fonts/Supplemental/Georgia.ttf' \
    -pointsize 370 -fill '#e8e6e3' -gravity center -annotate +0+14 'R' \
    PNG32:"$APP/icon.png"
else
  magick -background none -density 384 "$SRC" -resize 512x512 PNG32:"$APP/icon.png"
fi
magick "$APP/icon.png" -resize 180x180 PNG32:"$APP/apple-icon.png"
magick "$APP/icon.png" -define icon:auto-resize=64,48,32,16 "$APP/favicon.ico"

echo "Generated:"
echo "  $APP/icon.png (512x512)"
echo "  $APP/apple-icon.png (180x180)"
echo "  $APP/favicon.ico (64,48,32,16)"
