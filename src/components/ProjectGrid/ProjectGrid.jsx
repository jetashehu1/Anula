import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectGrid.css'

/**
 * The editorial grid.
 *
 * Rather than repeating one card shape, every position in the grid has a
 * deliberate column span, image ratio and vertical offset — the rhythm a
 * magazine spread gets from its gutters. The patterns below repeat, so the
 * composition holds no matter how many projects are in the data.
 *
 * Layout is deliberately owned here and not in `projects.js`: the data
 * describes what a project *is*, the grid decides how it sits on the page.
 */

const RHYTHMS = {
  /* Home — wide swings, lots of black between frames. */
  editorial: [
    { column: '1 / 7', aspect: 'portrait', offset: 0 },
    { column: '8 / 13', aspect: 'landscape', offset: 12 },
    { column: '2 / 6', aspect: 'tall', offset: 0 },
    { column: '7 / 13', aspect: 'square', offset: 9 },
    { column: '1 / 6', aspect: 'landscape', offset: 0 },
    { column: '7 / 12', aspect: 'portrait', offset: 7 },
  ],
  /* Work — steadier, because the page has to carry the whole archive. */
  archive: [
    { column: '1 / 7', aspect: 'landscape', offset: 0 },
    { column: '8 / 13', aspect: 'portrait', offset: 10 },
    { column: '1 / 5', aspect: 'portrait', offset: 0 },
    { column: '6 / 13', aspect: 'landscape', offset: 6 },
    { column: '2 / 7', aspect: 'square', offset: 0 },
    { column: '8 / 12', aspect: 'tall', offset: 8 },
  ],
}

export default function ProjectGrid({
  projects,
  variant = 'editorial',
  numbered = false,
  className = '',
}) {
  const rhythm = RHYTHMS[variant] ?? RHYTHMS.editorial

  if (!projects.length) {
    return (
      <p className="project-grid__empty lead">
        No projects in this category yet — <em>check back shortly.</em>
      </p>
    )
  }

  return (
    <div className={`project-grid project-grid--${variant}${className ? ` ${className}` : ''}`}>
      {projects.map((project, i) => {
        const slot = rhythm[i % rhythm.length]

        return (
          <div
            key={project.slug}
            className="project-grid__item"
            style={{
              '--column': slot.column,
              '--offset': `${slot.offset}vw`,
            }}
          >
            <ProjectCard
              project={project}
              aspect={slot.aspect}
              index={numbered ? i : undefined}
              priority={i < 2}
            />
          </div>
        )
      })}
    </div>
  )
}
