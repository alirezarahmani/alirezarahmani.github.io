
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Articles from '@/components/Articles'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import BookACall from '@/components/BookACall'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Services />
      <CaseStudies />
      <Articles />
      <About />
      <Testimonials />
      <Contact />
      <BookACall />
    </main>
  )
}
