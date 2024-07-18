import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        {/* <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='w-12 h-12' src={logo} alt='logo' />
                        <span className="text-xl tracking-tight">Crypto Crawler</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Detail</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <nav className="sticky top-0 z-50 py-3 border-b border-neutral-600/80">
            <div className="container px-4 mx-auto text-sm">
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='w-12 h-12' src={logo} alt='logo' />
                        <span className="text-xl tracking-tight text-white">crypto crawler</span>
                    </div>
                    <ul className='flex ml-14 space-x-12 text-white'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/overview'>Overview</Link></li>
                        <li><Link to='/detail'>Detail</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar