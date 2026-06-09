import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  /** Render the title in brand blue + uppercase (matches the big section titles). */
  accent?: boolean
  /** Subtitle color override (CSS value). Defaults to muted gray. */
  subtitleColor?: string
  /** Render the subtitle larger — Roboto SemiBold 32px. */
  leadSubtitle?: boolean
  /** Let the header span the full container width (removes the 720px cap). */
  fullWidth?: boolean
  className?: string
}

/** Consistent section heading block: optional eyebrow, title, and subtitle. */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  accent = false,
  subtitleColor,
  leadSubtitle = false,
  fullWidth = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <header
      className={`${styles.header} ${align === 'center' ? styles.center : ''} ${
        fullWidth ? styles.fullWidth : ''
      } ${className}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={`${styles.title} ${accent ? styles.accent : ''}`}>{title}</h2>
      {subtitle && (
        <p
          className={`${styles.subtitle} ${leadSubtitle ? styles.subtitleLead : ''}`}
          style={subtitleColor ? { color: subtitleColor } : undefined}
        >
          {subtitle}
        </p>
      )}
    </header>
  )
}
