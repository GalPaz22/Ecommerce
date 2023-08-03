import React from 'react'
import { Logo } from './Logo'
import { Input } from './Input'
import { NavLinks } from './NavLinks'

export const Header = () => {
  return (
    <div className='w-full h-14 bg-primary flex items-center p-2 justify-between'>
        <Logo />
        <div className=' flex items-center flex-1 justify-center'>
        < Input />
        </div>
        <NavLinks />
    </div>
  )
}
