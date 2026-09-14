import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal/Reveal'
import './NotFound.css'

/** Also rendered in place of a project page when a slug does not exist. */
export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <Reveal variant="fade">
          <span className="eyebrow">Error 404</span>
        </Reveal>

        <Reveal>
          <h1 className="display display--xl not-found__title">
            Nothing <span className="serif serif--italic">here.</span>
          </h1>
        </Reveal>

        <Reveal delay={140} variant="fade">
          <p className="body-lg not-found__body">
            This frame was cut. The rest of the work is still where you left it.
          </p>
        </Reveal>

        <Reveal className="not-found__links" delay={220} variant="fade">
          <Link className="link-line" to="/work">
            Selected work
          </Link>
          <Link className="link-line" to="/">
            Back to start
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
