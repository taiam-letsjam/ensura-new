import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  className?: string
  /** Adds a subtle hover lift — useful for interactive/linked cards. */
  interactive?: boolean
}

/** Generic surface container with consistent radius, padding and shadow. */
export default function Card({
  children,
  className = '',
  interactive = false,
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${interactive ? styles.interactive : ''} ${className}`}
    >
      {children}
    </div>
  )
}
