import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'; // Import the SearchIcon from Heroicons

export const Input = () => {
  return (
    <div className='flex gap-x-3 ml-2'>
      <input className='w-full py-2 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500'
       type='text' placeholder='  Search Item...' />
      <button>
        <SearchIcon className="w-6 h-6" /> {/* Use the SearchIcon from Heroicons */}
      </button>
    </div>
  );
};
