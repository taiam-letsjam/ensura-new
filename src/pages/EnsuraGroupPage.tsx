import Hero from '../components/sections/Hero'
import CardGrid from '../components/sections/CardGrid'
import type { GridCard } from '../components/sections/CardGrid'
import SplitSection from '../components/sections/SplitSection'
import type { ChecklistItem } from '../components/sections/SplitSection'
import SectionHeader from '../components/ui/SectionHeader'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import styles from './EnsuraGroupPage.module.css'

// Images
import groupHero from '../assets/images/ensura-group-health-benefits-hero.jpg'
import doctorImage from '../assets/images/ensura-group-health-24-7-telemedicine.jpg'

// Card icons
import fullyInsuredIcon from '../assets/icons/fully-insured-shield-icon.svg'
import selfInsuredIcon from '../assets/icons/self-insured-icon.svg'
import levelFundedIcon from '../assets/icons/level-funded-icon.png'
import completeSolutionsIcon from '../assets/icons/complete-solutions-icon.svg'
import flexibleFundingIcon from '../assets/icons/flexible-funding-icon.svg'
import costManagementIcon from '../assets/icons/cost-management-icon.svg'
import expertIcon from '../assets/icons/expert-icon.svg'

const icon = (src: string) => <img src={src} alt="" />

const planOptions: GridCard[] = [
  {
    icon: icon(fullyInsuredIcon),
    title: 'Fully insured plans',
    body: 'Traditional insurance with predictable, comprehensive coverage that includes fixed monthly premiums with carrier risk assumption. Complete regulatory compliance management while providing access to comprehensive medical, dental, and vision networks.',
  },
  {
    icon: icon(selfInsuredIcon),
    title: 'Self-insured plans',
    body: 'Gain maximum control and potential savings through direct claims cost management with stop-loss protection. These plans offer customizable plan design and benefit structures, as well as detailed claims reporting and cost transparency to help you make informed decisions.',
  },
  {
    icon: icon(levelFundedIcon),
    title: 'Level funded plans',
    body: 'The best of both worlds approach combines self-funded benefits with fully-insured predictability. You get monthly budget certainty with year-end surplus potential, making this an ideal transition option from fully-insured to self-funded models.',
  },
]

const whyChoose: GridCard[] = [
  {
    icon: icon(completeSolutionsIcon),
    title: 'Complete Solutions',
    body: 'Full spectrum from major medical to voluntary benefits',
  },
  {
    icon: icon(flexibleFundingIcon),
    title: 'Flexible Funding',
    body: 'Multiple funding options to fit your needs',
  },
  {
    icon: icon(costManagementIcon),
    title: 'Cost Management',
    body: 'Proven strategies to control healthcare expenses',
  },
  {
    icon: icon(expertIcon),
    title: 'Expert Support',
    body: 'Dedicated account management and ongoing support',
  },
]

const voluntaryBenefits: ChecklistItem[] = [
  { title: 'Dental Insurance', description: 'Extensive dental coverage' },
  { title: 'Vision Coverage', description: 'Comprehensive eye care plans' },
  { title: 'Disability Insurance', description: 'Short- and long-term income protection' },
  { title: 'Life Insurance', description: 'Term and whole life options' },
  { title: 'Critical Illness', description: 'Supplemental coverage for major diagnoses' },
  { title: 'Accident Insurance', description: 'Additional financial protection' },
]

export default function EnsuraGroupPage() {
  return (
    <>
      <Hero
        image={groupHero}
        imageAlt="Ensura Group benefits team from trusted carriers and national networks"
        title="Comprehensive Benefits From Trusted Carriers and National Networks"
        subtitle="Fully insured, self-funded, and level-funded options for companies with 100+ employees, from traditional group medical plans to innovative voluntary benefits."
        actions={
          <Button href="#contact" size="lg" variant="secondary">
            Get a Group Quote
          </Button>
        }
      />

      {/* ---------- Group Health Plan Options ---------- */}
      <CardGrid
        id="plan-options"
        title="Group Health Plan Options"
        subtitle="Flexible funding solutions for every business"
        cards={planOptions}
        background="muted"
        cardTitleSize="h5"
        cta={
          <Button href="#contact" size="lg">
            Get a Group Quote
          </Button>
        }
      />

      {/* ---------- Why Choose Ensura Group ---------- */}
      <CardGrid
        title="Why Choose Ensura Group"
        cards={whyChoose}
        columns={4}
        background="default"
        cardTitleSize="h5"
        cardBackground="var(--color-off-white)"
      />

      {/* ---------- Voluntary & Ancillary Benefits ---------- */}
      <SplitSection
        imagePosition="right"
        accentTitle
        title="Voluntary & Ancillary Benefits"
        body={<strong>Complete Employee Benefit Package</strong>}
        items={voluntaryBenefits}
        image={doctorImage}
        imageAlt="Ensura doctor providing voluntary and ancillary health benefits"
      />

      {/* ---------- Upgrade Your Benefits CTA ---------- */}
      <section className="section">
        <Container>
          <SectionHeader
            accent
            title="Upgrade Your Benefits"
            subtitle="Whether you’re looking to control costs, enhance benefits, or address unique workforce needs, Ensura Group delivers results."
          />
          <div className={styles.ctaButton}>
            <Button href="#contact" size="lg">
              Schedule Meeting
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
