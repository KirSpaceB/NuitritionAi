import BodyTypePage from './components/BodyTypePage/BodyTypePage'
import LandingPage from './components/LandingPage/LandingPage'

export default function Home() {
  return (
    <main>
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

    </main>
  )
}
