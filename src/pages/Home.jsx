import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import ProjectGrid from '../components/ProjectGrid/ProjectGrid'
import Services from '../components/Services/Services'
import ImageReveal from '../components/ImageReveal/ImageReveal'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import Reveal from '../components/Reveal/Reveal'
import { getFeaturedProject, getSelectedProjects } from '../data/projects'
import {
  aboutMedia,
  collage,
  heroMedia,
  contactMedia,
  site,
  socials,
  studioStatement,
} from '../data/site'
import './Home.css'

export default function Home() {
  const selected = getSelectedProjects(6)
  const featured = getFeaturedProject()

  return (
    <>
      {/* 01 — Hero ------------------------------------------------------- */}
      <Hero video={heroMedia.video} poster={heroMedia.poster} alt={heroMedia.alt} />

      {/* 02 — Introduction ----------------------------------------------- */}
      <section className="intro section section--lg" id="intro">
        <div className="container">
          <div className="intro__grid">
            <Reveal className="intro__headline-wrap">
              <h2 className="display display--display intro__headline">
                <span className="text-reveal">
                  <span>We create</span>
                </span>
                <span className="text-reveal">
                  <span>
                    Films that <em className="serif serif--italic">feel.</em>
                  </span>
                </span>
              </h2>
            </Reveal>

            <Reveal className="intro__body" delay={220} variant="up-lg">
              <span className="index-number">01</span>
              <p className="body-lg">{studioStatement[0]}</p>
              <p className="intro__services meta">
                Film <span aria-hidden="true">·</span> Weddings{' '}
                <span aria-hidden="true">·</span> Corporate{' '}
                <span aria-hidden="true">·</span> Social{' '}
                <span aria-hidden="true">·</span> Photography
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — Selected work ---------------------------------------------- */}
      <section className="section" id="work">
        <div className="container">
          <SectionTitle
            index="02"
            eyebrow="Archive"
            serif="Selected"
            sans="Work"
            size="xl"
            action={
              <Link className="link-line" to="/work">
                All projects
              </Link>
            }
          />

          <div className="home__grid">
            <ProjectGrid projects={selected} variant="editorial" />
          </div>
        </div>
      </section>

      {/* 04 — Featured project ------------------------------------------- */}
      <section className="featured section--flush-top">
        <Link className="featured__link" to={`/work/${featured.slug}`}>
          <div className="featured__media">
            {featured.video ? (
              <VideoPlayer
                src={featured.video.src}
                poster={featured.video.poster}
                alt={featured.cover.alt}
                mode="ambient"
              />
            ) : (
              <img src={featured.cover.src} alt={featured.cover.alt} loading="lazy" />
            )}
            <span className="featured__scrim" aria-hidden="true" />
          </div>

          <div className="featured__content container">
            <Reveal className="featured__eyebrow" variant="fade">
              <span className="eyebrow eyebrow--accent">Featured project</span>
            </Reveal>

            <Reveal>
              <p className="featured__studio meta">{site.name}</p>
              <h2 className="display featured__title">
                <span className="serif serif--italic">{featured.title}</span>
              </h2>
            </Reveal>

            <Reveal className="featured__meta" delay={140} variant="fade">
              <span className="meta">{featured.kind}</span>
              <span className="featured__divider" aria-hidden="true" />
              <span className="meta">{featured.year}</span>
              <span className="featured__divider" aria-hidden="true" />
              <span className="meta">{featured.location}</span>
            </Reveal>

            <Reveal delay={220} variant="fade">
              <span className="link-line featured__cta">View project</span>
            </Reveal>
          </div>
        </Link>
      </section>

      {/* 05 — Services ---------------------------------------------------- */}
      <Services id="services" />

      {/* 06 — About ------------------------------------------------------- */}
      <section className="about-split section section--lg" id="about">
        <div className="container">
          <div className="about-split__grid">
            <Reveal className="about-split__media" variant="fade">
              <ImageReveal
                src={aboutMedia.src}
                alt={aboutMedia.alt}
                aspect={aboutMedia.aspect}
              />
            </Reveal>

            <div className="about-split__text">
              <SectionTitle
                index="03"
                sans="About"
                serif="Anula"
                order="sans-first"
                className="about-split__title"
              />

              <Reveal className="about-split__copy" delay={140}>
                {studioStatement.map((paragraph) => (
                  <p className="body-lg" key={paragraph.slice(0, 24)}>
                    {paragraph}
                  </p>
                ))}
              </Reveal>

              <Reveal delay={240} variant="fade">
                <Link className="link-line" to="/about">
                  The studio
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Image collage ----------------------------------------------- */}
      <section className="collage section">
        <div className="container container--wide">
          <div className="collage__grid">
            {collage.map((image, index) => (
              <div
                className={`collage__cell collage__cell--${image.area}`}
                key={image.src}
              >
                <ImageReveal
                  src={image.src}
                  alt={image.alt}
                  aspect={image.aspect}
                  className="collage__image"
                />
                <span className="collage__caption index-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Contact ------------------------------------------------------ */}
      <section className="contact-band" id="contact">
        <div className="contact-band__media">
          <img src={contactMedia.src} alt={contactMedia.alt} loading="lazy" />
          <span className="contact-band__scrim" aria-hidden="true" />
        </div>

        <div className="contact-band__content container">
          <Reveal variant="fade">
            <span className="eyebrow">{site.availability}</span>
          </Reveal>

          <Reveal>
            <h2 className="display contact-band__title">
              Let&rsquo;s <span className="serif serif--italic">talk.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <a className="contact-band__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </Reveal>

          <Reveal className="contact-band__links" delay={240} variant="fade">
            {socials.map((social) => (
              <a
                key={social.label}
                className="link-line"
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
