import React from 'react'
import Logo from '@components/Logo'
import Header from '@src/components/layout/header'
import Footer from '@src/components/layout/footer'

function layout({ children } : {
    children : React.ReactNode
}) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify center">
  
        <div className="w-full">
        <Header/>
            { children }
        <Footer/>
        </div>
  
    </div>
  )
}

export default layout
