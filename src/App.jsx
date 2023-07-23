
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './pages/shared/navbar/Navbar'
import Footer from './pages/shared/footer/Footer'

function App() {

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
