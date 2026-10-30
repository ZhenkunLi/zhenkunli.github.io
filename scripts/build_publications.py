"""Build the publication list from its single, editable JSON source. Standard library only."""
from collections import Counter
from datetime import date
from html import escape
import json
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
records = json.loads((ROOT / "data/publications.json").read_text(encoding="utf-8"))
themes = json.loads((ROOT / "data/themes.json").read_text(encoding="utf-8"))
assert len({r["id"] for r in records}) == len(records), "Duplicate publication IDs"
for r in records:
    date.fromisoformat(r["date"])
    assert r["theme"] in themes, r["id"]
    if r.get("file"):
        assert (ROOT / "papers" / r["file"]).is_file(), r["file"]

def options(values):
    return "".join(f'<option value="{escape(str(v))}">{escape(str(label))}</option>'
                   for v, label in values)

years = sorted({r.get("year", int(r["date"][:4])) for r in records}, reverse=True)
counts = Counter(r["type"] for r in records)
parts = [f'<p class="publication-total">{len(records)} records · '
         f'{counts["Journal article"]} journal articles · '
         f'{counts["Conference paper"]} conference papers · {counts["Preprint"]} preprints</p>',
         '<form class="publication-filters" role="search" aria-label="Filter publications" hidden>',
         '<label class="search-field" for="pub-search">Search<input id="pub-search" type="search" '
         'placeholder="Title, author, journal, or keyword" aria-controls="publication-list"></label>',
         '<label for="pub-year">Year<select id="pub-year"><option value="">All years</option>' +
         options((y, y) for y in years) + '</select></label>',
         '<label for="pub-type">Type<select id="pub-type"><option value="">All types</option>' +
         options((t, t) for t in counts) + '</select></label>',
         '<label for="pub-theme">Research theme<select id="pub-theme"><option value="">All themes</option>' +
         options(themes.items()) + '</select></label>',
         '<button type="reset" class="reset-filters">Reset</button></form>',
         f'<p id="pub-count" class="filter-count" role="status" aria-live="polite">Showing {len(records)} records</p>',
         '<div id="publication-list">']
for year in years:
    parts.append(f'<section class="publication-year" aria-labelledby="year-{year}">'
                 f'<h2 id="year-{year}">{year}</h2>')
    for r in sorted((r for r in records if r.get("year", int(r["date"][:4])) == year),
                    key=lambda r: r["date"], reverse=True):
        title, rid = escape(r["title"]), escape(r["id"])
        target = 'https://doi.org/' + r["doi"] if r.get("doi") else r.get("online")
        heading = f'<a href="{escape(target)}">{title}</a>' if target else title
        authors = escape(r["authors"]).replace("Zhenkun Li", "<strong>Zhenkun Li</strong>")
        parts.append(f'<article class="publication" id="pub-{rid}" data-year="{year}" '
                     f'data-type="{escape(r["type"])}" data-theme="{r["theme"]}">'
                     f'<p class="publication-label">{escape(r["type"])} · {escape(themes[r["theme"]])}</p>'
                     f'<h3>{heading}</h3><p class="publication-authors">{authors}</p>'
                     f'<p class="publication-venue">{r["details"]}</p><div class="publication-links">')
        if r.get("doi"):
            parts.append(f'<a href="https://doi.org/{escape(r["doi"])}">DOI ↗</a>')
        elif r.get("online"):
            parts.append(f'<a href="{escape(r["online"])}">Publisher ↗</a>')
        if r.get("file"):
            parts.append(f'<a href="../papers/{quote(r["file"])}" aria-label="PDF: {title}">PDF ↓</a>')
        parts.append(f'<a href="../research/index.html#{r["theme"]}">Research theme</a></div>')
        if r.get("note"):
            parts.append(f'<p class="publication-note">{escape(r["note"])}</p>')
        if r.get("abstract"):
            parts.append(f'<details><summary>Abstract</summary><p>{escape(r["abstract"])}</p></details>')
        parts.append('</article>')
    parts.append('</section>')
parts.extend(['</div>', '<p id="pub-empty" hidden>No matching publications. Try another keyword or reset the filters.</p>'])
out = ROOT / "_includes/publications.html"
out.parent.mkdir(exist_ok=True)
out.write_text("\n".join(parts) + "\n", encoding="utf-8")
print(f"Prepared {len(records)} publication records")
