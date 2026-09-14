import { Link } from 'react-router-dom'
import ImageReveal from '../components/ImageReveal/ImageReveal'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Reveal from '../components/Reveal/Reveal'
import { aboutMedia, collage, site, studioStatement, team } from '../data/site'
import { services, serviceNumber } from '../data/services'
import './About.css'

/**
 * The studio page — how ANULA works and who does it.
 * Deliberately visual: the principles carry the copy, not the other way round.
 */

const principles = [
  {
    title: 'Available light',
    body: 'We shoot what is there. Lighting a scene into something it is not is the fastest way to make a film look like an advert.',
  },
  {
    title: 'Small crews',
    body: 'Two or three people, moving quietly. The fewer people in a room, the more honest what happens in it tends to be.',
  },
  {
    title: 'One grade',
    body: 'Film, stills and social all finish in the same grade, so a campaign holds together wherever it lands.',
  },
  {
    title: 'Cut for the story',
    body: 'Nothing stays in a film because it was difficult to get. If it does not earn its place, it goes.',
  },
]

export default function About() {
  return (
    <div className="about">
      {/* --- Head -------------------------------------------------------- */}
      <header className="about__head container">
        <Reveal className="about__eyebrow" variant="fade">
          <span className="index-number">01</span>
          <span className="eyebrow">The studio</span>
        </Reveal>

        <Reveal>
          <h1 className="display display--xl about__title">
            <span>About</span>
            <span className="serif serif--italic about__title-serif">Anula</span>
          </h1>
        </Reveal>

        <Reveal className="about__lead" delay={160} variant="up-lg">
          <p className="lead">{studioStatement[0]}</p>
          <p className="body-lg">{studioStatement[1]}</p>
        </Reveal>
      </header>

      {/* --- Portrait ---------------------------------------------------- */}
      <section className="about__portrait">
        <div className="container">
          <ImageReveal
            src={aboutMedia.src}
            alt={aboutMedia.alt}
            aspect="cinema"
            priority
          />
        </div>
      </section>

      {/* --- Principles --------------------------------------------------- */}
      <section className="section about__principles">
        <div className="container">
          <SectionTitle
            index="02"
            serif="How we"
            sans="Work"
            eyebrow="Approach"
          />

          <ol className="about__principles-list">
            {principles.map((principle, index) => (
              <Reveal
                as="li"
                className="about__principle"
                key={principle.title}
                delay={index * 90}
              >
                <span className="index-number">{serviceNumber(index)}</span>
                <h3 className="about__principle-title">{principle.title}</h3>
                <p className="body">{principle.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* --- Disciplines --------------------------------------------------- */}
      <section className="section section--flush-top about__disciplines">
        <div className="container">
          <hr className="rule" />
          <div className="about__disciplines-grid">
            <Reveal className="about__disciplines-label" variant="fade">
              <span className="eyebrow">What we do</span>
            </Reveal>
            <ul className="about__disciplines-list">
              {services.map((service, index) => (
                <Reveal as="li" key={service.id} delay={index * 60} variant="fade">
                  <Link
                    to={
                      service.relatedCategory === 'all'
                        ? '/work'
                        : `/work?category=${service.relatedCategory}`
                    }
                  >
                    {service.title}
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Collage ------------------------------------------------------- */}
      <section className="about__collage section section--flush-top">
        <div className="container">
          <div className="about__collage-grid">
            {collage.slice(0, 4).map((image) => (
              <div className={`about__collage-cell about__collage-cell--${image.area}`} key={image.src}>
                <ImageReveal src={image.src} alt={image.alt} aspect={image.aspect} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Team ---------------------------------------------------------- */}
      <section className="section about__team">
        <div className="container">
          <SectionTitle index="03" serif="The" sans="Team" />

          <ul className="about__team-grid">
            {team.map((member, index) => (
              <Reveal as="li" className="about__member" key={member.name} delay={index * 100}>
                <ImageReveal src={member.image} alt={member.name} aspect="portrait" />
                <h3 className="about__member-name">{member.name}</h3>
                <p className="meta">{member.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* --- CTA ------------------------------------------------------------ */}
      <section className="about__cta section">
        <div className="container">
          <hr className="rule" />
          <Reveal className="about__cta-inner">
            <p className="lead about__cta-text">
              Based in {site.base}. <em>{site.availability}.</em>
            </p>
            <Link className="link-line" to="/contact">
              Start a project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
