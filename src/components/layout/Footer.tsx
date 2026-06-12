import type { FormEvent } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { productLinks, brand } from '../../data/site'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import mailIcon from '../../assets/icons/mail-icon.svg'
import styles from './Footer.module.css'

export default function Footer() {
  // Placeholder handler — wire up to a real endpoint / CRM later.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <footer id="contact" className={styles.footer}>
      <Container className={styles.inner}>
        {/* Left: brand, institutional copy, product links, social */}
        <div className={styles.brandCol}>
          <Logo variant="black" className={styles.brand} />
          <p className={styles.blurb}>
            Helping companies find the best insurance for their employees with better
            coverage at lower costs is at the core of Ensura’s value.
          </p>

          <ul className={styles.linkList}>
            {productLinks.map((link) => (
              <li key={link.label}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.social}>
            <a
              className={styles.socialLink}
              href="https://linkedin.com/company/ensura-group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ensura Group on LinkedIn"
            >
              <img src={linkedinIcon} alt="" />
            </a>
            <a
              className={styles.socialLink}
              href="mailto:info@ensuragroup.com"
              aria-label="Email Ensura Group"
            >
              <img src={mailIcon} alt="" />
            </a>
          </div>
        </div>

        {/* Right: lead form */}
        <div className={styles.formCol}>
          <h3 className={styles.colTitle}>
            Learn more about how Ensura can support your company.
          </h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className="sr-only" htmlFor="full-name">
                Full name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                placeholder="Full name"
                autoComplete="name"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className="sr-only" htmlFor="inquiry">
                Your inquiry
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                placeholder="Write your inquiry here..."
                rows={3}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className="sr-only" htmlFor="email">
                Professional email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Professional email"
                autoComplete="email"
                required
                className={styles.input}
              />
            </div>

            <Button type="submit" size="lg" className={styles.submit}>
              Inquire
            </Button>
          </form>
        </div>
      </Container>

      <Container className={styles.bottom}>
        <p className={styles.copy}>
          © {brand.year} {brand.name}, LLC. {brand.license} All rights reserved.
        </p>
        <a className={styles.terms} href="#terms">
          Ensura Terms &amp; Conditions
        </a>
      </Container>
    </footer>
  )
}
