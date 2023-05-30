import React from 'react'

const Room = () => {
  return (
    <div className='max-w-[1160px] h-[500px] mx-auto my-28 pt-20 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-3 bg-blue-200 '>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h1 className='text-2xl font-bold'>Fine Interior Rooms</h1>
            <p className='pt-4'>We care your comfort! We provide the most comfortable and fancy rooms! 
               You can choose the one you like the best among many options.</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          alt='/'
        />
        <img
        className='object-cover w-full h-full row-span-2'
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
      </div>
    </div>
  )
}

export default Room