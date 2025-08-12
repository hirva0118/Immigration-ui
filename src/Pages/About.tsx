import HeroSection from '../Sections/About/HeroSection'
import DreamDestination from '../Sections/About/DreamDestination'
import Unforgetable from '../Sections/About/Unforgetable'
import SectionFour from '../Sections/About/SectionFour'
import Wanderlust from '../Sections/About/Wanderlust'
import Experience from '../Sections/About/Experience'

const About = () => {
  return (
    <div className='bg-white'>
      <div>
        <HeroSection/>
      </div>
      <div>
        <DreamDestination/>
      </div>
      <div>
        <Unforgetable/>
      </div>
      <div>
        <SectionFour/>
      </div>
      <div>
        <Wanderlust/>
      </div>
      <div>
        <Experience/>
      </div>
    </div>
  )
}

export default About
