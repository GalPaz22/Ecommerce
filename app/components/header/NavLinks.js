import React from 'react';
import Link from 'next/link';

export const NavLinks = () => {
  return (
    <div className='flex gap-x-4 p-4'>
      <Link href='/'>
        <div className='text-gray-800 hover:text-blue-600 transition cursor-pointer'>
          <span className='border-b-2 border-transparent hover:border-blue-600'>Home</span>
        </div>
      </Link>
      <Link href='/cart'>
        <div className='text-gray-800 hover:text-blue-600 transition cursor-pointer'>
          <span className='border-b-2 border-transparent hover:border-blue-600'>Cart</span>
        </div>
      </Link>
      <Link href='/account'>
        <div className='text-gray-800 hover:text-blue-600 transition cursor-pointer'>
          <span className='border-b-2 border-transparent hover:border-blue-600'>Account</span>
        </div>
      </Link>
    </div>
  );
};
