import Hero from '../components/sections/Hero'
import CardGrid from '../components/sections/CardGrid'
import type { GridCard } from '../components/sections/CardGrid'
import SplitSection from '../components/sections/SplitSection'
import Button from '../components/ui/Button'
import styles from './EnsuraGigPage.module.css'

// Images
import gigHero from '../assets/images/ensura-gig-health-benefits-hero.jpg'
import bcIncludedImg from '../assets/images/ensura-gig-health-24-7-telemedicine.jpg'
import cignaIncludedImg from '../assets/images/ensura-gig-health-cigna-blue-cross-blue-shield.jpg'

// Provider logos
import bcbsLogo from '../assets/logos/blue-cross-blue-shield-vector-logo 1.svg'
import cignaLogo from '../assets/logos/cigna-logo.svg'

// Card icons
import blueCrossIcon from '../assets/icons/blue-cross-icon.svg'
import epoPlansIcon from '../assets/icons/epo-plans-icon.svg'
import ageBandsIcon from '../assets/icons/age-bands-icon.svg'
import networkIcon from '../assets/icons/network-icon.svg'
import coverageOptionsIcon from '../assets/icons/coverage-options-icon.svg'
import savingsIcon from '../assets/icons/savings-icon.svg'
import coverageQualityIcon from '../assets/icons/coverage-quality-icon.svg'
import availabilityIcon from '../assets/icons/availability-icon.svg'
import selfServiceIcon from '../assets/icons/self-service-icon.svg'
import expertSupportIcon from '../assets/icons/expert-support-icon.svg'
import groupSetupIcon from '../assets/icons/group-setup-icon.svg'
import directApplicationIcon from '../assets/icons/direct-application-icon.svg'
import supportIcon from '../assets/icons/support-icon.svg'
import immediateCoverageIcon from '../assets/icons/immediate-coverage-icon.svg'

const icon = (src: string) => <img src={src} alt="" />

const blueCrossCards: GridCard[] = [
  {
    icon: icon(blueCrossIcon),
    title: 'Blue Cross/Blue Shield',
    body: (
      <>
        National network with 2M+ healthcare providers nationwide
        <img className={styles.cardLogo} src={bcbsLogo} alt="Blue Cross Blue Shield" />
      </>
    ),
  },
  {
    icon: icon(epoPlansIcon),
    title: 'EPO Plans',
    body: 'GigCare Value ($5,000 deductible), High ($7,350)',
  },
  {
    icon: icon(ageBandsIcon),
    title: 'Age Bands',
    body: '18-29, 30-44, 45-54, and 55-64',
  },
]

const cignaCards: GridCard[] = [
  {
    icon: icon(networkIcon),
    title: 'Cigna Network',
    body: (
      <>
        1.3M+ healthcare providers nationwide
        <img
          className={`${styles.cardLogo} ${styles.cardLogoCigna}`}
          src={cignaLogo}
          alt="Cigna"
        />
      </>
    ),
  },
  {
    icon: icon(coverageOptionsIcon),
    title: 'Coverage Options',
    body: '8 deductible levels to fit different budgets',
  },
  {
    icon: icon(savingsIcon),
    title: 'Savings',
    body: 'Typically 20–40% less than ACA marketplace options',
  },
  {
    icon: icon(coverageQualityIcon),
    title: 'Coverage Quality',
    body: 'Fortune 500-level benefits for individuals',
  },
  {
    icon: icon(availabilityIcon),
    title: 'Availability',
    body: 'All 50 states',
  },
]

const blueCrossEnrollment: GridCard[] = [
  {
    icon: icon(selfServiceIcon),
    title: 'Self-Service',
    body: 'Get your quote and enroll directly',
  },
  {
    icon: icon(expertSupportIcon),
    title: 'Expert Support',
    body: 'Speak with an enrollment specialist',
  },
  {
    icon: icon(groupSetupIcon),
    title: 'Group Setup',
    body: 'Schedule a group meeting for customization',
  },
]

const cignaEnrollment: GridCard[] = [
  {
    icon: icon(directApplicationIcon),
    title: 'Direct Application',
    body: 'Complete enrollment in minutes',
  },
  {
    icon: icon(supportIcon),
    title: 'Support Available',
    body: 'Dedicated enrollment specialists',
  },
  {
    icon: icon(immediateCoverageIcon),
    title: 'Immediate Coverage',
    body: 'Fast approval and coverage start',
  },
]

const blueCrossIncluded = [
  '2+ million physicians nationwide within BlueCard Program',
  '24/7 telemedicine for primary, urgent, and mental health care',
  'Pharmaceutical advocacy through ScriptSourcing services',
  'Live customer service (7:30 AM - 6:00 PM CST)',
]

const cignaIncluded = [
  'National PPO network with comprehensive provider access',
  'Group-based rates for individual plans',
  'Short- and long-term income protection',
  'Proactive dedicated claims support for large claims',
  'Quick 3–5 minute application process',
  'Dedicated enrollment support available',
]

export default function EnsuraGigPage() {
  return (
    <>
      <Hero
        image={gigHero}
        imageAlt="Ensura Gig health benefits for gig workers and small teams"
        title="Health Coverage for Gig Workers Independent Contractors & Small Teams"
        subtitle="Nationwide Cigna Network built for gig workers, independent contractors, and small teams under 100 employees."
        actions={
          <Button href="#contact" size="lg" variant="secondary">
            Book a call
          </Button>
        }
      />

      {/* ---------- Blue Cross / Blue Shield ---------- */}
      <CardGrid
        id="blue-cross"
        title="Nationwide Blue Cross & Blue Shield Coverage"
        subtitle="Built for unions, associations, 1099 contractors, and gig economy teams."
        cards={blueCrossCards}
        background="muted"
        cardTitleSize="h5"
      />

      <SplitSection
        imagePosition="right"
        accentTitle
        background="muted"
        title="What's Included"
        items={blueCrossIncluded}
        image={bcIncludedImg}
        imageAlt="24/7 telemedicine consultation on a phone"
      />

      <CardGrid
        title="Enrollment Options"
        cards={blueCrossEnrollment}
        background="muted"
        cardTitleSize="h5"
        cta={
          <Button href="#contact" size="lg">
            Enroll Now
          </Button>
        }
      />

      {/* ---------- Cigna ---------- */}
      <CardGrid
        id="cigna"
        title="Nationwide Cigna Coverage"
        subtitle="Built for gig workers, independent contractors, and small teams with under 100 employees."
        cards={cignaCards}
        background="default"
        cardTitleSize="h5"
        cardBackground="var(--color-off-white)"
      />

      <SplitSection
        imagePosition="right"
        accentTitle
        title="What's Included"
        items={cignaIncluded}
        image={cignaIncludedImg}
        imageAlt="Cigna, Blue Cross and Blue Shield healthcare coverage"
      />

      <CardGrid
        title="Enrollment Options"
        cards={cignaEnrollment}
        background="default"
        cardTitleSize="h5"
        cardBackground="var(--color-off-white)"
        cta={
          <Button href="#contact" size="lg">
            Enroll Now
          </Button>
        }
      />
    </>
  )
}
