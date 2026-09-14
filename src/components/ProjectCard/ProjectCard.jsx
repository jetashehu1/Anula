import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ImageReveal from '../ImageReveal/ImageReveal'
import { categoryLabel } from '../../data/projects'
import './ProjectCard.css'

/**
 * One project in a grid: still, title, category, year.
 *
 * On hover the still scales fractionally, a thin overlay lifts the type off
 * the image, and the title swaps for a champagne copy of itself sliding up
 * from below. All of it is one transition group — nothing bounces.
 *
 * @param {object} project  A record from src/data/projects.js.
 * @param {string} aspect   Overrides the project's intrinsic shape so the grid
 *                          can compose its own rhythm.
 * @param {boolean} priority  Eager-load the still (above the fold).
 */
export default function ProjectCard({ project, aspect, index, priority = false }) {
  const { slug, title, category, year, cover, excerpt } = project

  return (
    <article className="project-card">
      <Link className="project-card__link" to={`/work/${slug}`}>
        <div className="project-card__media">
          <ImageReveal
            src={cover.src}
            alt={cover.alt}
            aspect={aspect ?? project.aspect}
            priority={priority}
          />
          <span className="project-card__scrim" aria-hidden="true" />
          <span className="project-card__cue" aria-hidden="true">
            <ArrowUpRight size={15} strokeWidth={1.25} />
          </span>
        </div>

        <div className="project-card__info">
          <h3 className="project-card__title">
            <span className="project-card__title-swap">
              <span className="project-card__title-line">{title}</span>
              <span className="project-card__title-line project-card__title-line--alt">
                {title}
              </span>
            </span>
          </h3>

          <p className="project-card__meta meta">
            <span>{categoryLabel(category)}</span>
            <span className="project-card__dot" aria-hidden="true" />
            <span>{year}</span>
          </p>

          {excerpt && <p className="project-card__excerpt">{excerpt}</p>}
        </div>

        {typeof index === 'number' && (
          <span className="project-card__index index-number" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </Link>
    </article>
  )
}
