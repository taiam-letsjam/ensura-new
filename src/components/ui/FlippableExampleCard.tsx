import type { KeyboardEvent } from 'react'
import styles from './FlippableExampleCard.module.css'

export interface PriceLine {
  label: string
  price: string
}

interface FlippableExampleCardProps {
  /** Front image source */
  image: string
  imageAlt?: string
  /** Front pill button label (e.g. "Sue's Example") */
  label: string
  /** Back line items (procedure + price) */
  items: PriceLine[]
  /** Back total (e.g. "$4,950") */
  total?: string
  /** Back button label */
  closeLabel?: string
  /** Controlled open/flipped state (managed by the parent) */
  open: boolean
  /** Toggle handler — parent enforces single-open behavior */
  onToggle: () => void
  /** Sizing class for the card (width / height) from the parent grid */
  className?: string
}

/**
 * Controlled image card that flips to a details card. The whole card is the
 * toggle control (click anywhere; Enter/Space). Front = image + pill label;
 * back = two-column price table with a Total. Pure CSS 3D flip, reduced-motion aware.
 */
export default function FlippableExampleCard({
  image,
  imageAlt = '',
  label,
  items,
  total,
  closeLabel = 'Close',
  open,
  onToggle,
  className = '',
}: FlippableExampleCardProps) {
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className={`${styles.scene} ${className}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`${label}${open ? ' — hide covered costs' : ' — show covered costs'}`}
      onClick={onToggle}
      onKeyDown={onKeyDown}
    >
      <div className={`${styles.card} ${open ? styles.flipped : ''}`}>
        {/* Front */}
        <div className={`${styles.face} ${styles.front}`} aria-hidden={open}>
          <img
            className={styles.image}
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.pill}>{label}</span>
        </div>

        {/* Back */}
        <div className={`${styles.face} ${styles.back}`} aria-hidden={!open}>
          <div className={styles.lines}>
            {items.map((row) => (
              <div key={row.label} className={styles.row}>
                <span className={styles.itemName}>{row.label}</span>
                <span className={styles.itemPrice}>{row.price}</span>
              </div>
            ))}
          </div>

          {total && (
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>{total}</span>
            </div>
          )}

          <p className={styles.disclaimer}>
            Fictional example.
            <br />
            Individual results may vary.
          </p>

          <span className={styles.close}>{closeLabel}</span>
        </div>
      </div>
    </div>
  )
}
