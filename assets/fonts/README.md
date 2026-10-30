# Website fonts

- Source Serif 4: https://fonts.google.com/specimen/Source+Serif+4
- Source Sans 3: https://fonts.google.com/specimen/Source+Sans+3

Unmodified WOFF2 variable font subsets (Latin and Latin Extended, normal and italic) were downloaded from the official Google Fonts CSS API. Weight range: 200–900. Source Sans 3 font revision: v20; Source Serif 4 font revision: v15.

Upstream licenses are preserved in the accompanying OFL files, from the official google/fonts repository. Fonts are served locally; production rendering requires no external font API request.

Chinese headings use Noto Serif SC and body text uses Noto Sans SC, the Noto companions of the Source Han CJK families. Both variable WOFF2 files are served locally and contain the site's Chinese characters and punctuation; Latin text continues to use Source Serif 4 and Source Sans 3.

The subsets were downloaded from the official Google Fonts CSS API with its `text` parameter. Upstream licenses are in `OFL-noto-serif-sc.txt` and `OFL-noto-sans-sc.txt`; the included characters are recorded in `chinese-characters.txt`. After adding Chinese text, run `python scripts/build_chinese_fonts.py` to refresh the font subsets. This maintenance command requires network access; ordinary builds use the committed fonts and require no font service.

- https://fonts.google.com/noto/specimen/Noto+Serif+SC
- https://fonts.google.com/noto/specimen/Noto+Sans+SC
