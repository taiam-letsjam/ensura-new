import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/logos/ensura-onecolor-white.svg'
import blackLogo from '../../assets/logos/ensura-color-black.svg'
import styles from './Logo.module.css'

interface LogoProps {
  /** white = one-color white (header/hero) · black = full color black (footer) */
  variant?: 'white' | 'black'
  className?: string
}

/** Ensura wordmark. Rendered as an <img> so the SVG stays vector + retina-crisp. */
export default function Logo({ variant = 'black', className = '' }: LogoProps) {
  const src = variant === 'white' ? whiteLogo : blackLogo
  return (
    <Link to="/" className={`${styles.logo} ${className}`} aria-label="Ensura — home">
      <img src={src} alt="" className={styles.img} />
    </Link>
  )
}
