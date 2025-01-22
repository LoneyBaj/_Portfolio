import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/Images/user.jpg'

function Hero() {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className=' w-full h-full font-[poppins] grid place-items-center grid-cols-1 p-8 max-w-[1400px] sm:grid-cols-2'>
            <div className='w-full flex flex-col items-center md:items-start gap-8 md:gap-2 p-4'>
              <div className='text-2xl font-medium'>Aulon Bajraktari</div>
              <div className='hidden md:block h-48'>
                <TypeAnimation
                  sequence={[
                    // 
                    'I\'m a Full Stack Web Developer',
                    4000, 
                    'I\'m a Software Engineer',
                    4000,
                  ]}
                  wrapper="span"
                  speed={25}
                  style={{ fontSize: '3em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
              <div className='md:hidden text-center h-64'>
                <TypeAnimation
                  sequence={[
                    // 
                    'I\'m a Full Stack Web Developer',
                    4000, 
                    'I\'m a Software Engineer',
                    4000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '3em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="max-w-96 ring rounded-full ring-primary ">
              <img src={me} alt='aulon' className='p-2'/>
            </div>
          </div>
    </div>
  )
}

export default Hero