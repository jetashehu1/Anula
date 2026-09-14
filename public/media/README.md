# Media

Everything in this folder is served from the site root: a file at
`public/media/home/hero-poster.svg` is requested as `/media/home/hero-poster.svg`.

## What is here now

The `.svg` files are **placeholders** — generated tonal frames standing in for
photography so the layouts read correctly before the real material is cut.
They are deliberately abstract; nothing in them is meant to ship.

## Replacing them with real media

1. Drop the real file into the matching folder.
2. Point at it from the data file — `src/data/projects.js` for project media,
   `src/data/services.js` for the service stills, `src/data/site.js` for the
   about / collage / contact / team frames.

No component needs to change. The extension in the data is the only thing that
ties a record to a file, so `'/media/weddings/elena-and-marko-cover.svg'` simply
becomes `'/media/weddings/elena-and-marko-cover.jpg'`.

## Formats

| Use | Format | Notes |
| --- | --- | --- |
| Stills | `.webp` (or `.avif`) | ~2000px on the long edge is plenty; fall back to `.jpg` for older targets. |
| Film | `.mp4`, H.264 | Keep a matching poster still next to it. |
| Posters | `.webp` / `.jpg` | Named `<project>-poster.*` by convention. |

Images below the fold are lazy-loaded by `ImageReveal`; pass `priority` for
anything in the first viewport.

## Video

The `.mp4` files named in `src/data/projects.js` and in `Hero` are **not** in the
repository yet — footage is not committed here. Until a file is dropped in:

- `VideoPlayer` in `ambient` mode falls back to its poster, so the hero and the
  featured band still render;
- `VideoPlayer` in `feature` mode shows the poster with the play control until
  the source loads.

Decorative video is always `muted`, `loop`, `playsInline` and carries a poster.
Nothing autoplays with sound.

## Folders

| Folder | Contents |
| --- | --- |
| `home/` | Hero footage and poster, plus the six service stills used by the Services hover preview. |
| `projects/` | Film and documentary work. |
| `weddings/` | Wedding films. |
| `corporate/` | Brand films and corporate series. |
| `commercial/` | Commercial and product work. |
| `social/` | Social campaigns and vertical content. |
| `about/` | Studio portrait, the art-book collage and the contact background. |
| `team/` | Team portraits. |

## Regenerating the placeholders

The stand-ins were generated from the paths referenced in `src/data/*`. They are
committed, so there is nothing to run — delete them as real media arrives.
