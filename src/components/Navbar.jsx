import React, {useState} from 'react'
import {RiMenu3Fill} from 'react-icons/ri' 

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const toggleNav = () =>{
        setNav(!nav)
        if(!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    } 
    
  return (
    <div className='absolute justify-between w-full flex p-6 items-center'>
        <h1 onClick={toggleNav} className='text-white font-bold md:text-2xl text-xl z-30 drop-shadow-lg m-4 cursor-pointer'>HOLYDAYS</h1>
        <RiMenu3Fill onClick={toggleNav} className='text-white cursor-pointer z-30 ' size={30} />
        <div className={
            nav ? 'font-serif top-0 left-0 fixed text-gray-300 w-full h-screen px-4 py-7 flex-col z-10 bg-black/90 ease-in duration-300' 
                : 'absolute top-0 left-[-100%] h-screen w-full ease-in duration-500 z-10' 
                }>
            <ul className=' flex flex-col items-center justify-center'>
                <li onClick={toggleNav} className='text-3xl font-bold py-8 cursor-pointer'>Home</li>
                <li className='text-3xl font-bold py-8 cursor-pointer'>Destinations</li>
                <li className='text-3xl font-bold py-8 cursor-pointer'>Reservations</li>
                <li className='text-3xl font-bold py-8 cursor-pointer'>Amenities</li>
                <li className='text-3xl font-bold py-8 cursor-pointer'>Rooms</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
