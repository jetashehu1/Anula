import { useEffect, useRef } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import logo from '../../assets/brand/anula-logo-white.svg'
import './Hero.css'

/**
 * Full-viewport opening frame.
 *
 * The footage runs muted and looping behind the wordmark; if it has not been
 * cut yet the poster carries the section on its own. Content drifts up and
 * fades as the page scrolls — transform and opacity only, driven from a single
 * rAF-throttled listener, so the first scroll stays smooth.
 */
export default function Hero({
  video = '/media/home/hero.mp4',
  poster = '/media/home/hero-poster.svg',
  tagline = 'Stories in motion.',
  alt = 'A pickup truck alone on an empty stretch of coastline',
}) {
  const contentRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const onScroll = () => {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const node = contentRef.current
        if (!node) return
        const progress = Math.min(window.scrollY / window.innerHeight, 1)
        node.style.transform = `translate3d(0, ${progress * -60}px, 0)`
        node.style.opacity = String(1 - progress * 1.35)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__media">
        <VideoPlayer src={video} poster={poster} alt={alt} mode="ambient" />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__content" ref={contentRef}>
        <h1 className="hero__wordmark">
          <img src={logo} alt="ANULA" width="951" height="192" />
        </h1>
        <p className="hero__tagline serif serif--italic">{tagline}</p>
      </div>

      <a className="hero__scroll" href="#intro" aria-label="Scroll to introduction">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
