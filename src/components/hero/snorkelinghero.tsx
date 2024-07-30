import React from 'react'

const SnorkelingHero = () => {
  return (
    <div className='w-full mx-auto '>
      <div className='max-h-[400px] relative'>
        {/* overlay*/}
        <div className='absolute w-full h-full text-gray-200 max-h-[400px] bg-black/30 flex flex-col justify-center'>
          <h1 className=' px-4  text-4xl text-center justify-center sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Snorkeling</h1>

        </div>
        <img className='w-full max-h-[400px] object-cover' src="/images/boats/snorkeling-five.jpg" alt="Snorkeling" />
      </div>
    </div>

  )
}

export default SnorkelingHero


