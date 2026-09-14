import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

/**
 * Restores scroll position on navigation.
 *
 * A plain route change goes to the top instantly — a smooth scroll on top of a
 * page transition reads as a glitch. A route *with* a hash (the header's
 * "Services" link lands here after navigating home) waits a frame for the new
 * page to mount, then eases to the section.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return undefined
  }, [pathname, hash])

  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollManager />
      <Header />

      {/* Keyed on the path so each page replays its entrance. */}
      <main id="main" className="page-fade" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* One grain layer over the whole site. */}
      <div className="grain" aria-hidden="true" />
    </>
  )
}
