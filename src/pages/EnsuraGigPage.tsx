import Hero from '../components/sections/Hero'
import CardGrid from '../components/sections/CardGrid'
import type { GridCard } from '../components/sections/CardGrid'
import SplitSection from '../components/sections/SplitSection'
import Button from '../components/ui/Button'
import { usePageMeta } from '../hooks/usePageMeta'
import { brand } from '../data/site'
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
        Nationwide access through the national BlueCard® Program
        <img className={styles.cardLogo} src={bcbsLogo} alt="Blue Cross Blue Shield logo" />
      </>
    ),
  },
  {
    icon: icon(epoPlansIcon),
    title: 'EPO Plans',
    body: 'Two GigCare EPO plans with $5,000 and $7,350 deductible options',
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
        Nationwide access through Cigna’s national provider network
        <img
          className={`${styles.cardLogo} ${styles.cardLogoCigna}`}
          src={cignaLogo}
          alt="Cigna logo"
        />
      </>
    ),
  },
  {
    icon: icon(coverageOptionsIcon),
    title: 'Coverage Options',
    body: 'An array of plan options to suit different deductible needs and budgets',
  },
  {
    icon: icon(savingsIcon),
    title: 'Savings',
    body: 'Group-based pricing designed to help lower monthly out-of-pocket costs',
  },
  {
    icon: icon(coverageQualityIcon),
    title: 'Coverage Quality',
    body: 'Comprehensive coverage through a trusted national carrier',
  },
  {
    icon: icon(availabilityIcon),
    title: 'Availability',
    body: 'Nationwide access through national provider networks',
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
    body: 'A fast, simplified application process',
  },
  {
    icon: icon(supportIcon),
    title: 'Support Available',
    body: 'Dedicated enrollment specialists',
  },
  {
    icon: icon(immediateCoverageIcon),
    title: 'Coverage Start',
    body: 'A clear, guided path from application to active coverage',
  },
]

const blueCrossIncluded = [
  'Nationwide provider access through the BlueCard® Program',
  '24/7 telemedicine for primary, urgent, and mental health care',
  'Pharmaceutical advocacy services through ScriptAide',
  'Live customer service (7:30 AM - 6:00 PM CST)',
  '24/7 Member Portal access to ID cards, forms, and plan documents',
]

const cignaIncluded = [
  'National PPO network with comprehensive provider access',
  'Group-based rates for individual plans',
  'Flexible coverage choices to fit individual needs',
  'Fast, simplified application process',
  'Dedicated enrollment support available',
]

export default function EnsuraGigPage() {
  usePageMeta(
    'Health Benefits for Gig Workers & 1099 Contractors | Ensura Gig',
    'Affordable nationwide health coverage for gig workers, 1099 contractors, freelancers, and independent teams through trusted national provider networks.',
  )

  return (
    <>
      <Hero
        image={gigHero}
        imageAlt="Gig workers and independent contractors accessing health benefits"
        title="Health Coverage for Gig Workers Independent Contractors & Small Teams"
        subtitle="National provider networks built for gig workers, independent contractors, and small teams under 100 employees."
        actions={
          <Button
            href={brand.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="secondary"
          >
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
        imageAlt="Telemedicine support for gig worker health benefits"
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
        imageAlt="National healthcare network coverage for independent workers"
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
