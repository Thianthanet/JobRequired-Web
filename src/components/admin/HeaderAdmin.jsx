import React from 'react'
import { DoorOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderAdmin = () => {
  return (
    <header className='bg-green-400 h-16 flex justify-between items-center text-white px-6'>
        <h1 className='font-bold text-2xl'>Header</h1>
        <Link to={'/'}>
          <DoorOpen />
        </Link>
    </header>
  )
}

export default HeaderAdmin