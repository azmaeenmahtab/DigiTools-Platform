
import { useState } from 'react'
import './App.css'
import FooterSection from './FooterSection'
import GetStartedSection from './GetStartedSection'
import Hero from './Hero'
import Navbar from './Navbar'
import PremiumToolsSection from './PremiumToolsSection'
import PricingSection from './PricingSection'
import StatsBar from './StatsBar'
import TransformWorkflowSection from './TransformWorkflowSection'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className='bg-white'>
      <Navbar cartCount={cartCount} />
      <Hero />
      <StatsBar />
      
      <PremiumToolsSection onCartCountChange={setCartCount} />
      <GetStartedSection />
      <PricingSection />
      <TransformWorkflowSection />
      <FooterSection />
      <ToastContainer position="top-right" autoClose={1800} hideProgressBar={false} newestOnTop />
    </div>
  )
}

export default App
