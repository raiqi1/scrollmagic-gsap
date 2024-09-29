import FourSection from '@/app/FourSection'
import HoverBox from './Box'
import DonateButton from './Button'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FiveSection from './FiveSection'
import SixSection from './SixSection'
import SevenSection from './SevenSection'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      <div className="fixed top-8 right-8 z-50">
        <DonateButton name="Donate" route="/donate" />
      </div>
      <FirstSection />
      <SecondSection />
      <div
        style={{
          backgroundColor: '#3288ff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ThirdSection />
        {/* <HoverBox /> */}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="bg-yellow-300"
      >
        <FourSection />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="bg-white"
      >
        <FiveSection />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="bg-pink-300"
      >
        <SixSection />
      </div>
      <div className="bg-white">
        <SevenSection />
      </div>
      <Footer />
    </>
  )
}
