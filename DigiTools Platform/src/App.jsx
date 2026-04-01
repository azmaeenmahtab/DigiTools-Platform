
import './App.css'
import GetStartedSection from './GetStartedSection'
import Hero from './Hero'
import Navbar from './Navbar'
import PremiumToolsSection from './PremiumToolsSection'
import PricingSection from './PricingSection'
import StatsBar from './StatsBar'

function App() {

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <StatsBar />
      
      <PremiumToolsSection />
      <GetStartedSection />
      <PricingSection />
    </div>
  )
}

export default App
