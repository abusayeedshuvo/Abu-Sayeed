# Abu Sayeed — academic profile website

Updated to follow Instruction_v1.docx. Includes the requested 11-section order, compact Profile Summary, linked icddrb affiliation, detailed CV content, 10 training entries, conference presentations, and 61 publications with DOI links.

## Preview
Extract this ZIP and open index.html in your browser. Keep style.css, script.js and the assets folder beside index.html.

## GitHub Pages upload
Upload the extracted contents (not the ZIP itself) to the root of the abusayeedshuvo.github.io repository. Retain the assets folder and .nojekyll file. Enable GitHub Pages from the branch containing these files, with the root folder as the source. This package has not been deployed automatically.

## Content provenance
Profile text, metrics, publication citations and historical journal indicators follow the supplied September 2026 CV. They are explicitly dated; they are not a live Scholar feed. DOI records were matched using Crossref and publisher/PubMed records on 9 November 2026. Publications can be searched by title, citation or DOI and filtered by authorship.

The existing public CV PDF is retained. Private telephone and referee contact details are omitted from that public version.

## Latest revision
Added filled headings with hover colours, matching research/publication buttons, enlarged grant and editorial highlights, Responsibility subsections, differentiated job titles, filled project-role labels, compact training rows and publication totals. Removed the summary metrics-date line and English language proficiency section. All 61 publication entries and DOI links remain unchanged. Quartile totals reflect the supplied CV, not a new journal-ranking lookup.


Photo Gallery: 15 images extracted from Photo Galary.docx, with rewritten captions. Responsive thumbnails support hover enlargement and a keyboard-accessible click/tap viewer. Original images are retained in assets/gallery; web-optimised WebP copies are used by the page. Upload index.html, style.css, script.js and assets/gallery together.

## In-page publication abstracts

All 61 publications now have a native “Read abstract” disclosure beneath the DOI link. Abstracts are closed initially and open only when selected. The text is embedded in index.html, so readers do not leave the website and abstracts do not depend on a network request or JavaScript. The bottom close button is a JavaScript enhancement; the top disclosure remains usable without it.

The supplied wording and paragraph order from Abu_Sayeed_Publication_Abstracts.docx are preserved. Structured headings are displayed where supplied. Titles were matched to the publication citations and DOI records; abstract wording has not been independently verified against publishers. The CIAF paper title has an acronym in the citation that is absent from the supplied heading; its match was checked separately.

### Upload this update to an existing GitHub Pages website

1. Back up the current repository using Code → Download ZIP.
2. Extract this ZIP on your computer.
3. In the repository main folder choose Add file → Upload files.
4. Replace index.html, style.css, script.js and publications.json using these exact names. README.md is optional documentation.
5. Commit the changes, wait for deployment, and refresh the website. Keep the existing assets folder; its contents have not changed.
6. Open an authorship group and select Read abstract to check the result.

The full ZIP also contains all original assets for a fresh installation. Do not upload the ZIP itself.

### Future abstract edits

The visitor-facing abstract paragraphs live in index.html inside #abstract-N, where N is the publication ID. publications.json carries a matching title and abstract_paragraphs array for maintenance; changing JSON alone does not update the static HTML. Ask ChatGPT to update both together and verify their text matches. The original citation search remains scoped to citation metadata, so hidden abstract words do not unexpectedly change search results. Topic filtering still changes counts without automatically opening authorship groups.
