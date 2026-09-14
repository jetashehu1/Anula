import { useEffect, useRef, useState } from 'react'

/**
 * Observes a node and flips to `true` the first time it enters the viewport.
 *
 * Everything that animates in on this site runs through here, so the timing
 * feel is tuned in one place. Elements reveal once and stay revealed — content
 * re-animating on the way back up reads as a gimmick rather than a film.
 *
 * @param {object}  options
 * @param {number}  options.threshold  Fraction visible before firing.
 * @param {string}  options.rootMargin Shrinks the viewport so items settle
 *                                     slightly before they reach the fold.
 * @returns {[React.RefObject, boolean]} ref to attach, and visibility.
 */
export default function useReveal({ threshold = 0.16, rootMargin = '0px 0px -12% 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    // No observer (or the visitor prefers less motion) — show it immediately.
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (typeof IntersectionObserver === 'undefined' || prefersReduced) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
