/**
 * ANULA — studio details.
 *
 * Navigation, contact points and the standing copy that appears in more than
 * one place. Kept out of the components for the same reason projects are:
 * ANULA should be able to change an email address without touching JSX.
 */

export const site = {
  name: 'ANULA',
  role: 'Production Studio',
  tagline: 'Stories in motion.',
  base: 'Kosovo',
  availability: 'Available worldwide',
  email: 'hello@anula.com',
  phone: '+383 00 000 000',
}

export const navigation = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerNavigation = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const socials = [
  { label: 'Instagram', href: 'https://instagram.com/', handle: '@anula.studio' },
  { label: 'Vimeo', href: 'https://vimeo.com/', handle: 'vimeo.com/anula' },
  { label: 'Email', href: `mailto:${site.email}`, handle: site.email },
]

/** Standing copy — the studio statement used on Home and About. */
export const studioStatement = [
  'ANULA is a creative production studio built around visual storytelling.',
  'From intimate wedding films to commercial productions and social media campaigns, we create images and films designed to communicate emotion, identity and atmosphere.',
]

export const currentYear = new Date().getFullYear()

/* -------------------------------------------------------------------------- */
/* Studio imagery                                                              */
/* -------------------------------------------------------------------------- */

/**
 * The opening frame on Home.
 *
 * `video` is the looping footage behind the wordmark; `poster` is the still
 * shown before it loads, and on its own if the footage is not in place yet.
 * To use your own frame: drop the files into `public/media/home/` and point
 * these two lines at them, e.g. '/media/home/hero-poster.jpg'.
 */
export const heroMedia = {
  video: '/media/home/hero.mp4',
  poster: '/media/home/hero-poster.svg',
  alt: 'A pickup truck alone on an empty stretch of coastline',
}

/** The still that anchors the About split on Home and the About page. */
export const aboutMedia = {
  src: '/media/about/studio-01.svg',
  alt: 'Operator framing a shot against a bare studio wall',
  aspect: 'portrait',
}

/**
 * The art-book collage. `area` names a slot in the composition defined in
 * Home.css — swapping the images below re-dresses the spread without
 * touching the layout.
 */
export const collage = [
  { area: 'a', src: '/media/about/collage-01.svg', alt: 'Camera body on a flight case', aspect: 'portrait' },
  { area: 'b', src: '/media/about/collage-02.svg', alt: 'Location scout frame at dusk', aspect: 'landscape' },
  { area: 'c', src: '/media/about/collage-03.svg', alt: 'Hand-held monitor in low light', aspect: 'square' },
  { area: 'd', src: '/media/about/collage-04.svg', alt: 'Long corridor of window light', aspect: 'tall' },
  { area: 'e', src: '/media/about/collage-05.svg', alt: 'Contact sheet pinned to a wall', aspect: 'landscape' },
  { area: 'f', src: '/media/about/collage-06.svg', alt: 'Reflection in a rain-covered window', aspect: 'portrait' },
]

/** Full-bleed background behind the closing contact band. */
export const contactMedia = {
  src: '/media/about/contact-01.svg',
  alt: 'Empty set after wrap, lit by a single practical',
}

/** The people behind the work — used on the About page. */
export const team = [
  {
    name: 'Arben Shehu',
    role: 'Director / Cinematographer',
    image: '/media/team/arben.svg',
  },
  {
    name: 'Lira Krasniqi',
    role: 'Director / Producer',
    image: '/media/team/lira.svg',
  },
  {
    name: 'Dea Berisha',
    role: 'Photography / Post',
    image: '/media/team/dea.svg',
  },
]

export default site
