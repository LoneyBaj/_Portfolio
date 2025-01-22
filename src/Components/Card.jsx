import Atropos from 'atropos/react'
import React from 'react'

function Card(props) {
  
  return (
    <Atropos className=''>
      <div className='flex  justify-center h-full'>
          <div className="card bg-[url(assets/Wallpapers/wp4.jpg)] bg-cover bg-no-repeat bg-blend-overlay bg-[#667c8f] w-64  shadow-xl flex flex-col items-center justify-center">
            <figure>
              <img
              className='w-32 p-8 sm:p-4'
                src={props.image}
                alt="skill" />
            </figure>
            <h2 className="font-semibold text-2xl m-2">{props.title}</h2>
          </div>  
      </div>
    </Atropos>
  )
}

export default Card