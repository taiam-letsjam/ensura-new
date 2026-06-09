import { useEffect, useState } from 'react'
import styles from './StickySectionNav.module.css'

interface NavItem {
  /** id of the target section element */
  id: string
  label: string
}

interface StickySectionNavProps {
  items: NavItem[]
}

/**
 * Sticky pill navigation that jumps between in-page sections and highlights the
 * active one based on scroll position (IntersectionObserver). Lightweight, no deps.
 */
export default function StickySectionNav({ items }: StickySectionNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return

    // Active section: whichever is near the top of the viewport
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: 0 },
    )

    // Visibility: show the nav whenever any linked section is on screen
    const onScreen = new Set<string>()
    const visObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onScreen.add(entry.target.id)
          else onScreen.delete(entry.target.id)
        })
        setVisible(onScreen.size > 0)
      },
      { threshold: 0 },
    )

    sections.forEach((s) => {
      activeObserver.observe(s)
      visObserver.observe(s)
    })
    return () => {
      activeObserver.disconnect()
      visObserver.disconnect()
    }
  }, [items])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
      <nav className={styles.pill} aria-label="Section navigation">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.btn} ${active === item.id ? styles.active : ''}`}
            aria-current={active === item.id ? 'true' : undefined}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
