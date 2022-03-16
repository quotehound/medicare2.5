import React, { Component } from 'react'

import Logo from '../images/usmq.png'

export default class NavBarMedicare extends Component {

  render() {
    
  
    return (
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-2 flex items-center justify-between border-b border-blue-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="h-10 w-auto"
                  src={Logo}
                  alt=""
                />
              </a>
            
            </div>
            
            <div className="ml-10 space-x-4 align-center text-center">
              
            <a className="block px-1 py-1 text-sm  text-blue-500 font-extrabold  hover:border-blue-600 rounded transition duration-200 " href="#" data-config-id="primary-action"> <div className="flex">
     
                <div className=' font-extrabold'>
               
                  <h4 className="text-lg font-extrabold">
                  
                    (123) 456-7890</h4>
        <p className="hidden  md:block">
          TTY: 711 | Monday - Friday 6am - 6pm
        </p>
      </div>
    </div></a>
            </div>
          </div>
        
        </nav>
      </header>
    )
  }
}