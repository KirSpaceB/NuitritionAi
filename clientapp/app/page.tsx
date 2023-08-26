import BodyTypePage from './components/BodyTypePage/BodyTypePage'
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

      <div className='w-screen h-screen' style={{
        backgroundColor: '#FECE46'
      }}>
        <BodyTypePage/>
      </div>

    </main>
  )
}
