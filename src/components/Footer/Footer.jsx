import { Link } from 'react-router-dom'
import logo from '../../assets/brand/anula-logo-white.svg'
import { currentYear, footerNavigation, site, socials } from '../../data/site'
import './Footer.css'

/**
 * Minimal closing band: who we are, where to go, where we are, what year it is.
 * The oversized wordmark underneath is the signature at the end of the reel.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <hr className="rule" />

        <div className="footer__grid">
          <div className="footer__identity">
            <p className="footer__name">{site.name}</p>
            <p className="meta">{site.role}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul>
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer__where">
            <p className="meta">
              {site.base} <span aria-hidden="true">/</span> {site.availability}
            </p>
            <p className="meta footer__year">&copy; {currentYear}</p>
          </div>
        </div>

        <div className="footer__mark" aria-hidden="true">
          <img src={logo} alt="" loading="lazy" />
        </div>
      </div>
    </footer>
  )
}
