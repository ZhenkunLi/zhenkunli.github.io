"""Reproduce the research images from local PDFs. Optional: pip install pymupdf pillow.

Crop coordinates are in PDF points; pages in figure-sources.json are one-based.
This script is not needed during ordinary local or cloud builds.
"""
from io import BytesIO
import json
from pathlib import Path

from PIL import Image
import pymupdf

root = Path(__file__).resolve().parents[1]
sources = json.loads((root / "data/figure-sources.json").read_text(encoding="utf-8"))
out = root / "img/research"
out.mkdir(parents=True, exist_ok=True)
for source in sources:
    with pymupdf.open(root / "papers" / source["file"]) as document:
        page = document[source["page"] - 1]
        image = page.get_pixmap(matrix=pymupdf.Matrix(3, 3), clip=pymupdf.Rect(source["crop"]))
        with Image.open(BytesIO(image.tobytes("png"))) as figure:
            figure.save(out / f'{source["id"]}.webp', quality=94, method=6)
        print(f'{source["id"]}: page {source["page"]}, figure {source["figure"]}, {image.width} x {image.height}')
