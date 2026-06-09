import type { ReactNode } from 'react'
import Container from '../ui/Container'
import styles from './Hero.module.css'

interface HeroProps {
  /** Background image source (imported asset URL) */
  image: string
  /** Accessible name for the background image */
  imageAlt: string
  /** Headline (uppercased via CSS) */
  title: ReactNode
  /** Supporting copy below the headline */
  subtitle?: ReactNode
  /** CTA buttons */
  actions?: ReactNode
  /** Space between the H1 and the content block below (CSS value, default 1.4rem) */
  titleGap?: string
}

/**
 * Reusable full-viewport hero. Background photo (cover/center/no-repeat) with a
 * subtle dark overlay; centered headline, supporting copy, and CTAs.
 */
export default function Hero({
  image,
  imageAlt,
  title,
  subtitle,
  actions,
  titleGap,
}: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.inner}>
        <h1 id="hero-title" className={styles.title}>
          {title}
        </h1>
        {(subtitle || actions) && (
          <div
            className={styles.content}
            style={titleGap ? { marginTop: titleGap } : undefined}
          >
            {subtitle && <p className={styles.lead}>{subtitle}</p>}
            {actions && <div className={styles.ctas}>{actions}</div>}
          </div>
        )}
      </Container>
    </section>
  )
}
