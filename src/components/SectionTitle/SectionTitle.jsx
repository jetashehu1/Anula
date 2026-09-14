import Reveal from '../Reveal/Reveal'
import './SectionTitle.css'

/**
 * The house headline: one half upright sans, one half italic serif.
 *
 *   <SectionTitle serif="Selected" sans="Work" />        Selected WORK
 *   <SectionTitle sans="Let's" serif="Talk" order="sans-first" />   LET'S Talk
 *
 * `index` prints the section number in the margin, `action` takes a link that
 * sits on the headline's baseline at the right edge on wide screens.
 */
export default function SectionTitle({
  serif,
  sans,
  order = 'serif-first',
  index,
  eyebrow,
  action,
  as: Tag = 'h2',
  size = 'default',
  align = 'left',
  id,
  className = '',
}) {
  const serifPart = serif && (
    <span key="serif" className="serif serif--italic section-title__serif">
      {serif}
    </span>
  )
  const sansPart = sans && (
    <span key="sans" className="section-title__sans">
      {sans}
    </span>
  )

  const parts = order === 'sans-first' ? [sansPart, serifPart] : [serifPart, sansPart]

  return (
    <div
      className={`section-title section-title--${size} section-title--${align}${
        className ? ` ${className}` : ''
      }`}
    >
      {(index || eyebrow) && (
        <Reveal className="section-title__meta" variant="fade">
          {index && <span className="index-number">{index}</span>}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </Reveal>
      )}

      <div className="section-title__row">
        <Reveal className="section-title__headline-wrap">
          <Tag id={id} className="display section-title__headline">
            {parts}
          </Tag>
        </Reveal>

        {action && (
          <Reveal className="section-title__action" variant="fade" delay={120}>
            {action}
          </Reveal>
        )}
      </div>
    </div>
  )
}
