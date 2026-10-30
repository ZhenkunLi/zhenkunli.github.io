"""Refresh locally served Chinese font subsets after changing the website's Chinese text."""
from pathlib import Path
import re
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = ROOT / "assets/fonts"
sources = list((ROOT / "assets").glob("*.js")) + list(ROOT.glob("**/*.qmd"))
text = "".join(path.read_text(encoding="utf-8") for path in sources
               if ".local-review" not in path.parts and "_site" not in path.parts)
characters = "".join(sorted(set(re.findall(r"[\u3000-\u303f\u3400-\u9fff\uf900-\ufaff\uff00-\uffef]", text))))
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"

for family, weights, slug in [("Noto Serif SC", "200..900", "noto-serif-sc"),
                              ("Noto Sans SC", "100..900", "noto-sans-sc")]:
    query = urlencode({"family": f"{family}:wght@{weights}", "display": "swap", "text": characters})
    request = Request("https://fonts.googleapis.com/css2?" + query, headers={"User-Agent": user_agent})
    with urlopen(request, timeout=60) as response:
        css = response.read().decode("utf-8")
    urls = set(re.findall(r"src:\s*url\((https://[^)]+)\)", css))
    assert len(urls) == 1, f"Expected one variable WOFF2 subset for {family}"
    with urlopen(Request(urls.pop(), headers={"User-Agent": user_agent}), timeout=60) as response:
        font = response.read()
    assert font[:4] == b"wOF2", f"Invalid WOFF2 response for {family}"
    (FONT_DIR / f"{slug}-chinese.woff2").write_bytes(font)
    license_url = f"https://raw.githubusercontent.com/google/fonts/main/ofl/{slug.replace('-', '')}/OFL.txt"
    with urlopen(license_url, timeout=60) as response:
        (FONT_DIR / f"OFL-{slug}.txt").write_bytes(response.read())
    print(f"{family}: {len(characters)} characters, {len(font) / 1024:.1f} KiB")

(FONT_DIR / "chinese-characters.txt").write_text(characters + "\n", encoding="utf-8")
