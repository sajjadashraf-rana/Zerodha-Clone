import HeroSection from './HeroSection';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
const HomePage = () => {
  return (
    <>
        <div className="container-fluid">
            <HeroSection />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </div>
    </>
  )
}

export default HomePage
