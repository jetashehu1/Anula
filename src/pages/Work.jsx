import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProjectGrid from '../components/ProjectGrid/ProjectGrid'
import Reveal from '../components/Reveal/Reveal'
import {
  getActiveCategories,
  getProjectsByCategory,
  projects,
} from '../data/projects'
import './Work.css'

/**
 * The archive.
 *
 * The active filter lives in the URL rather than in component state, so a
 * filtered view can be linked to directly — which is what the Services rows on
 * the Home page do (`/work?category=wedding`).
 */
export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('category') ?? 'all'

  const categories = useMemo(() => getActiveCategories(), [])
  const visible = useMemo(() => getProjectsByCategory(active), [active])

  const select = (id) => {
    if (id === 'all') {
      setSearchParams({}, { replace: true })
      return
    }
    setSearchParams({ category: id }, { replace: true })
  }

  return (
    <div className="work">
      <header className="work__head container">
        <Reveal className="work__eyebrow" variant="fade">
          <span className="index-number">
            {String(visible.length).padStart(2, '0')}
          </span>
          <span className="eyebrow">
            Projects <span aria-hidden="true">—</span> {projects.at(-1).year}
            &ndash;{projects[0].year}
          </span>
        </Reveal>

        <Reveal>
          <h1 className="display display--xl work__title">
            <span className="serif serif--italic work__title-serif">Our</span>
            <span>Work</span>
          </h1>
        </Reveal>

        <Reveal className="work__filters" variant="fade" delay={160}>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className={`work__filter${active === category.id ? ' is-active' : ''}`}
                  aria-pressed={active === category.id}
                  onClick={() => select(category.id)}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </header>

      <div className="container work__grid">
        {/* Keyed on the filter so the grid replays its reveal on every change. */}
        <ProjectGrid key={active} projects={visible} variant="archive" numbered />
      </div>
    </div>
  )
}
