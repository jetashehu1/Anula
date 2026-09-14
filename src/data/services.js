/**
 * ANULA — services.
 *
 * Rendered as the numbered rows in the Services section and reused on the
 * About and Contact pages. Order here is the order on screen; the displayed
 * number is derived from the index, so reordering the array is enough.
 *
 * Field reference
 * ---------------
 * id           Anchor / key.
 * title        Row label (rendered uppercase).
 * summary      One line shown on row hover and on narrow screens.
 * description  Longer paragraph for the expanded view.
 * deliverables What the client actually receives.
 * image        Still previewed on row hover (desktop only).
 * relatedCategory  Links the row through to the matching Work filter.
 */

export const services = [
  {
    id: 'film-production',
    title: 'Film Production',
    summary: 'Narrative and documentary work, from treatment to final grade.',
    description:
      'Short films, documentaries and branded narrative work. We take a project from first treatment through casting, scheduling and shooting to the final grade — or step into an existing production wherever it needs us.',
    deliverables: ['Treatment & direction', 'Full crew & equipment', 'Final grade & master'],
    image: '/media/home/service-film.svg',
    relatedCategory: 'film',
  },
  {
    id: 'wedding-films',
    title: 'Wedding Films',
    summary: 'Documentary weddings. Nothing staged, nothing repeated for the camera.',
    description:
      'We film weddings the way we film documentaries — two operators, available light, and no asking anyone to do it again. You get the day as it happened, cut into a film you will still want to watch in twenty years.',
    deliverables: ['Feature film', 'Social teaser', 'Full ceremony edit'],
    image: '/media/home/service-wedding.svg',
    relatedCategory: 'wedding',
  },
  {
    id: 'corporate',
    title: 'Corporate',
    summary: 'Brand films and company profiles that avoid sounding like either.',
    description:
      'Brand films, founder profiles and internal culture series. We start from what a company actually does rather than what it says about itself, which tends to produce something people will watch to the end.',
    deliverables: ['Brand film', 'Interview series', 'Landscape & vertical masters'],
    image: '/media/home/service-corporate.svg',
    relatedCategory: 'corporate',
  },
  {
    id: 'social-media-content',
    title: 'Social Media Content',
    summary: 'A month of vertical film, produced in a single block.',
    description:
      'Ongoing content retainers built around a fixed shot system and a locked grade, so a month of posts can be shot in two days and scheduled without coming back to us.',
    deliverables: ['Vertical film library', 'Stills set', 'Delivery templates'],
    image: '/media/home/service-social.svg',
    relatedCategory: 'social',
  },
  {
    id: 'photography',
    title: 'Photography',
    summary: 'Stills shot alongside the film, on the same lenses and the same grade.',
    description:
      'Editorial, product and documentary photography. Shot on the same lens set and graded to match the film, so a campaign holds together across every format it lands in.',
    deliverables: ['Editorial & product stills', 'Retouching', 'Matched grade'],
    image: '/media/home/service-photography.svg',
    relatedCategory: 'commercial',
  },
  {
    id: 'post-production',
    title: 'Post Production',
    summary: 'Editing, colour and sound — on our footage or yours.',
    description:
      'Offline and online editing, colour grading, sound design and delivery. We take on post for other production companies as readily as for our own shoots.',
    deliverables: ['Edit & assembly', 'Colour grade', 'Sound design & mastering'],
    image: '/media/home/service-post.svg',
    relatedCategory: 'all',
  },
]

/** Zero-padded display number for a row, e.g. index 0 -> "01". */
export const serviceNumber = (index) => String(index + 1).padStart(2, '0')

export const getServiceById = (id) => services.find((service) => service.id === id)

export default services
