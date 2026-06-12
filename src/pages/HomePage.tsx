import Hero from '../components/sections/Hero'
import Button from '../components/ui/Button'
import CoreSolutions from '../components/sections/CoreSolutions'
import About from '../components/sections/About'
import Mission from '../components/sections/Mission'
import Testimonial from '../components/sections/Testimonial'
import ExecutiveTeam from '../components/sections/ExecutiveTeam'
import Partners from '../components/sections/Partners'
import { brand } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import heroImage from '../assets/images/ensura-group-healthcare-benefits-hero.jpg'

export default function HomePage() {
  usePageMeta(
    'Ensura | Modern Employee Benefits & Healthcare Solutions',
    'Modern employee healthcare, supplemental insurance, and workforce protection solutions designed for today’s employers and independent workers.',
  )

  return (
    <>
      <Hero
        image={heroImage}
        imageAlt="Ensura team discussing modern healthcare benefit solutions"
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
            <Button
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="secondary"
            >
              Book a Call
            </Button>
            <Button
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
            >
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
