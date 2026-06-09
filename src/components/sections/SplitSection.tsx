import type { ReactNode } from 'react'
import Container from '../ui/Container'
import checkIcon from '../../assets/icons/check-icon.svg'
import styles from './SplitSection.module.css'

/** A checklist row: a plain string, or a title with an optional description. */
export type ChecklistItem = string | { title: string; description?: string }

interface SplitSectionProps {
  /** Anchor id for the <section> */
  id?: string
  /** Which side the image sits on (default 'left') */
  imagePosition?: 'left' | 'right'
  /** Optional small eyebrow label above the title */
  eyebrow?: ReactNode
  /** Section headline */
  title: ReactNode
  /** Render the title in brand blue + uppercase (Roboto Condensed ExtraBold) */
  accentTitle?: boolean
  /** Body copy */
  body?: ReactNode
  /** Optional checklist — each item gets a blue circular check icon */
  items?: ChecklistItem[]
  /** Call-to-action node, typically a <Button> (24px below the body copy) */
  cta?: ReactNode
  /** Image source (imported asset URL) */
  image: string
  /** Accessible alt text for the image */
  imageAlt: string
  /** Section background: white / off-white (#F7F8F9) / light gray (#F3F3F3) */
  background?: 'default' | 'subtle' | 'muted'
  /** Vertical alignment of the two columns (default 'center') */
  align?: 'center' | 'top'
  /** Render the image with no frame/background/shadow (sits on the page) */
  bareImage?: boolean
  className?: string
}

/**
 * Reusable two-column "Split Content Section": a square image block on one side
 * and an eyebrow / headline / body / checklist / CTA content block on the other.
 */
export default function SplitSection({
  id,
  imagePosition = 'left',
  eyebrow,
  title,
  accentTitle = false,
  body,
  items,
  cta,
  image,
  imageAlt,
  background = 'default',
  align = 'center',
  bareImage = false,
  className = '',
}: SplitSectionProps) {
  const bgClass =
    background === 'subtle'
      ? 'section--subtle'
      : background === 'muted'
        ? 'section--muted'
        : ''
  const sectionClasses = ['section', bgClass, className].filter(Boolean).join(' ')

  const splitClasses = [
    styles.split,
    imagePosition === 'right' ? styles.reverse : '',
    align === 'top' ? styles.alignTop : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClasses}>
      <Container className={splitClasses}>
        <div className={`${styles.media} ${bareImage ? styles.mediaBare : ''}`}>
          <img
            className={styles.image}
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.body}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={`${styles.title} ${accentTitle ? styles.titleAccent : ''}`}>
            {title}
          </h2>
          {body && <p className={styles.text}>{body}</p>}
          {items && items.length > 0 && (
            <ul className={styles.list}>
              {items.map((item) => {
                const isObj = typeof item === 'object'
                return (
                  <li key={isObj ? item.title : item} className={styles.item}>
                    <span className={styles.check} aria-hidden="true">
                      <img src={checkIcon} alt="" />
                    </span>
                    {isObj ? (
                      <span className={styles.itemText}>
                        <span className={styles.itemTitle}>{item.title}</span>
                        {item.description && (
                          <span className={styles.itemDesc}>{item.description}</span>
                        )}
                      </span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
          {cta}
        </div>
      </Container>
    </section>
  )
}
