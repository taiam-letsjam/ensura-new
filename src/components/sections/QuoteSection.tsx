import type { ReactNode } from 'react'
import Container from '../ui/Container'
import chevronLeft from '../../assets/icons/chevron-left-icon.svg'
import chevronRight from '../../assets/icons/chevron-right-icon.svg'
import styles from './QuoteSection.module.css'

interface QuoteSectionProps {
  /** Anchor id for the <section> */
  id?: string
  /** Optional eyebrow label above the quote */
  eyebrow?: string
  /** The quote text (rendered inside typographic quotation marks) */
  quote: ReactNode
  author: string
  /** Author title / company line */
  authorTitle?: string
  /** Avatar image source (imported asset URL) — circular 160×160 crop */
  image: string
  imageAlt?: string
  /** Show the prev/next navigation controls (default true) */
  showNav?: boolean
  onPrev?: () => void
  onNext?: () => void
  /** Section background tone */
  background?: 'default' | 'subtle'
  className?: string
}

/**
 * Reusable global testimonial / quote section.
 * Aligns to the global Container width; minimal light-gray card (no
 * border/shadow, soft rounded corners) with a circular 160px avatar and
 * circular nav controls positioned outside the card, bottom-right.
 */
export default function QuoteSection({
  id,
  eyebrow,
  quote,
  author,
  authorTitle,
  image,
  imageAlt = '',
  showNav = true,
  onPrev,
  onNext,
  background = 'default',
  className = '',
}: QuoteSectionProps) {
  const sectionClasses = [
    'section',
    background === 'subtle' ? 'section--subtle' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClasses} aria-label="Client testimonial">
      <Container>
        <div className={styles.wrap}>
          <figure className={styles.card}>
            <img
              className={styles.avatar}
              src={image}
              alt={imageAlt}
              width={160}
              height={160}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.content}>
              {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
              <blockquote className={styles.quote}>“{quote}”</blockquote>
              <p className={styles.attribution}>
                — {author}
                {authorTitle ? `, ${authorTitle}` : ''}
              </p>
            </figcaption>
          </figure>

          {showNav && (
            <div className={styles.nav}>
              <button
                type="button"
                className={styles.arrow}
                aria-label="Previous testimonial"
                onClick={onPrev}
              >
                <img src={chevronLeft} alt="" />
              </button>
              <button
                type="button"
                className={styles.arrow}
                aria-label="Next testimonial"
                onClick={onNext}
              >
                <img src={chevronRight} alt="" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
