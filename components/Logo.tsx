import React from 'react'
import Link from 'next/link'
import { Landmark } from 'lucide-react'

function Logo() {
  return (
    <Link href="/" className='flex items-center gap-2'>
      <Landmark className='stroke h-11 w-11 stroke-lime-500 stroke-[1.5]'/>
      <p className="bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent  drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900">
        Trackify
      </p>
    </Link>
  )
}

export default Logo
