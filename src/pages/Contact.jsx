import Reveal from '../components/Reveal/Reveal'
import ImageReveal from '../components/ImageReveal/ImageReveal'
import { contactMedia, site, socials } from '../data/site'
import { services } from '../data/services'
import './Contact.css'

/**
 * Contact.
 *
 * No form: everything here resolves to a real address the studio already
 * reads. A form with nowhere to post is worse than an email link, and can be
 * added later once there is an endpoint behind it.
 */

const brief = [
  'What the film is for, and who it is for.',
  'Roughly when it shoots and where.',
  'A budget range, even a wide one.',
  'Anything you have seen that felt right.',
]

export default function Contact() {
  return (
    <div className="contact">
      {/* --- Head -------------------------------------------------------- */}
      <header className="contact__head">
        <div className="contact__head-media">
          <img src={contactMedia.src} alt={contactMedia.alt} fetchpriority="high" />
          <span className="contact__head-scrim" aria-hidden="true" />
        </div>

        <div className="contact__head-content container">
          <Reveal variant="fade">
            <span className="eyebrow eyebrow--accent">Contact</span>
          </Reveal>

          <Reveal>
            <h1 className="display display--display contact__title">
              <span>Let&rsquo;s</span>
              <span className="serif serif--italic contact__title-serif">talk.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </Reveal>
        </div>
      </header>

      {/* --- Details ------------------------------------------------------ */}
      <section className="section contact__details">
        <div className="container">
          <div className="contact__grid">
            <Reveal className="contact__block">
              <h2 className="eyebrow">Studio</h2>
              <p className="contact__value">{site.base}</p>
              <p className="meta">{site.availability}</p>
            </Reveal>

            <Reveal className="contact__block" delay={80}>
              <h2 className="eyebrow">Email</h2>
              <p className="contact__value">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p className="meta">Replies within two working days</p>
            </Reveal>

            <Reveal className="contact__block" delay={160}>
              <h2 className="eyebrow">Elsewhere</h2>
              <ul className="contact__socials">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                    >
                      {social.label}
                      <span className="contact__handle">{social.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Brief -------------------------------------------------------- */}
      <section className="section section--flush-top contact__brief">
        <div className="container">
          <hr className="rule" />
          <div className="contact__brief-grid">
            <Reveal className="contact__brief-title">
              <h2 className="display contact__brief-heading">
                What to <span className="serif serif--italic">send us.</span>
              </h2>
            </Reveal>

            <div className="contact__brief-body">
              <ol className="contact__brief-list">
                {brief.map((item, index) => (
                  <Reveal as="li" key={item} delay={index * 80}>
                    <span className="index-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="body-lg">{item}</span>
                  </Reveal>
                ))}
              </ol>

              <Reveal className="contact__services" delay={240} variant="fade">
                <p className="eyebrow">We take on</p>
                <p className="contact__services-list">
                  {services.map((service) => service.title).join(' / ')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- Closing frame ------------------------------------------------- */}
      <section className="contact__closing section section--flush-top">
        <div className="container">
          <ImageReveal
            src={contactMedia.src}
            alt={contactMedia.alt}
            aspect="cinema"
          />
        </div>
      </section>
    </div>
  )
}
