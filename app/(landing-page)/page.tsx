import FirstSection from './firstsection/page'
import Logo from './Navbar/_components/logo'
import { Navbar } from './Navbar/Navbar'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
    </div>
  )
}

export default LandingPage
