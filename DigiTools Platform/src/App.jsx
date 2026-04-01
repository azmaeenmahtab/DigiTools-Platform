
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import PremiumToolsSection from './PremiumToolsSection'
import StatsBar from './StatsBar'

function App() {

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <StatsBar />
      <PremiumToolsSection />
    </div>
  )
}

export default App
