import BodyTypePage from './components/BodyTypePage/BodyTypePage'
import HeightPage from './components/EnterHeightPage/HeightPage'
import WeightPage from './components/EnterWeightPage/WeightPage'
import GeneratePlan from './components/GeneratedPlanPage/GeneratePlan'
import LandingPage from './components/LandingPage/LandingPage'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <div className='w-screen h-screen' style={{
        backgroundImage:`url('/ForkLandingPage.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}>
        <LandingPage/>
      </div>

      <div className='w-screen h-screen bg-primaryColorOne'>
        <BodyTypePage/>
      </div>

      <div className='w-screen h-screen' style={{
        backgroundImage:`url('/ForkLandingPage.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
      }}>
        <HeightPage/>
      </div>

      <div className='w-screen h-screen' style={{
        backgroundImage:`url('/ForkLandingPage.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
      }}>
        <WeightPage/>
      </div>

      <div className='w-screen h-screen' style={{
        backgroundImage:`url('/ForkLandingPage.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
      }}>
        <GeneratePlan/>
      </div>

    </main>
  )
}
