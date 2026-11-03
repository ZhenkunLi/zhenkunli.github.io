# Website fonts

- Source Serif 4: https://fonts.google.com/specimen/Source+Serif+4
- Source Sans 3: https://fonts.google.com/specimen/Source+Sans+3

Source Sans 3: unmodified WOFF2 variable font subsets (Latin and Latin Extended, normal and italic) downloaded from the official Google Fonts CSS API. Weight range: 200–900. Font revision: v20.

Source Serif 4: subset locally with fontTools from the variable TTFs in the official google/fonts repository (`ofl/sourceserif4`), using the same Latin and Latin Extended unicode ranges. Upright files keep the optical-size axis (8–60) and weights 300–700; italic files keep weights 300–700 at optical size 16. Retained OpenType features include kerning, ligatures, small caps (`smcp`, `c2sc`), old-style and lining figures (`onum`, `lnum`, `pnum`, `tnum`), `case`, fractions and superscripts.

Upstream licenses are preserved in the accompanying OFL files, from the official google/fonts repository. Fonts are served locally; production rendering requires no external font API request.

Chinese headings and body text use Noto Serif SC and form controls use Noto Sans SC, the Noto companions of the Source Han CJK families. Both variable WOFF2 files are served locally and contain the site's Chinese characters and punctuation; Latin text continues to use Source Serif 4 and Source Sans 3.

The subsets were downloaded from the official Google Fonts CSS API with its `text` parameter. Upstream licenses are in `OFL-noto-serif-sc.txt` and `OFL-noto-sans-sc.txt`; the included characters are recorded in `chinese-characters.txt`. After adding Chinese text, run `python scripts/build_chinese_fonts.py` to refresh the font subsets. This maintenance command requires network access; ordinary builds use the committed fonts and require no font service.

- https://fonts.google.com/noto/specimen/Noto+Serif+SC
- https://fonts.google.com/noto/specimen/Noto+Sans+SC
