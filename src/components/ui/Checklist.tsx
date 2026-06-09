import checkIcon from '../../assets/icons/check-icon.svg'
import styles from './Checklist.module.css'

/** A checklist row: a plain string, or a title with an optional description. */
export type ChecklistItem = string | { title: string; description?: string }

interface ChecklistProps {
  items: ChecklistItem[]
  className?: string
}

/**
 * Reusable checklist with blue circular check icons. Two-line items show a
 * SemiBold black title with a Regular muted description.
 */
export default function Checklist({ items, className = '' }: ChecklistProps) {
  return (
    <ul className={`${styles.list} ${className}`}>
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
  )
}
