import QuoteSection from './QuoteSection'
import { testimonials } from '../../data/site'
import salimImage from '../../assets/images/salin-t-quote.jpg'

export default function Testimonial() {
  // Static for now; nav arrows are visual placeholders for a future carousel.
  const item = testimonials[0]

  return (
    <QuoteSection
      eyebrow="What Our Clients Are Saying"
      quote={item.quote}
      author={item.author}
      authorTitle={item.role}
      image={salimImage}
      imageAlt="Salim T. client testimonial portrait"
    />
  )
}
