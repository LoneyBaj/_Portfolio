import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  
  const navigate = useNavigate()
  const handleClick = () => {
    var item = document.getElementById('work')
    item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
  }
  const icon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 transition-all duration-150 cursor-pointer hover:-translate-y-1`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
  const icon2 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 transition-all duration-150 cursor-pointer -translate-y-[2fpx] hover:-translate-y-[5px] hover:translate-x-[5px]"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
  return (
    <div  className='flex justify-center w-full bg-[#050c0f] z-20'>
      <div className='w-full flex justify-between p-8 px-16 max-w-[1400px]'>
        <h2 onClick={() => navigate('/')} className='text-md hidden sm:block cursor-pointer'>A.B.</h2>
        {window.location.pathname === '/' && <a onClick={handleClick} className='text-md flex gap-2 cursor-pointer'>Work{icon()}</a>}
        <a target="_blank" href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' className='text-md flex gap-2'>LinkedIn{icon2()}</a>
      </div>
    </div>
  )
}

export default Navbar