import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ImageReveal from '../components/ImageReveal/ImageReveal'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import Reveal from '../components/Reveal/Reveal'
import NotFound from './NotFound'
import {
  categoryLabel,
  getNextProject,
  getProjectBySlug,
} from '../data/projects'
import { site } from '../data/site'
import './Project.css'

/**
 * A single project at /work/:slug.
 *
 * Everything below the hero is driven by the record in `projects.js`: the
 * video block only appears if there is footage, the gallery lays itself out
 * from each image's declared width, and the credits are whatever the record
 * lists. Adding a project needs no changes here.
 */
export default function Project() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <NotFound />

  const next = getNextProject(slug)

  const facts = [
    { label: 'Category', value: `${categoryLabel(project.category)} — ${project.kind}` },
    { label: 'Year', value: project.year },
    { label: 'Production', value: site.name },
    { label: 'Client', value: project.client },
    { label: 'Location', value: project.location },
  ]

  return (
    <article className="project">
      {/* --- Hero ------------------------------------------------------- */}
      <header className="project__hero">
        <div className="project__hero-media">
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            fetchpriority="high"
            decoding="async"
          />
          <span className="project__hero-scrim" aria-hidden="true" />
        </div>

        <div className="project__hero-content container">
          <p className="eyebrow eyebrow--accent">{categoryLabel(project.category)}</p>
          <h1 className="display project__title">{project.title}</h1>
          <p className="project__excerpt lead">{project.excerpt}</p>
        </div>
      </header>

      {/* --- Facts ------------------------------------------------------ */}
      <section className="project__facts section">
        <div className="container">
          <dl className="project__facts-grid">
            {facts.map((fact, index) => (
              <Reveal as="div" className="project__fact" key={fact.label} delay={index * 60}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* --- Description ------------------------------------------------ */}
      <section className="project__intro">
        <div className="container">
          <div className="project__intro-grid">
            <Reveal className="project__intro-label" variant="fade">
              <span className="eyebrow">The film</span>
            </Reveal>

            <Reveal className="project__intro-copy" delay={120}>
              {project.description.map((paragraph, index) => (
                <p className={index === 0 ? 'lead' : 'body-lg'} key={paragraph.slice(0, 24)}>
                  {paragraph}
                </p>
              ))}

              {project.services?.length > 0 && (
                <ul className="project__services">
                  {project.services.map((service) => (
                    <li className="meta" key={service}>
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Film ------------------------------------------------------- */}
      {project.video && (
        <section className="project__film section">
          <div className="container">
            <Reveal variant="fade">
              <VideoPlayer
                src={project.video.src}
                poster={project.video.poster}
                alt={`${project.title} — film still`}
                mode="feature"
                aspect="16 / 9"
                label={`Play ${project.title}`}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* --- Editorial image grid --------------------------------------- */}
      {project.gallery?.length > 0 && (
        <section className="project__gallery section section--flush-top">
          <div className="container">
            <div className="project__gallery-grid">
              {project.gallery.map((image) => (
                <div
                  className={`project__gallery-cell project__gallery-cell--${image.width}`}
                  key={image.src}
                >
                  <ImageReveal src={image.src} alt={image.alt} aspect={image.aspect}>
                    {image.alt && (
                      <figcaption className="project__caption meta">{image.alt}</figcaption>
                    )}
                  </ImageReveal>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- Credits ---------------------------------------------------- */}
      <section className="project__credits section">
        <div className="container">
          <hr className="rule" />
          <div className="project__credits-grid">
            <Reveal className="project__credits-title" variant="fade">
              <h2 className="display project__credits-heading">
                <span className="serif serif--italic">Credits</span>
              </h2>
            </Reveal>

            <dl className="project__credits-list">
              {project.credits.map((credit, index) => (
                <Reveal
                  as="div"
                  className="project__credit"
                  key={`${credit.role}-${credit.name}`}
                  delay={index * 50}
                >
                  <dt className="meta">{credit.role}</dt>
                  <dd>{credit.name}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* --- Next project ------------------------------------------------ */}
      <nav className="project__next" aria-label="Next project">
        <Link className="project__next-link" to={`/work/${next.slug}`}>
          <div className="project__next-media">
            <img src={next.cover.src} alt="" loading="lazy" />
            <span className="project__next-scrim" aria-hidden="true" />
          </div>

          <div className="project__next-content container">
            <span className="eyebrow">Next project</span>
            <span className="display project__next-title">
              <span className="serif serif--italic">{next.title}</span>
            </span>
            <span className="project__next-meta meta">
              {categoryLabel(next.category)} <span aria-hidden="true">—</span> {next.year}
              <ArrowRight size={16} strokeWidth={1} aria-hidden="true" />
            </span>
          </div>
        </Link>
      </nav>
    </article>
  )
}
