/**
 * ANULA — project archive.
 *
 * Every project shown anywhere on the site is read from this file. Nothing in
 * `src/components` or `src/pages` hard-codes a title, an image or a credit, so
 * adding a project is a matter of appending one object below.
 *
 * Field reference
 * ---------------
 * slug          URL segment — the project lives at /work/<slug>.
 * title         Display title.
 * category      Must match an `id` in `categories` (drives the Work filters).
 * year          Display year.
 * client        Who it was made for. Use "Private" for weddings.
 * location      Where it was shot.
 * services      Short list of what ANULA delivered.
 * excerpt       One line used on cards and in listings.
 * description   Array of paragraphs for the project page.
 * aspect        Intrinsic shape of the cover: portrait | landscape | square | tall.
 * featured      Exactly one project should be `true` — it fills the Home
 *               "Featured project" band.
 * cover         { src, alt } — the still used in grids and as the page hero.
 * video         { src, poster } or null. A missing file degrades to the poster,
 *               so real footage can be dropped in later with no code change.
 * gallery       Editorial image sequence on the project page. `aspect` shapes
 *               the frame, `width` places it: full | wide | half | narrow.
 * credits       [{ role, name }] rendered as the closing credit block.
 */

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'film', label: 'Film' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'social', label: 'Social' },
]

/** Human-readable label for a category id, e.g. "wedding" -> "Wedding". */
export const categoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label ?? id

export const projects = [
  {
    slug: 'the-quiet-hours',
    title: 'The Quiet Hours',
    category: 'film',
    kind: 'Short Film',
    year: '2026',
    client: 'ANULA Originals',
    location: 'Ulcinj, Montenegro',
    services: ['Direction', 'Cinematography', 'Post Production'],
    excerpt: 'Three days on an emptying coast, shot entirely in available light.',
    description: [
      'A short film about the last week of a coastal season — the hour after the crowds leave and before the shutters come down.',
      'We shot across three consecutive days with a two-person crew, working only in available light. No set-ups, no lighting trucks: the schedule followed the sun rather than the other way around.',
      'The result is a film built from waiting. Long lenses, long takes, and a sound design carried almost entirely by wind and water.',
    ],
    aspect: 'portrait',
    featured: false,
    cover: {
      src: '/media/projects/the-quiet-hours-cover.jpg',
      alt: 'A figure walking an empty shoreline at dusk',
    },
    video: {
      src: '/media/projects/the-quiet-hours.mp4',
      poster: '/media/projects/the-quiet-hours-poster.jpg',
    },
    gallery: [
      {
        src: '/media/projects/the-quiet-hours-01.jpg',
        alt: 'Wide shot of the shoreline at first light',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/projects/the-quiet-hours-02.jpg',
        alt: 'Close detail of salt on weathered stone',
        aspect: 'portrait',
        width: 'half',
      },
      {
        src: '/media/projects/the-quiet-hours-03.jpg',
        alt: 'Empty chairs stacked against a shuttered window',
        aspect: 'portrait',
        width: 'half',
      },
      {
        src: '/media/projects/the-quiet-hours-04.jpg',
        alt: 'The coast road at blue hour',
        aspect: 'wide',
        width: 'wide',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Editing', name: 'ANULA Post' },
      { role: 'Colour', name: 'ANULA Post' },
      { role: 'Sound', name: 'Field recordings' },
    ],
  },
  {
    slug: 'salt-and-stone',
    title: 'Salt & Stone',
    category: 'film',
    kind: 'Short Film',
    year: '2025',
    client: 'Atlas Pictures',
    location: 'Rugova Valley, Kosovo',
    services: ['Direction', 'Cinematography', 'Editing'],
    excerpt: 'A portrait of the last working quarry in the valley.',
    description: [
      'Commissioned as the opening film of a three-part series on disappearing trades, Salt & Stone follows a single shift at a quarry that has been cut by the same family for four generations.',
      'The brief asked for reverence without nostalgia. We answered with a static camera, natural sound, and a refusal to score anything until the final minute.',
    ],
    aspect: 'landscape',
    featured: false,
    cover: {
      src: '/media/projects/salt-and-stone-cover.jpg',
      alt: 'Quarry face catching low morning sun',
    },
    video: {
      src: '/media/projects/salt-and-stone.mp4',
      poster: '/media/projects/salt-and-stone-poster.jpg',
    },
    gallery: [
      {
        src: '/media/projects/salt-and-stone-01.jpg',
        alt: 'Cut stone stacked in the yard',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/projects/salt-and-stone-02.jpg',
        alt: 'Hands resting on a chisel',
        aspect: 'square',
        width: 'half',
      },
      {
        src: '/media/projects/salt-and-stone-03.jpg',
        alt: 'Dust in a shaft of light',
        aspect: 'square',
        width: 'half',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Atlas Pictures' },
        { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'north-of-morning',
    title: 'North of Morning',
    category: 'film',
    kind: 'Documentary',
    year: '2025',
    client: 'Kino Collective',
    location: 'Sharr Mountains',
    services: ['Direction', 'Cinematography', 'Post Production'],
    excerpt: 'Eleven days with a shepherd who has not missed a season in forty years.',
    description: [
      'A feature-length documentary shot across eleven days at altitude, carrying everything we needed on foot.',
      'Working that lean changes the film you make. There is no second take when the light is going and the flock is moving, so the cut favours what actually happened over what we planned.',
    ],
    aspect: 'tall',
    featured: false,
    cover: {
      src: '/media/projects/north-of-morning-cover.jpg',
      alt: 'Ridgeline silhouetted against a pale sky',
    },
    video: null,
    gallery: [
      {
        src: '/media/projects/north-of-morning-01.jpg',
        alt: 'Flock crossing a high pass',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/projects/north-of-morning-02.jpg',
        alt: 'Portrait against a stone wall',
        aspect: 'portrait',
        width: 'narrow',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Kino Collective' },
      { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Editing', name: 'Lira Krasniqi' },
    ],
  },
  {
    slug: 'elena-and-marko',
    title: 'Elena & Marko',
    category: 'wedding',
    kind: 'Wedding Film',
    year: '2026',
    client: 'Private',
    location: 'Prizren, Kosovo',
    services: ['Wedding Film', 'Photography', 'Post Production'],
    excerpt: 'An old town wedding, filmed like a documentary and cut like a love letter.',
    description: [
      'Two days in Prizren — the preparations, the walk down through the old town, and a dinner that ran until the call to prayer.',
      'We film weddings the way we film documentaries: two operators, no staging, no asking anyone to do it again for the camera. Everything in the final cut happened once.',
      'Delivered as an eight-minute film, a ninety-second teaser for social, and a full-length ceremony edit.',
    ],
    aspect: 'portrait',
    featured: true,
    cover: {
      src: '/media/weddings/elena-and-marko-cover.jpg',
      alt: 'Couple framed in a stone doorway',
    },
    video: {
      src: '/media/weddings/elena-and-marko.mp4',
      poster: '/media/weddings/elena-and-marko-poster.jpg',
    },
    gallery: [
      {
        src: '/media/weddings/elena-and-marko-01.jpg',
        alt: 'Morning light across the preparation room',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/weddings/elena-and-marko-02.jpg',
        alt: 'Detail of hands and rings',
        aspect: 'portrait',
        width: 'half',
      },
      {
        src: '/media/weddings/elena-and-marko-03.jpg',
        alt: 'The walk through the old town',
        aspect: 'portrait',
        width: 'half',
      },
      {
          src: '/media/weddings/elena-and-marko-04.jpg',
        alt: 'Long table dinner after dark',
        aspect: 'wide',
        width: 'wide',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Cinematography', name: 'Arber Tahiri, Jeta Shehu' },
      { role: 'Photography', name: 'Jeta Shehu' },
      { role: 'Editing', name: 'ANULA Post' },
      { role: 'Colour', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'a-day-in-june',
    title: 'A Day in June',
    category: 'wedding',
    kind: 'Wedding Film',
    year: '2025',
    client: 'Private',
    location: 'Lake Shkodra',
    services: ['Wedding Film', 'Drone', 'Editing'],
    excerpt: 'A lakeside ceremony that ran straight into a summer storm.',
    description: [
      'The forecast turned an hour before the ceremony. Rather than fight it, we let the weather into the film.',
      'What was planned as a golden-hour edit became something colder and better — rain on the water, a marquee lit from inside, and a hundred people who refused to go home.',
    ],
    aspect: 'landscape',
    featured: false,
    cover: {
      src: '/media/weddings/a-day-in-june-cover.jpg',
      alt: 'Marquee glowing against a storm-dark lake',
    },
    video: {
      src: '/media/weddings/a-day-in-june.mp4',
      poster: '/media/weddings/a-day-in-june-poster.jpg',
    },
    gallery: [
      {
        src: '/media/weddings/a-day-in-june-01.jpg',
        alt: 'Rain across the lake surface',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/weddings/a-day-in-june-02.jpg',
        alt: 'First dance under strung lights',
        aspect: 'square',
        width: 'half',
      },
      {
        src: '/media/weddings/a-day-in-june-03.jpg',
        alt: 'Guests sheltering under the marquee edge',
        aspect: 'square',
        width: 'half',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Director', name: 'Jeta Shehu' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Aerial', name: 'ANULA' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'the-vows-we-keep',
    title: 'The Vows We Keep',
    category: 'wedding',
    kind: 'Wedding Film',
    year: '2025',
    client: 'Private',
    location: 'Gjakova, Kosovo',
    services: ['Wedding Film', 'Photography'],
    excerpt: 'A three-generation family house, one afternoon, no second takes.',
    description: [
      'A small wedding held entirely in a family courtyard, with three generations under the same roof for the first time in a decade.',
      'We used a single camera and stayed out of the way. The film is twelve minutes long and almost entirely unbroken conversation.',
    ],
    aspect: 'square',
    featured: false,
    cover: {
      src: '/media/weddings/the-vows-we-keep-cover.jpg',
      alt: 'Courtyard table set under a vine canopy',
    },
    video: null,
    gallery: [
      {
        src: '/media/weddings/the-vows-we-keep-01.jpg',
        alt: 'Grandmother watching from the doorway',
        aspect: 'portrait',
        width: 'narrow',
      },
      {
          src: '/media/weddings/the-vows-we-keep-02.jpg',
        alt: 'Courtyard filled with afternoon light',
        aspect: 'landscape',
        width: 'full',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Photography', name: 'Jeta Shehu' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'nord-atelier',
    title: 'Nord Atelier',
    category: 'corporate',
    kind: 'Brand Film',
    year: '2026',
    client: 'Nord Atelier',
    location: 'Pristina, Kosovo',
    services: ['Brand Film', 'Photography', 'Post Production'],
    excerpt: 'A furniture workshop filmed as a craft documentary, not an advert.',
    description: [
      'Nord Atelier came to us with a brief for a company profile. We proposed the opposite: no voice-over, no founder to camera, no claims.',
      'The finished three-minute film shows one chair being made from rough timber to finished frame. The company name appears once, at the end.',
      'It has since been used as their homepage film, their trade-fair loop and their recruitment piece.',
    ],
    aspect: 'landscape',
    featured: false,
    cover: {
      src: '/media/corporate/nord-atelier-cover.jpg',
      alt: 'Workshop bench under a high window',
    },
    video: {
      src: '/media/corporate/nord-atelier.mp4',
      poster: '/media/corporate/nord-atelier-poster.jpg',
    },
    gallery: [
      {
        src: '/media/corporate/nord-atelier-01.jpg',
        alt: 'Timber stacked to season',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/corporate/nord-atelier-02.jpg',
        alt: 'Plane shavings curling from the blade',
        aspect: 'portrait',
        width: 'half',
      },
      {
        src: '/media/corporate/nord-atelier-03.jpg',
        alt: 'Finished frame against a bare wall',
        aspect: 'portrait',
        width: 'half',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Nord Atelier' },
      { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Editing', name: 'ANULA Post' },
      { role: 'Colour', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'built-by-hand',
    title: 'Built by Hand',
    category: 'corporate',
    kind: 'Corporate Series',
    year: '2025',
    client: 'Meridian Group',
    location: 'Peja, Kosovo',
    services: ['Corporate Video', 'Interviews', 'Editing'],
    excerpt: 'Six short films, six people, one construction group.',
    description: [
      'An internal culture series built around the people who actually do the work, produced over four shooting days across three sites.',
      'Each film runs under ninety seconds and was cut for both internal screens and social distribution, with vertical masters delivered alongside the landscape edits.',
    ],
    aspect: 'portrait',
    featured: false,
    cover: {
      src: '/media/corporate/built-by-hand-cover.jpg',
      alt: 'Site worker framed against scaffolding',
    },
    video: null,
    gallery: [
      {
        src: '/media/corporate/built-by-hand-01.jpg',
        alt: 'Scaffolding grid against an overcast sky',
        aspect: 'landscape',
        width: 'full',
      },
      {
            src: '/media/corporate/built-by-hand-02.jpg',
        alt: 'Interview set-up in a half-finished room',
        aspect: 'landscape',
        width: 'wide',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Meridian Group' },
      { role: 'Director', name: 'Lira Krasniqi' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'lumen-eyewear',
    title: 'Lumen Eyewear',
    category: 'commercial',
    kind: 'Commercial',
    year: '2026',
    client: 'Lumen',
    location: 'Studio — Pristina',
    services: ['Commercial', 'Product Film', 'Photography'],
    excerpt: 'A studio campaign built on one moving light and nothing else.',
    description: [
      'A launch campaign for an independent eyewear label, shot over two studio days against a single seamless.',
      'The entire look comes from one motorised light on a track. No gels, no set, no retouching beyond dust removal — the product had to hold the frame on its own.',
      'Delivered as a thirty-second hero film, six cut-downs and a full stills set.',
    ],
    aspect: 'square',
    featured: false,
    cover: {
      src: '/media/commercial/lumen-eyewear-cover.jpg',
      alt: 'Eyewear catching a single raking light',
    },
    video: {
      src: '/media/commercial/lumen-eyewear.mp4',
      poster: '/media/commercial/lumen-eyewear-poster.jpg',
    },
    gallery: [
      {
        src: '/media/commercial/lumen-eyewear-01.jpg',
        alt: 'Product still against seamless black',
        aspect: 'square',
        width: 'half',
      },
      {
        src: '/media/commercial/lumen-eyewear-02.jpg',
        alt: 'Model half in shadow',
        aspect: 'square',
        width: 'half',
      },
      {
        src: '/media/commercial/lumen-eyewear-03.jpg',
        alt: 'Wide studio set-up with the light on track',
        aspect: 'wide',
        width: 'full',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Lumen' },
      { role: 'Director', name: 'Arber Tahiri' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Photography', name: 'Jeta Shehu' },
      { role: 'Colour', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'after-hours',
    title: 'After Hours',
    category: 'commercial',
    kind: 'Commercial',
    year: '2025',
    client: 'Ora Coffee',
    location: 'Pristina, Kosovo',
    services: ['Commercial', 'Social Cut-downs'],
    excerpt: 'One roastery, one night shift, one continuous take.',
    description: [
      'A sixty-second commercial shot as a single continuous take through a working roastery between midnight and four.',
      'Eleven attempts, one usable. The ninth take is the one that shipped.',
    ],
    aspect: 'landscape',
    featured: false,
    cover: {
      src: '/media/commercial/after-hours-cover.jpg',
      alt: 'Roastery interior lit by a single overhead lamp',
    },
    video: null,
    gallery: [
      {
        src: '/media/commercial/after-hours-01.jpg',
        alt: 'Roaster drum in motion',
        aspect: 'landscape',
        width: 'full',
      },
      {
        src: '/media/commercial/after-hours-02.jpg',
        alt: 'Steam against a dark window',
        aspect: 'portrait',
        width: 'narrow',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Ora Coffee' },
      { role: 'Director', name: 'Lira Krasniqi' },
      { role: 'Cinematography', name: 'Arber Tahiri' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'the-daily-reel',
    title: 'The Daily Reel',
    category: 'social',
    kind: 'Social Campaign',
    year: '2026',
    client: 'Casa Verde',
    location: 'Pristina, Kosovo',
    services: ['Social Content', 'Vertical Film', 'Photography'],
    excerpt: 'Forty vertical films a month, shot in two days.',
    description: [
      'An ongoing content retainer producing a month of vertical film in a single two-day block.',
      'The system matters more than any one post: a fixed set of shot types, a locked grade, and a delivery template that lets the client schedule a month without coming back to us.',
    ],
    aspect: 'tall',
    featured: false,
    cover: {
            src: '/media/social/the-daily-reel-cover.jpg',
      alt: 'Vertical frame of a kitchen pass at service',
    },
    video: null,
    gallery: [
      {
        src: '/media/social/the-daily-reel-01.jpg',
        alt: 'Vertical still from the campaign',
        aspect: 'tall',
        width: 'narrow',
      },
      {
        src: '/media/social/the-daily-reel-02.jpg',
        alt: 'Overhead of the pass mid-service',
        aspect: 'landscape',
        width: 'full',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Casa Verde' },
      { role: 'Direction', name: 'ANULA' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
  {
    slug: 'in-frame',
    title: 'In Frame',
    category: 'social',
    kind: 'Social Content',
    year: '2025',
    client: 'Studio Nine',
    location: 'Tirana, Albania',
    services: ['Social Content', 'Photography', 'Editing'],
    excerpt: 'A quarterly content library for an architecture practice.',
    description: [
      'Four shoots a year across completed projects, delivering a mixed library of stills and short vertical film.',
      'Everything is shot to the same grade and the same lens set so the feed reads as one body of work rather than a series of unrelated visits.',
    ],
    aspect: 'portrait',
    featured: false,
    cover: {
      src: '/media/social/in-frame-cover.jpg',
      alt: 'Concrete stair lit from a high window',
    },
    video: null,
    gallery: [
      {
        src: '/media/social/in-frame-01.jpg',
        alt: 'Interior corner in raking light',
        aspect: 'portrait',
        width: 'half',
      },
      {
        src: '/media/social/in-frame-02.jpg',
        alt: 'Facade detail against sky',
        aspect: 'portrait',
        width: 'half',
      },
    ],
    credits: [
      { role: 'Production', name: 'ANULA' },
      { role: 'Client', name: 'Studio Nine' },
      { role: 'Photography', name: 'Jeta Shehu' },
      { role: 'Editing', name: 'ANULA Post' },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Selectors                                                                   */
/* -------------------------------------------------------------------------- */

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug)

/** Every project, or just one category. `all` is treated as no filter. */
export const getProjectsByCategory = (category) =>
  !category || category === 'all'
    ? projects
    : projects.filter((project) => project.category === category)

/** The project used for the full-width band on the Home page. */
export const getFeaturedProject = () =>
  projects.find((project) => project.featured) ?? projects[0]

/** The first `count` projects, used for the Home "Selected work" grid. */
export const getSelectedProjects = (count = 6) => projects.slice(0, count)

/** Wraps around, so the last project links back to the first. */
export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}

/** Only the categories that actually have work behind them. */
export const getActiveCategories = () =>
  categories.filter(
    (category) =>
      category.id === 'all' ||
      projects.some((project) => project.category === category.id),
  )

export default projects
