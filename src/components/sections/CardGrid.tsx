import type { ReactNode } from 'react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import FeatureCard from '../ui/FeatureCard'
import styles from './CardGrid.module.css'

export interface GridCard {
  icon?: ReactNode
  image?: string
  imageAlt?: string
  title: ReactNode
  body?: ReactNode
  /** Per-card CTA (overrides the grid-level cardCta for this card) */
  cta?: ReactNode
}

interface CardGridProps {
  id?: string
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  /** Render the section title in brand blue + uppercase (default true) */
  accentTitle?: boolean
  /** Subtitle color override passed to the SectionHeader */
  subtitleColor?: string
  /** Render the subtitle larger (Roboto SemiBold 32px) */
  leadSubtitle?: boolean
  /** Let the header span the full container width */
  headerFullWidth?: boolean
  cards: GridCard[]
  /** Optional CTA centered below the grid (e.g. a <Button>) */
  cta?: ReactNode
  /** Section background: white / off-white (#F7F8F9) / light gray (#F3F3F3) */
  background?: 'default' | 'subtle' | 'muted'
  /** Card title styling passed through to each FeatureCard */
  cardTitleSize?: 'default' | 'h5'
  /** Card body size passed through to each FeatureCard */
  cardBodySize?: 'sm' | 'lg'
  /** Card surface color (CSS value) passed through to each FeatureCard */
  cardBackground?: string
  /** Card title color override passed through to each FeatureCard */
  cardTitleColor?: string
  /** Full-bleed top image on each card */
  imageBleed?: boolean
  /** Override card image aspect ratio (CSS value, e.g. '1 / 1') */
  cardImageRatio?: string
  /** Shared CTA rendered at the bottom of every card (e.g. an "Explore" button) */
  cardCta?: ReactNode
  /** Remove the body's extra bottom margin on each card (no-CTA cards) */
  cardTightBottom?: boolean
  /** Cards per row on desktop (default 3) */
  columns?: 3 | 4
}

/**
 * Reusable card-grid section: a section header above a responsive grid of
 * FeatureCards (3-up on desktop, last row centered) with an optional centered
 * CTA below. Uses the approved global card + typography.
 */
export default function CardGrid({
  id,
  eyebrow,
  title,
  subtitle,
  accentTitle = true,
  subtitleColor,
  leadSubtitle,
  headerFullWidth,
  cards,
  cta,
  background = 'subtle',
  cardTitleSize = 'default',
  cardBodySize,
  cardBackground,
  cardTitleColor,
  imageBleed = false,
  cardImageRatio,
  cardCta,
  cardTightBottom = false,
  columns = 3,
}: CardGridProps) {
  const bgClass =
    background === 'subtle'
      ? 'section--subtle'
      : background === 'muted'
        ? 'section--muted'
        : ''
  const sectionClasses = ['section', bgClass].filter(Boolean).join(' ')
  const gridClasses = `${styles.grid} ${columns === 4 ? styles.cols4 : ''}`

  return (
    <section id={id} className={sectionClasses}>
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          accent={accentTitle}
          subtitleColor={subtitleColor}
          leadSubtitle={leadSubtitle}
          fullWidth={headerFullWidth}
        />

        <div className={gridClasses}>
          {cards.map((card, i) => (
            <FeatureCard
              key={i}
              className={styles.card}
              icon={card.icon}
              image={card.image}
              imageAlt={card.imageAlt}
              imageBleed={imageBleed}
              imageRatio={cardImageRatio}
              title={card.title}
              titleSize={cardTitleSize}
              bodySize={cardBodySize}
              titleColor={cardTitleColor}
              background={cardBackground}
              body={card.body}
              tightBottom={cardTightBottom}
              cta={card.cta ?? cardCta}
            />
          ))}
        </div>

        {cta && <div className={styles.cta}>{cta}</div>}
      </Container>
    </section>
  )
}
