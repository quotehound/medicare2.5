//* Import Libraries 
import React, { Component } from 'react';

import './LandingPage.css'


// * Import Pages

//* import Icons 
import { ChevronRightIcon } from '@heroicons/react/solid'

//* Import images
import HeaderImage from './images/header.png'


class LandingPage extends Component {

  render() {

    return (
     
      <div className="relative bg-white overflow-hidden h-1/2">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

        

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-bold">
                <span className="block xl:inline">Get Your No Obligation</span>{' '}
                <span className="block text-blue-500 xl:inline">Medicare Quote</span>
              </h1>
              
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-bold text-gray-900">Enter Your Zip Code To Get Started</p>
                <form className="mt-3 sm:flex">
                  <label htmlFor="zipCode" className="sr-only">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    className=" zipInput block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-blue-300 shadow-slate-500"
                        placeholder="Enter Your Zip Code"
                        minLength={5}
                        maxLength={5}
                        pattern='\d*'
                  />
                  <button
                    type="submit"
                    className=" submitButton mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                   Get My Quote
                  </button>
                </form>
               
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={HeaderImage}
          alt=""
        />
      </div>
    </div>
    
    )
  }
}

export default LandingPage;
