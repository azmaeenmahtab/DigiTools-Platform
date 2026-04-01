
import './App.css'
import FooterSection from './FooterSection'
import GetStartedSection from './GetStartedSection'
import Hero from './Hero'
import Navbar from './Navbar'
import PremiumToolsSection from './PremiumToolsSection'
import PricingSection from './PricingSection'
import StatsBar from './StatsBar'
import TransformWorkflowSection from './TransformWorkflowSection'

function App() {

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <StatsBar />
      
      <PremiumToolsSection />
      <GetStartedSection />
      <PricingSection />
      <TransformWorkflowSection />
      <FooterSection />
    </div>
  )
}

export default App
