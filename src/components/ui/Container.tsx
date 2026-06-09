import type { ElementType, ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  as?: ElementType
  className?: string
}

/** Centers content and applies a consistent max-width + horizontal padding. */
export default function Container({
  children,
  as: Tag = 'div',
  className = '',
}: ContainerProps) {
  return <Tag className={`${styles.container} ${className}`}>{children}</Tag>
}
