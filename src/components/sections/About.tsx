import Button from '../ui/Button'
import SplitSection from './SplitSection'
import { brand } from '../../data/site'
import aboutImage from '../../assets/images/ensura-about-healthcare-solutions.jpg'

export default function About() {
  return (
    <SplitSection
      id="about"
      background="default"
      imagePosition="left"
      image={aboutImage}
      imageAlt="Ensura team delivering healthcare benefit solutions"
      eyebrow="About Ensura Insurance Solutions"
      title="Dedicated to redefining healthcare with a commitment to affordability, accessibility, and excellence."
      body="At Ensura, we are a team of experienced professionals passionate about enhancing health and financial stability through effective benefits administration, operational efficiency, and compliance. Our expertise allows us to deliver tailored solutions that empower individuals and organizations alike."
      cta={
        <Button href="#contact" size="lg">
          {brand.cta}
        </Button>
      }
    />
  )
}
