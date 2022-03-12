//* Import Libraries 
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Transition } from '@headlessui/react'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import $ from 'jquery'



//* Import Pages
import './LandingPage.css';
import NavBarMedicare from './medicare/NavBarMedicare';

//* Import Images
import HeaderImage from './images/header.png'


class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zipCode: '',
      bannerShow: true
    };
    this.hideBanner = this.hideBanner.bind(this);
  }

  hideBanner() {
    
    let banner = document.getElementById('banner');

    $(banner).toggle();
  }

  validateZipCode = (values) => {

    let value = document.getElementById('zipCode').value;

    if (isNaN(value)) {
      toast.error('😬 Please enter only numbers!')
      return
    }
    if (value.length < 5) {
      toast.error('😬 Please enter a zip code!')
      return
    }

  }


  render() {

    return (
      <div>

<div className="relative bg-blue-400 banner" id='banner'>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
            <span className="flex p-2 rounded-lg bg-indigo-800">
                  <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
          <p className="font-medium text-white">
            <span className="md:hidden">Want to speak to an agent now?</span>
            <span className="hidden md:inline">Call now to get your no obligation medicare quote</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="text-white font-bold underline">
                {' '}
                (123) 456-7890)<span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
                className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={this.hideBanner}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
        <NavBarMedicare />
        <main className="lg:relative">
          <ToastContainer
          
            position='top-center'
            limit={1}
          />
          <div className="mx-auto max-w-3/4 w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-4 align-middle text-left">
              <Transition
              
                show={true}
                enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
              >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                <span className="block xl:inline">Compare Multiple </span>{' '}
                <span className="block text-blue-500">Medicare Insurance Quotes</span>
              </h1>
              <p className="mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Getting a medicare quote is easy. Just fill out our no-obligation form, and get matched with top rated partners in our network.
              </p>
              <div className="flex justify items-center xl:max-w-2/4 lg:max-w-2/4 md:max-w-3/4  py-10">
                <input
                  className="appearance-none w-1/2 p-3 text-lg font-semibold leading-none bg-white rounded zipInput "
                  type="text"
                  name="addressField"
                  placeholder="Zip Code"
                  pattern="\d*"
                  id="zipCode"
                  minLength={5}
                  maxLength={5}
                  
                />

                <button
                  className="px-6 py-4  m-2 text-lg bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 zipSubmit"
                  type="submit"
                  onClick={this.validateZipCode}
                >
                  Start My Quote
                  </button>
                  

                </div>
                </Transition>

            </div>
          </div>
          <div className="header relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={HeaderImage}

            />
          </div>
        </main>

        
      </div>
    )
  }
}

export default LandingPage;
