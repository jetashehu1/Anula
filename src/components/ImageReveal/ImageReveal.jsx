import { useState } from 'react'
import useReveal from '../Reveal/useReveal'
import './ImageReveal.css'

/**
 * A framed still that wipes open and settles out of an over-scale once it
 * enters the viewport.
 *
 * Two things make it safe to use everywhere:
 *   - the frame reserves its aspect ratio before the file loads, so nothing
 *     on the page shifts;
 *   - a missing file falls back to a tonal block rather than a broken icon,
 *     which keeps the layout readable while real media is still being cut.
 *
 * @param {string} aspect   portrait | landscape | square | tall | wide, or any
 *                          raw CSS aspect-ratio value such as '21 / 9'.
 * @param {boolean} priority  Skip lazy-loading — use for above-the-fold stills.
 */
const NAMED_ASPECTS = {
  portrait: '3 / 4',
  landscape: '3 / 2',
  square: '1 / 1',
  tall: '9 / 16',
  wide: '16 / 9',
  cinema: '21 / 9',
}

export default function ImageReveal({
  src,
  alt = '',
  aspect = 'landscape',
  priority = false,
  sizes,
  className = '',
  children,
}) {
  const [ref, isVisible] = useReveal({ threshold: 0.12 })
  const [failed, setFailed] = useState(false)

  const ratio = NAMED_ASPECTS[aspect] ?? aspect

  return (
    <figure
      ref={ref}
      className={`image-reveal${isVisible ? ' is-visible' : ''}${
        failed ? ' is-missing' : ''
      }${className ? ` ${className}` : ''}`}
      style={{ '--ratio': ratio }}
    >
      <div className="image-reveal__frame">
        {!failed && (
          <img
            className="image-reveal__img"
            src={src}
            alt={alt}
            sizes={sizes}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={priority ? 'high' : 'auto'}
            onError={() => setFailed(true)}
          />
        )}
        <span className="image-reveal__curtain" aria-hidden="true" />
      </div>
      {children}
    </figure>
  )
}
