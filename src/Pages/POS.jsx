import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Pos from "../assets/Images/pos.png"
import Pos2 from "../assets/Images/pos2.png"
import Footer from '../Components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
function POS() {
  const navigate = useNavigate()
  return (
    <div className='text-[#ece6d5]'>
      <Navbar />
      <h1 className='text-2xl md:text-3xl font-semibold text-center p-4'>POS (Point Of Sale) System</h1>
      <h1 className='text-md md:text-xl font-semibold text-center'>A POS system made for a private company to keep track of sales.</h1>
      <div className='flex flex-col items-center p-8'>
        <div className='grid grid-cols-1 p-8 gap-16'>
          <img src={Pos} className='rounded-2xl' alt="pos" />
          <img src={Pos2} className='rounded-2xl' alt="pos" />
        </div>
      <button  onClick={() => navigate('/')}  className='btn btn-primary'>Back To Main Page</button>
      </div>
      <div className="divider divider-neutral px-8 mt-4"></div> 
      <Footer />
    </div>
  )
}

export default POS