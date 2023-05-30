import React from 'react'

const Main = () => {
  return (
    <div className= 'w-full h-screen' >
        <img className= 'top-0 left-0 w-full h-screen object-cover' 
        src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="holyday-1" 
        />
        <div className = 'bg-black/30 absolute top-0 left-0 w-full h-screen'></div>
        <div className = 'absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl '>Private Beaches & Getaways</h1>
                <p className='max-w-[600] drop-shadow-2xl py-2 text-xl'>
                    We are a castaway travel company specializing in holidays 
                    and experiences in remote desert islands around the planet. 
                    We offer you a unique experience unknown until now..
                </p>
                <button className='bg-white text-black'>Book now!</button>
            </div>
        </div>
    </div>
  )
}

export default Main