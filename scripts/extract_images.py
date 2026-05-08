"""Extract embedded images from the source PDFs into public/images/raw/.
Run: python scripts/extract_images.py
"""
from pathlib import Path
import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "raw"
OUT.mkdir(parents=True, exist_ok=True)

PDFS = [
    ROOT / "Yellow Malawi - May 14 Acumen Visits.pdf",
    ROOT / "Yellow & Acumen v3 (PDF).pdf",
]

for pdf_path in PDFS:
    if not pdf_path.exists():
        print(f"missing: {pdf_path}")
        continue
    tag = "trip" if "Visits" in pdf_path.name else "story"
    doc = fitz.open(pdf_path)
    for page_index, page in enumerate(doc):
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            try:
                pix = fitz.Pixmap(doc, xref)
                if pix.alpha or pix.n > 4:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                ext = "png"
                name = f"{tag}_p{page_index+1:02d}_{img_index+1}.{ext}"
                pix.save(OUT / name)
                pix = None
            except Exception as e:
                print(f"skip {pdf_path.name} p{page_index+1} img{img_index+1}: {e}")
    doc.close()
    print(f"done: {pdf_path.name}")

print(f"output: {OUT}")
