import { useState } from 'react'
import Hero from '../components/sections/Hero'
import CardGrid from '../components/sections/CardGrid'
import type { GridCard } from '../components/sections/CardGrid'
import FeatureCard from '../components/ui/FeatureCard'
import FlippableExampleCard from '../components/ui/FlippableExampleCard'
import Checklist from '../components/ui/Checklist'
import type { ChecklistItem } from '../components/ui/Checklist'
import StickySectionNav from '../components/ui/StickySectionNav'
import QuoteSection from '../components/sections/QuoteSection'
import SectionHeader from '../components/ui/SectionHeader'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { testimonials } from '../data/site'
import styles from './EnsuraGuardPage.module.css'

import salimImage from '../assets/images/salin-t-quote.jpg'

// Hero + card images
import heroImage from '../assets/images/ensuraguard-workplace-protection-hero.jpg'
import imgPreventionWorker from '../assets/images/ensuraguard-prevention-support-worker.jpg'
import imgCoveredIncident from '../assets/images/ensuraguard-covered-incident-support.jpg'
import imgVirtualCare from '../assets/images/ensuraguard-virtual-care-support.jpg'
import imgSafetyTraining from '../assets/images/ensuraguard-workplace-safety-training.jpg'
import imgWellnessSupport from '../assets/images/ensuraguard-wellness-support-benefits.jpg'
import imgEverydayProtection from '../assets/images/ensuraguard-everyday-injury-protection.jpg'
import imgEverydayProtectionPlain from '../assets/images/ensuraguard-everyday-protection.jpg'
import imgRecoveryCare from '../assets/images/ensuraguard-recovery-care-support.jpg'
import imgConcierge from '../assets/images/ensuraguard-24-7-concierge-medicine.jpg'
import imgPrescription from '../assets/images/ensuraguard-prescription-support.jpg'
import imgMentalHealth from '../assets/images/ensuraguard-mental-health-support.jpg'

import builtDifferentlyImage from '../assets/images/ensuraguard-prevention-protection-support-team.png'

const howItWorks: GridCard[] = [
  {
    title: 'Prevent',
    body: 'Helping reduce risk before accidents happen.',
    image: imgPreventionWorker,
    imageAlt: 'Worker using EnsuraGuard prevention support',
    cta: (
      <Button href="#prevent" size="lg">
        Explore
      </Button>
    ),
  },
  {
    title: 'Protect',
    body: 'Financial support when covered incidents occur.',
    image: imgCoveredIncident,
    imageAlt: 'Covered incident financial support',
    cta: (
      <Button href="#protect" size="lg">
        Explore
      </Button>
    ),
  },
  {
    title: 'Support',
    body: '24/7 care access and ongoing employee assistance.',
    image: imgConcierge,
    imageAlt: '24/7 concierge medicine support',
    cta: (
      <Button href="#support" size="lg">
        Explore
      </Button>
    ),
  },
]

const preventInjuries: GridCard[] = [
  {
    title: 'Prevention Modules',
    body: 'Educational resources on workplace safety, ergonomics, and avoidable injuries.',
    image: imgPreventionWorker,
    imageAlt: 'Worker using EnsuraGuard prevention support',
  },
  {
    title: 'Eligible Wellness Support',
    body: 'Employees can access covered benefits focused on qualified prevention and care services.',
    image: imgWellnessSupport,
    imageAlt: 'Wellness support benefits',
  },
  {
    title: 'Everyday Protection',
    body: 'Support designed for both workplace and everyday life situations.',
    image: imgSafetyTraining,
    imageAlt: 'Workplace safety training',
  },
]

// Top row: image-only cards with a centered overlay pill (interaction later).
// No specific image filenames were given for these, so existing person photos
// are mapped to the example labels (4th "Example" is a stand-in).
const financialExamples = [
  { label: 'Matthew’s Example', image: imgEverydayProtectionPlain, alt: 'Everyday protection example' },
  { label: 'Sue’s Example', image: imgCoveredIncident, alt: 'Covered incident support example' },
  { label: 'Brian’s Example', image: imgEverydayProtection, alt: 'Everyday injury protection example' },
  { label: 'Amira’s Example', image: imgRecoveryCare, alt: 'Recovery care support example' },
]

// Checklist shown on the back of each flipped example card
const protectionIncidentList = [
  'Air Ambulance',
  'Urgent Care',
  'X-Ray',
  'Conscious Sedation',
  'Ligament Surgery',
  'Pain Management',
  'Prescription Drug',
]

// Bottom row: text-only cards
const financialTextCards = [
  {
    title: '120+ Covered Incidents',
    body: 'Comprehensive accident support beyond basic emergency coverage.',
  },
  {
    title: 'Fixed Benefit Payments',
    body: 'Benefits are paid based on covered events — not medical bills.',
  },
  {
    title: 'Everyday Protection',
    body: 'Protection designed for real-world lifestyles.',
  },
]

const ongoingSupport: GridCard[] = [
  {
    title: '24/7 Virtual Concierge Medicine',
    body: 'Access to care anytime through telehealth support.',
    image: imgConcierge,
    imageAlt: '24/7 virtual concierge medicine',
  },
  {
    title: 'Prescription Support',
    body: 'Help employees reduce medication costs.',
    image: imgPrescription,
    imageAlt: 'Prescription support',
  },
  {
    title: 'Care Coordination',
    body: 'Guidance for treatment, appointments, and ongoing support.',
    image: imgVirtualCare,
    imageAlt: 'Care coordination support',
  },
  {
    title: 'Mental Health Access',
    body: 'Support resources designed for everyday wellbeing.',
    image: imgMentalHealth,
    imageAlt: 'Mental health support',
  },
]

const builtDifferently: ChecklistItem[] = [
  {
    title: 'White-Glove Support',
    description: 'Fast responses and hands-on service for employers and employees.',
  },
  {
    title: 'Simplified Administration',
    description: 'Easy onboarding and streamlined implementation.',
  },
  {
    title: 'Built for High-Turnover Industries',
    description:
      'Designed for logistics, restaurants, franchise operations, and active workforces.',
  },
  {
    title: 'Compliance-Focused Structure',
    description: 'Carefully designed with experienced legal and insurance guidance.',
  },
]

export default function EnsuraGuardPage() {
  const quote = testimonials[0]
  // Only one Example card open at a time (null = all closed)
  const [openExample, setOpenExample] = useState<number | null>(null)

  return (
    <>
      <Hero
        image={heroImage}
        imageAlt="EnsuraGuard workplace protection for employees"
        titleGap="320px"
        title="Protect Your People. Strengthen Your Bottom Line."
        subtitle="EnsuraGuard™ helps reduce costs and improve employee care through prevention, protection, and ongoing support."
        actions={
          <>
            <Button href="#contact" size="lg" variant="secondary">
              Book a call
            </Button>
            <Button href="#contact" size="lg" variant="primary">
              Get your savings analysis
            </Button>
          </>
        }
      />

      {/* ---------- How EnsuraGuard Works ---------- */}
      <CardGrid
        id="how-it-works"
        title="How EnsuraGuard™ Works"
        headerFullWidth
        cards={howItWorks}
        background="muted"
        cardTitleSize="default"
        cardBodySize="lg"
        cardTitleColor="var(--color-blue)"
        imageBleed
        cardImageRatio="1 / 1"
      />

      {/* Sticky section nav + the three sections it links to */}
      <div className={styles.navScope}>
        <StickySectionNav
          items={[
            { id: 'prevent', label: 'Prevent' },
            { id: 'protect', label: 'Protect' },
            { id: 'support', label: 'Support' },
          ]}
        />

        {/* ---------- Prevent Injuries ---------- */}
        <CardGrid
          id="prevent"
          title="Prevent Injuries Before They Become Bigger Problems"
        subtitle="EnsuraGuard™ includes proactive prevention resources designed to help employees reduce everyday physical strain, improve recovery, and stay healthier both on and off the job."
        subtitleColor="var(--color-black)"
        leadSubtitle
        headerFullWidth
        cards={preventInjuries}
        columns={4}
        background="default"
        cardBackground="var(--color-off-white)"
        cardTitleSize="h5"
        cardTitleColor="var(--color-blue)"
        imageBleed
        cardImageRatio="1 / 1"
        cardTightBottom
      />

      {/* ---------- Real Financial Protection ---------- */}
      <section id="protect" className="section">
        <Container>
          <SectionHeader
            accent
            title="Real Financial Protection When Accidents Happen"
            subtitle="EnsuraGuard™ provides fixed payments for 120+ covered incidents, helping employees manage the financial impact of unexpected injuries. Coverage applies to incidents both on and off the job."
            subtitleColor="var(--color-black)"
            leadSubtitle
            fullWidth
          />

          {/* Top row: 4 image-only cards with a centered overlay pill */}
          <div className={`${styles.row} ${styles.imageRow}`}>
            {financialExamples.map((ex, i) => (
              <FlippableExampleCard
                key={ex.label}
                className={styles.imageCard}
                image={ex.image}
                imageAlt={ex.alt}
                label={ex.label}
                items={protectionIncidentList}
                open={openExample === i}
                onToggle={() => setOpenExample(openExample === i ? null : i)}
              />
            ))}
          </div>

          {/* Bottom row: 3 text-only cards */}
          <div className={`${styles.row} ${styles.textRow}`}>
            {financialTextCards.map((c) => (
              <FeatureCard
                key={c.title}
                className={styles.textCard}
                title={c.title}
                titleSize="h5"
                titleColor="var(--color-blue)"
                body={c.body}
                background="var(--color-off-white)"
                tightBottom
              />
            ))}
          </div>
        </Container>
      </section>

        {/* ---------- Ongoing Support ---------- */}
        <CardGrid
          id="support"
          title="Ongoing Support Beyond The Initial Incident"
          subtitle="EnsuraGuard™ combines accident coverage with access to virtual care, prescription support, care navigation, and mental health resources designed to help employees recover faster and navigate care more easily."
          subtitleColor="var(--color-black)"
          leadSubtitle
          headerFullWidth
          cards={ongoingSupport}
          columns={4}
          background="default"
          cardBackground="var(--color-off-white)"
          cardTitleSize="h5"
          cardTitleColor="var(--color-blue)"
          imageBleed
          cardImageRatio="1 / 1"
          cardTightBottom
        />
      </div>

      {/* ---------- Built Differently ---------- */}
      <section className="section">
        <Container>
          <SectionHeader
            accent
            fullWidth
            title="Built Differently Than Traditional Supplemental Benefits"
          />
          <div className={styles.builtRow}>
            <div className={styles.builtMedia}>
              <img
                src={builtDifferentlyImage}
                alt="EnsuraGuard workforce protection team"
                loading="lazy"
                decoding="async"
              />
            </div>
            <Checklist items={builtDifferently} />
          </div>
        </Container>
      </section>

      {/* ---------- Quote ---------- */}
      <QuoteSection
        eyebrow="What Our Clients Are Saying"
        quote={quote.quote}
        author={quote.author}
        authorTitle={quote.role}
        image={salimImage}
        imageAlt={`${quote.author} portrait`}
      />

      {/* ---------- Final CTA ---------- */}
      <section className="section">
        <Container>
          <SectionHeader accent fullWidth title="Better Protection Starts Here" />
          <p className={styles.ctaLead}>
            Help your team access practical accident protection, prevention resources,
            and ongoing care support — without adding unnecessary complexity to your
            business.
          </p>
          <p className={styles.ctaSmall}>
            Transform your employee benefits with an integrated plan your team needs.
            Streamlined solutions to fit each unique employer.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="#contact" size="lg" variant="outline">
              Get Your Savings Analysis
            </Button>
            <Button href="#contact" size="lg" variant="primary">
              Book a Call
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
