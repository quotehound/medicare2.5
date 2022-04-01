import React, { Component } from 'react'

import Logo from './images/usmq.png'
import './forms.css'

export default class WelcomeBackNav extends Component {

  render() {


    return (
      <header className="bg-white" id="medicare-nav">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-2 flex items-center justify-between">
            <div className="flex items-center">
              <a href="#">
                <img
                  className="h-11 w-auto"
                  src={Logo}
                  alt=""
                />
              </a>

            </div>

            <div className="ml-10 space-x-4 align-center text-center">

              <a className="block px-1 py-1 text-lg font-extrabold bg-blue-500 text-white lg:bg-white lg:text-blue-500 md:bg-white md:text-blue-500 rounded transition duration-200 " href='tel:+18883520887' data-config-id="primary-action">
                <div className="flex">

                  <div className=' font-extrabold'>

                    <h4 className="lg:text-2xl md:text-xl numberFont">
                      <span>


                        (888) 352-0887



                      </span> </h4>
                    <p className="hidden text-sm md:block">
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