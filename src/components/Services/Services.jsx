import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import { services, serviceNumber } from '../../data/services'
import './Services.css'

/**
 * The services index: six numbered rows separated by hairlines.
 *
 * On a pointer device, hovering a row floats a still of that discipline
 * alongside the cursor — the only overtly interactive moment on the site, and
 * the reason the rows themselves can stay as plain as they are. Touch and
 * keyboard users get the same information from the summary line, which is
 * always present for them.
 */
export default function Services({ id = 'services' }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const previewRef = useRef(null)
  const frameRef = useRef(0)
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (min-width: 1024px)')
    const update = () => setCanHover(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  // Follow the cursor on the next animation frame rather than on every move,
  // so the preview trails the pointer instead of snapping to it.
  const handleMove = useCallback(
    (event) => {
      if (!canHover) return
      const { clientX, clientY } = event
      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        if (previewRef.current) {
          previewRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
        }
      })
    },
    [canHover],
  )

  useEffect(() => () => cancelAnimationFrame(frameRef.current), [])

  return (
    <section className="services section" id={id} onMouseMove={handleMove}>
      <div className="container">
        <Reveal className="services__head">
          <span className="index-number">05</span>
          <h2 className="display services__title">Services</h2>
        </Reveal>

        <ul className="services__list">
          {services.map((service, index) => (
            <Reveal
              as="li"
              key={service.id}
              delay={index * 70}
              className={`services__row${activeIndex === index ? ' is-active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Link
                className="services__link"
                to={
                  service.relatedCategory === 'all'
                    ? '/work'
                    : `/work?category=${service.relatedCategory}`
                }
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
              >
                <span className="services__number index-number">
                  {serviceNumber(index)}
                </span>

                <span className="services__name">{service.title}</span>

                <span className="services__summary">{service.summary}</span>

                <span className="services__arrow" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>

      {canHover && (
        <div
          ref={previewRef}
          className={`services__preview${activeIndex !== null ? ' is-visible' : ''}`}
          aria-hidden="true"
        >
          <div className="services__preview-inner">
            {services.map((service, index) => (
              <img
                key={service.id}
                src={service.image}
                alt=""
                loading="lazy"
                decoding="async"
                className={activeIndex === index ? 'is-current' : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
