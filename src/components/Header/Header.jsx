import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/brand/anula-logo-white.svg'
import { navigation, site, socials } from '../../data/site'
import './Header.css'

/**
 * Fixed, near-invisible header.
 *
 * Over the hero it is nothing but the wordmark and four words. Once the page
 * scrolls past the first viewport it picks up a hairline and a blurred ground
 * so it stays legible over photography.
 *
 * The "Services" entry points at a section rather than a page, so it is
 * handled separately: navigate home first if needed, then scroll to it.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Never leave the menu open across a navigation.
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  // Freeze the page behind the fullscreen menu.
  useEffect(() => {
    document.body.classList.toggle('is-locked', isMenuOpen)
    return () => document.body.classList.remove('is-locked')
  }, [isMenuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const goToSection = (event, to) => {
    event.preventDefault()
    const [path, hash] = to.split('#')
    const target = path || '/'

    setIsMenuOpen(false)

    if (location.pathname !== target) {
      navigate(to)
      return
    }

    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const renderLink = (item, onNavigate) => {
    if (item.to.includes('#')) {
      return (
        <a href={item.to} onClick={(event) => goToSection(event, item.to)}>
          {item.label}
        </a>
      )
    }

    return (
      <NavLink
        to={item.to}
        onClick={onNavigate}
        className={({ isActive }) => (isActive ? 'is-active' : undefined)}
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <>
      <header
        className={`header${isScrolled ? ' is-scrolled' : ''}${
          isMenuOpen ? ' is-menu-open' : ''
        }`}
      >
        <div className="header__inner">
          <Link className="header__logo" to="/" aria-label={`${site.name} — home`}>
            <img src={logo} alt={site.name} width="120" height="21" />
          </Link>

          <nav className="header__nav" aria-label="Primary">
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>{renderLink(item)}</li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="header__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <span className="header__toggle-bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen menu — mobile and tablet only. */}
      <div
        id="site-menu"
        className={`menu${isMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="menu__nav" aria-label="Mobile">
          <ul>
            {navigation.map((item, index) => (
              <li key={item.label} style={{ '--i': index }}>
                {renderLink(item, () => setIsMenuOpen(false))}
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu__foot">
          <a className="menu__email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <ul className="menu__socials">
            {socials
              .filter((social) => social.label !== 'Email')
              .map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
