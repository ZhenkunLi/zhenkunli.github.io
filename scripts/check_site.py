"""Check the rendered website and local references. Run after rendering. Standard library only."""
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"
PAGES = ["index.html", "about/index.html", "research/index.html", "publications/index.html",
         "teaching/index.html", "news/index.html", "research-team/index.html",
         "downloads/index.html", "gallery.html", "404.html"]

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.refs, self.ids, self.issues = path, [], set(), []
        self.publications = 0
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        classes = attrs.get("class", "").split()
        # Quarto's native colour switch uses paired stylesheet IDs and an action link.
        theme_sheet = (tag == "link" and attrs.get("id") in
                       {"quarto-bootstrap", "quarto-text-highlighting-styles"} and
                       any(c.startswith("quarto-color-scheme") for c in classes))
        if attrs.get("id"):
            if attrs["id"] in self.ids and not theme_sheet:
                self.issues.append("Duplicate ID: " + attrs["id"])
            self.ids.add(attrs["id"])
        for key in ["href", "src"]:
            if key in attrs:
                if (key == "href" and not attrs[key] and tag == "a" and
                        "quarto-color-scheme-toggle" in classes):
                    continue
                self.refs.append(attrs[key])
        if tag == "img" and not attrs.get("alt", "").strip():
            self.issues.append("Image without alternative text: " + attrs.get("src", ""))
        if tag == "article" and "publication" in attrs.get("class", "").split():
            self.publications += 1

errors = []
pages = {}
for local_only in [".local-review", ".Rhistory", ".git", ".quarto"]:
    if (SITE / local_only).exists():
        errors.append("Local-only content in website output: " + local_only)

def exact_case(path):
    """Catch names that work on Windows but would fail on the Linux Pages runner."""
    parent = SITE
    for part in path.relative_to(SITE.resolve()).parts:
        if part not in {child.name for child in parent.iterdir()}:
            return False
        parent /= part
    return True

for name in PAGES:
    path = SITE / name
    if not path.is_file():
        errors.append("Missing page: " + name)
    else:
        pages[path.resolve()] = Page(path)
for path, page in pages.items():
    errors.extend(f"{path.relative_to(SITE)}: {error}" for error in page.issues)
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        if not ref.strip():
            errors.append(f"{path.relative_to(SITE)}: empty local link")
            continue
        target = ((SITE / unquote(url.path).lstrip("/")) if url.path.startswith("/")
                  else (path.parent / unquote(url.path))) if url.path else path
        if target.is_dir():
            target /= "index.html"
        target = target.resolve()
        if not target.is_relative_to(SITE.resolve()) or not target.is_file():
            errors.append(f"{path.relative_to(SITE)}: missing local target {ref}")
        elif not exact_case(target):
            errors.append(f"{path.relative_to(SITE)}: target case mismatch {ref}")
        elif url.fragment and target.suffix == ".html":
            other = pages.get(target)
            if other is None:
                other = Page(target)
            if unquote(url.fragment) not in other.ids:
                errors.append(f"{path.relative_to(SITE)}: missing anchor {ref}")
for css in SITE.rglob("*.css"):
    for ref in re.findall(r'url\([\'\"]?([^\)\'\"]+)', css.read_text(encoding="utf-8")):
        url = urlsplit(ref)
        if not url.scheme and not url.netloc and url.path:
            target = (SITE / url.path.lstrip("/")) if url.path.startswith("/") else css.parent / unquote(url.path)
            if not target.is_file():
                errors.append(f"{css.relative_to(SITE)}: missing CSS asset {ref}")

records = json.loads((ROOT / "data/publications.json").read_text(encoding="utf-8"))
catalogue = pages.get((SITE / "publications/index.html").resolve())
if catalogue is None or catalogue.publications != len(records):
    errors.append("Rendered publication count does not match the source records")
for record in records:
    if catalogue and "pub-" + record["id"] not in catalogue.ids:
        errors.append("Missing publication anchor: " + record["id"])
figures = json.loads((ROOT / "data/figure-sources.json").read_text(encoding="utf-8"))
for figure in figures:
    if not (SITE / f'img/research/{figure["id"]}.webp').is_file():
        errors.append("Missing research figure: " + figure["id"])
if (SITE / "CNAME").read_text(encoding="utf-8").strip() != "zhenkunli.com":
    errors.append("Custom domain not preserved")
if errors:
    raise SystemExit("\n".join(errors))
print(f"PASS: {len(pages)} pages, {len(records)} publications, {len(figures)} research figures; local links, anchors, image text, and CSS assets verified.")
