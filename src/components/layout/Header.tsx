import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { nav, brand } from '../../data/site'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add a subtle elevation/background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  // Hash links (e.g. "/#about") use a plain anchor for native scrolling;
  // pure route paths (e.g. "/ensura-gig") use NavLink for SPA + active state.
  const renderNavLink = (
    link: (typeof nav)[number],
    linkClass: string,
    activeClass: string,
    onClick?: () => void,
  ) =>
    link.href.includes('#') ? (
      <a className={linkClass} href={link.href} onClick={onClick}>
        {link.label}
      </a>
    ) : (
      <NavLink
        to={link.href}
        onClick={onClick}
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ''}`
        }
      >
        {link.label}
      </NavLink>
    )

  return (
    <header
      id="top"
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <Container className={styles.inner}>
        <Logo variant="white" className={styles.brand} />

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {nav.map((link) => (
              <li key={link.label}>
                {renderNavLink(link, styles.navLink, styles.active)}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="#contact" size="md" variant="secondary">
            {brand.cta}
          </Button>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.burgerBar} ${menuOpen ? styles.open : ''}`} />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}
        hidden={!menuOpen}
      >
        <ul className={styles.mobileList}>
          {nav.map((link) => (
            <li key={link.label}>
              {renderNavLink(link, styles.mobileLink, styles.active, closeMenu)}
            </li>
          ))}
        </ul>
        <Button href="#contact" size="lg" className={styles.mobileCta} onClick={closeMenu}>
          {brand.cta}
        </Button>
      </div>
    </header>
  )
}
