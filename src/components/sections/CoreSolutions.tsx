import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import FeatureCard from '../ui/FeatureCard'
import { solutions } from '../../data/site'
import styles from './CoreSolutions.module.css'

export default function CoreSolutions() {
  return (
    <section id="solutions" className="section section--subtle">
      <Container>
        <SectionHeader accent title="Ensura's Three Core Solutions" />

        <div className={styles.grid}>
          {solutions.map((s) => (
            <FeatureCard
              key={s.id}
              title={s.name}
              subtitle={s.tagline}
              body={s.description}
              cta={
                <Button href={s.href} variant="primary" size="lg">
                  Learn More
                </Button>
              }
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
