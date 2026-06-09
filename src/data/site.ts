/* ==========================================================================
   Site content — single source of truth.
   Update copy, links, and lists here without touching component markup.
   Copy aligned to the current Ensura homepage reference.
   ========================================================================== */

import brianArellanes from '../assets/images/Brian-Arellanes.jpg'
import sonnySanchez from '../assets/images/Sonny-Sanchez.jpg'
import mattWhitmarsh from '../assets/images/Matt-Whitmarsh.jpg'
import austinHolden from '../assets/images/Austin-Holden.jpg'
import leslieJordan from '../assets/images/Leslie-Jordan.jpg'
import jessikahContreras from '../assets/images/Jessikah-Contreras.jpg'
import lmdmaxLogo from '../assets/logos/lmdmax-logo.svg'
import lrgLogo from '../assets/logos/lrg-logo.svg'
import beansquadLogo from '../assets/logos/beansquad-logo.svg'
import sageAllianceLogo from '../assets/logos/sage-alliance-logo.svg'
import apexLogo from '../assets/logos/apex-logo.svg'

export interface NavLink {
  label: string
  href: string
}

export const nav: NavLink[] = [
  { label: 'Ensura Guard', href: '/guard' },
  { label: 'Ensura Gig', href: '/ensura-gig' },
  { label: 'Ensura Group', href: '/group' },
  { label: 'About', href: '/#about' },
]

export interface Solution {
  id: string
  name: string
  tagline: string
  description: string
  href: string
}

export const solutions: Solution[] = [
  {
    id: 'guard',
    name: 'EnsuraGuard™',
    tagline: 'Additive benefits that reduce costs',
    description:
      'A synergistic accident plan with complimentary virtual concierge medicine benefits designed to complement your current coverage. Reduce operational expenses while improving employee satisfaction.',
    href: '#solutions',
  },
  {
    id: 'group',
    name: 'Ensura Group',
    tagline: 'Comprehensive solutions to insurance',
    description:
      'Fully insured, self-funded, and level-funded options for companies with 100+ employees.',
    href: '#solutions',
  },
  {
    id: 'gig',
    name: 'Ensura Gig',
    tagline: 'Group benefits for Gig, 1099, and small groups',
    description:
      'Includes innovative “Group” solutions with trusted Cigna, BlueCross/BlueShield, and Aetna national provider networks for Independent Contractors, Unions, Associations, and Gig Workers.',
    href: '#solutions',
  },
]

export interface TeamMember {
  name: string
  title: string
  linkedin: string
  image: string
}

export const team: TeamMember[] = [
  { name: 'Brian Arellanes', title: 'Cofounder & Managing Member', linkedin: '#', image: brianArellanes },
  { name: 'Sonny Sanchez', title: 'Cofounder & Managing Member', linkedin: '#', image: sonnySanchez },
  { name: 'Matt Whitmarsh', title: 'Vice President, Partnerships', linkedin: '#', image: mattWhitmarsh },
  { name: 'Austin Holden', title: 'Director, Insurance Products', linkedin: '#', image: austinHolden },
  { name: 'Leslie Jordan', title: 'Director & Executive Liaison', linkedin: '#', image: leslieJordan },
  { name: 'Jessikah Contreras', title: 'Director, Client Success', linkedin: '#', image: jessikahContreras },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'It’s been incredibly beneficial—saving my company an average of 23% on payroll expenses, while giving our employees real value and peace of mind.',
    author: 'Salim T.',
    role: 'CEO, Delivery & Logistics Company, TX',
  },
]

export interface Partner {
  name: string
  logo: string
}

export const partners: Partner[] = [
  { name: 'LMDmax', logo: lmdmaxLogo },
  { name: 'LRG', logo: lrgLogo },
  { name: 'BeanSquad', logo: beansquadLogo },
  { name: 'Sage Alliance Group', logo: sageAllianceLogo },
  { name: 'APEX', logo: apexLogo },
]

export const productLinks: NavLink[] = [
  { label: 'EnsuraGuard™', href: '#solutions' },
  { label: 'Ensura Group', href: '#solutions' },
  { label: 'Ensura Gig', href: '#solutions' },
]

export const brand = {
  name: 'Ensura',
  cta: 'Book a call',
  ctaSecondary: 'Get your savings analysis',
  license: 'License No: 6016880',
  year: 2025,
}
