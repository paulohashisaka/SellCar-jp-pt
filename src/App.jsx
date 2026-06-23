import { Benefits, FinalCTA, HowItWorks, Objections, Offer, ProblemSolution, Testimonials } from './components/ContentSections'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <Offer />
        <Testimonials />
        <Objections />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
