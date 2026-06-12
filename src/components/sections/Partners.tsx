import Container from '../ui/Container'
import { partners } from '../../data/site'
import styles from './Partners.module.css'

export default function Partners() {
  return (
    <section id="partners" className="section">
      <Container>
        <h2 className={styles.title}>Partners network</h2>
        <ul className={styles.row}>
          {partners.map((partner) => (
            <li key={partner.name} className={styles.logo}>
              <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
