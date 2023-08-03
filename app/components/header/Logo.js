import Image from 'next/image';
import React from 'react';


export const Logo = () => {
  return (
    <div>
        <Image
           src="/images/logo.png"
           width={35}
           height={35}
           alt="logo"
        />
    </div>

  )
}
