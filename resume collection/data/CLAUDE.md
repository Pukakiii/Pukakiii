# Working in data/

This folder is a **structured database of profile facts**

## Rules

1. **Single source of truth.** Every fact lives in exactly one record. Don't duplicate a
   fact across files — link or reference instead.
2. **Never invent data.** If a date, credential ID, or URL is unknown, leave the field
   blank. Do not guess or fill from assumption.
3. **No CVs here.** Never create CVs, cover letters, or application-specific documents in
   this folder. This is source data only; tailored documents are built elsewhere.
4. **Consistent schema.** Keep frontmatter keys identical across all records in a folder
   so the data stays queryable.
5. **One record per file** for rich entities; flat lists (e.g. interests) may share a file.
6. **kebab-case filenames** (`web-services-mobile.md`).
7. **in work-experience/** use and emphasize the experience in numbers, impact and results along with words describing it, make it score high for tools recriuters use to evaluate candidates.

## Layout

- `basics/` — one file each: profile, skills, education, certifications, languages, interests
- `work-experience/` — split into `work/` and `freelance/`; one file per experience in each
