import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header
      className='py-8'
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='w-40 h-auto' src={logo} alt=''></img>
          </a>
          
          <button className='btn btn-sm'> Work with me</button>

        </div>
      </div>
    </header>
  )
}

export default Header