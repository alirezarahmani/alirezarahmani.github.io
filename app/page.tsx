
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Articles from '@/components/Articles'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import BookACall from '@/components/BookACall'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <Services />
      <CaseStudies />
      <Articles />
      <Testimonials />
      <About />
      <Certifications />
      <Contact />
      <BookACall />
    </main>
  )
}


