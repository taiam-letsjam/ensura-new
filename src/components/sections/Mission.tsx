import Button from '../ui/Button'
import SplitSection from './SplitSection'
import { brand } from '../../data/site'
import missionImage from '../../assets/images/ensura-accessible-health-solutions.jpg'

export default function Mission() {
  return (
    <SplitSection
      id="mission"
      imagePosition="right"
      image={missionImage}
      imageAlt="Ensura team members representing accessible healthcare solutions"
      eyebrow="Our Mission"
      title="Accessible Health Solutions"
      body="We believe in making health services accessible and affordable while helping businesses streamline operations and reduce costs. With a commitment to integrity and excellence, we strive to create a healthier and more equitable future for all."
      cta={
        <Button
          href={brand.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
        >
          {brand.cta}
        </Button>
      }
    />
  )
}
