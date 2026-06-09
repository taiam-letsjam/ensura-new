import type { CSSProperties, ElementType, ReactNode } from 'react'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  /** Primary heading of the card */
  title: ReactNode
  /** Blue subtitle under the title */
  subtitle?: ReactNode
  /** Body copy */
  body?: ReactNode
  /** Call-to-action, typically a <Button>. Pinned to the bottom of the card. */
  cta?: ReactNode
  /** Optional icon, rendered inside a 56px blue circle at the top-left.
      Disabled by default — pass an icon node to enable it. */
  icon?: ReactNode
  /** Optional image rendered at the top of the card (rounded, object-fit cover) */
  image?: string
  imageAlt?: string
  /** Full-bleed image: touches top/sides, 40px top corners, straight base,
      and the text area keeps its 32px padding. */
  imageBleed?: boolean
  /** Override the image aspect ratio (CSS value, e.g. '1 / 1'). Default 4/3. */
  imageRatio?: string
  /** Element/level for the title (default <h3>) */
  titleAs?: ElementType
  /** Title styling: 'default' (Roboto SemiBold 32px, blue) or 'h5' (24px) */
  titleSize?: 'default' | 'h5'
  /** Body copy size: 'sm' (16px, default) or 'lg' (18px) */
  bodySize?: 'sm' | 'lg'
  /** Title color override (CSS value) */
  titleColor?: string
  /** Card surface color (CSS value). Defaults to white via CSS. */
  background?: string
  /** Remove the body's extra bottom margin (use for no-CTA cards so the gap
      to the card's bottom edge is just the 32px padding). */
  tightBottom?: boolean
  /** Extra class for the card root (e.g. grid sizing) */
  className?: string
}

/**
 * Standardized global content card.
 * White, 40px radius, 32px padding, no border/shadow, flex column with the CTA
 * pinned to the bottom; stretches to its grid row for equal-height cards.
 */
export default function FeatureCard({
  title,
  subtitle,
  body,
  cta,
  icon,
  image,
  imageAlt = '',
  imageBleed = false,
  imageRatio,
  titleAs: TitleTag = 'h3',
  titleSize = 'default',
  bodySize = 'sm',
  titleColor,
  background,
  tightBottom = false,
  className = '',
}: FeatureCardProps) {
  const titleStyle: CSSProperties | undefined = titleColor
    ? { color: titleColor }
    : undefined

  return (
    <article
      className={`${styles.card} ${imageBleed ? styles.cardBleed : ''} ${className}`}
      style={background ? { background } : undefined}
    >
      {image && (
        <img
          className={`${styles.media} ${imageBleed ? styles.mediaBleed : ''}`}
          src={image}
          alt={imageAlt}
          style={imageRatio ? { aspectRatio: imageRatio } : undefined}
          loading="lazy"
          decoding="async"
        />
      )}

      <div className={styles.content}>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}

        <div className={styles.head}>
          <TitleTag
            className={`${styles.title} ${titleSize === 'h5' ? styles.titleH5 : ''}`}
            style={titleStyle}
          >
            {title}
          </TitleTag>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {body && (
          <div
            className={`${styles.body} ${bodySize === 'lg' ? styles.bodyLg : ''} ${
              tightBottom ? styles.bodyTight : ''
            }`}
          >
            {body}
          </div>
        )}

        {cta && <div className={styles.cta}>{cta}</div>}
      </div>
    </article>
  )
}
