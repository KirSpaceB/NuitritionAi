import BodyTypePage from './components/BodyTypePage/BodyTypePage'
import EnterMeasurements from './components/EnterMeasurementsPage/EnterMeasurements'
import GeneratePlan from './components/GeneratedPlanPage/GeneratePlan'
import LandingPage from './components/LandingPage/LandingPage'
import { MeasurementsProvider } from './components/shared/context/MeasurementsData'

export default function Home() {
  return (
    <MeasurementsProvider>
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
          <EnterMeasurements/>
        </div>

        <div className='w-screen h-screen' style={{
          backgroundImage:`url('/ForkLandingPage.jpg')`,
          backgroundSize:'cover',
          backgroundPosition:'center',
        }}>
          <GeneratePlan/>
        </div>

      </main>
    </MeasurementsProvider>
  )
}
