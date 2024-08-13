import React from 'react'
import ThemeToggle from '@src/components/shared/theme-toggle'

function layout({ children } : {
    children : React.ReactNode
}) {
  return (
    <>
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <ThemeToggle/>
        { children }
    </div>
    </>

  )
}

export default layout
