import Atropos from 'atropos/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProjectCard() {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center p-8'>
      <div id="work" className='w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <Atropos>
          <div onClick={()=> window.open("https://aulonicdrive.onrender.com/", "_blank")} className='cursor-pointer min-w-full max-w-96 flex justify-center items-center bg-[url(assets/Images/Dashboard.png)] bg-cover bg-blend-overlay bg-[#286a99] h-48 rounded-xl'>
            <h1 className='font-[poppins] text-2xl md:text-3xl font-semibold text-center p-6'>Aulonic Drive</h1>
          </div>
        </Atropos>
        <Atropos>
          <div onClick={()=> window.open("https://dotdotproject.onrender.com/", "_blank")} className='cursor-pointer max-w-96 flex min-w-full justify-center items-center bg-[url(assets/Wallpapers/dot1.png)] bg-cover bg-blend-overlay bg-[#5285aa7c] h-48 rounded-xl'>
            <h1 className='font-[poppins] text-2xl md:text-3xl font-semibold text-center p-6'>Chat App</h1>
          </div>
        </Atropos>
        <Atropos>
          <div onClick={() => navigate('/pos')} className='cursor-pointer max-w-96 flex justify-center min-w-full items-center bg-[url(assets/Images/pos2.png)] bg-cover bg-blend-overlay bg-[#42424293] h-48 rounded-xl'>
            <h1 className='font-[poppins] text-2xl md:text-3xl text-slate-200 font-semibold text-center p-6'>POS System</h1>
          </div>
        </Atropos>
      </div>
    </div>    
  )
}

export default ProjectCard