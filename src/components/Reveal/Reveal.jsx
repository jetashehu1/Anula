import useReveal from './useReveal'

/**
 * Wraps children so they fade and rise into place once scrolled to.
 *
 * @param {string} as        Element to render — section, li, figure, etc.
 * @param {number} delay     Stagger in milliseconds.
 * @param {string} variant   'up' (default) | 'fade' | 'up-lg'
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'up',
  threshold,
  rootMargin,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, isVisible] = useReveal({ threshold, rootMargin })

  const variantClass = variant === 'up' ? '' : ` reveal--${variant}`
  const classes = `reveal${variantClass}${isVisible ? ' is-visible' : ''}${
    className ? ` ${className}` : ''
  }`

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
