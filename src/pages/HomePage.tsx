import Hero from '../components/sections/Hero'
import Button from '../components/ui/Button'
import CoreSolutions from '../components/sections/CoreSolutions'
import About from '../components/sections/About'
import Mission from '../components/sections/Mission'
import Testimonial from '../components/sections/Testimonial'
import ExecutiveTeam from '../components/sections/ExecutiveTeam'
import Partners from '../components/sections/Partners'
import { brand } from '../data/site'
import heroImage from '../assets/images/ensura-group-healthcare-benefits-hero.jpg'

export default function HomePage() {
  return (
    <>
      <Hero
        image={heroImage}
        imageAlt="Ensura Group healthcare benefits team"
        title={
          <>
            Innovative benefits.
            <br />
            Real results.
          </>
        }
        subtitle="Explore top-tier health insurance coverage with Ensura. We provide exceptional major medical options, valuable voluntary benefits, and effective cost reduction programs. Your health and savings matter to us — experience the difference today."
        actions={
          <>
            <Button href="#contact" size="lg" variant="secondary">
              Book a Call
            </Button>
            <Button href="#contact" size="lg" variant="primary">
              {brand.ctaSecondary}
            </Button>
          </>
        }
      />
      <CoreSolutions />
      <About />
      <Mission />
      <Testimonial />
      <ExecutiveTeam />
      <Partners />
    </>
  )
}
