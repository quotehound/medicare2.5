//* Import Libraries 
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SpeakerphoneIcon, XIcon, ChevronRightIcon } from '@heroicons/react/outline'
import $ from 'jquery'



//* Import Pages
import './LandingPage.css';
import NavBarMedicare from './medicare/NavBarMedicare';
import LandingPageCheckBox from './LandingPageCheckbox';
import FooterMedicare from './medicare/FooterMedicare';

//* Import Images
import HeaderImage from './images/header.png'
import Logo from './images/usmq.png';
import Money from './images/Money.svg';
import Connect from './images/Connect.svg';
import Form from './images/Form.svg';


class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zipCode: '',
    };
  }



  validateZipCode = (values) => {

    let value = document.getElementById('zipCode').value;
    let type;

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
        <ToastContainer 
          limit={1}
        />
        <NavBarMedicare />
         <div className=" header min-h-50">
          <div className="mx-auto max-w-7xl content-center" >
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 content-center">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-blue-500 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-300 rounded-full">
                      Call Now
                    </span>
                    <span className="ml-4 text-sm">Get Your Quote Over Phone</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-white" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-5xl">
                    <span className="md:block">Get Your No Obligation</span>{' '}
                    <span className="text-blue-300 md:block">Medicare Quote</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Fill out our form or give us a call and start your no obligation medicare quote today! 
                  </p>
                 
                 
                </div>
              </div>
              <div className="mt-16 sm:mt-24 sm:px-10 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 text-center">Start You Quote Today</h3>

                     
                    </div>

                    

                    <div className="mt-6">
                      <form  className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Zip Code
                          </label>
                          <input
                            className="appearance-none w-1/2 p-3 text-lg font-semibold leading-none bg-white rounded zipInput "
                            type="text"
                            name="zipCode"
                            placeholder="Zip Code"
                            pattern="\d*"                             id="zipCode"
                            minLength={5}
                            maxLength={5}
                            onChange={this.validateZipCode}
                          />
                        </div>

                        
                          <LandingPageCheckBox />
                        

                        <div>
                          <button
                            type="submit"
                            className="px-6 py-4  m-2 text-lg bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 zipSubmit"
                          >
                            Start My Quote
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center">
        <span className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full">
                  <img src={Form} className="startIcon" />

        </span>
        <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">Fill Out Our Inquiry Form</h3>
        <p className="text-lg text-black leading-loose max-w-lg mx-auto lg:px-12" data-config-id="desc3">Our Form is simple and easy! Finish it in 2 minutes</p>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center">
      <span className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full">
                  <img src={Connect} className="startIcon"  />

        </span>
        <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">Get Connected </h3>
        <p className="text-lg text-black leading-loose max-w-lg mx-auto lg:px-12" data-config-id="desc3">Connect to get real rates across our partners.</p>


      </div>
      <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center">
      <span className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full">
                  <img src={Money} className="startIcon"/>

        </span>
        <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">May Save Money</h3>
        <p className="text-lg text-black leading-loose max-w-lg mx-auto lg:px-12" data-config-id="desc3">Explore current rates in your area</p>
      </div>
    </div>

   <div className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full p-10 "> 
   <a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-md text-white font-medium leafing-normal bg-blue-400 hover:bg-blue-600 hover:shadow-lg rounded" onClick={this.autoFocusClick} data-config-id="primary-action">Get Your No Obligation Free Quote</a>

   </div>

  </div>
</section>

{/* CTA Section End */}

<section className="relative py-20 bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="w-full lg:w-1/2 mb-12">
      <div className="lg:max-w-md">
        <h2 className="mb-4 lg:mb-6 text-4xl md:text-5xl mt-3 font-bold font-heading" data-config-id="header">Compare the best plan for you</h2>
        <p className="mb-8 text-2xl text-black leading-loose" data-config-id="desc">So you can enjoy the simple things in life.</p>
        <div className="flex items-start py-4">
          <div className="mr-5 text-gray-500">
            <svg className="w-10 h-10 check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle  cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-2 text-xl leading-loose text-gray-600" data-config-id="header1"><b>Online form </b></h3>
          </div>
        </div>
        <div className="flex items-start py-4">
          <div className="mr-5 text-gray-500">
          <svg className="w-10 h-10 check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle  cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-2 text-xl leading-loose text-gray-600" data-config-id="header2"><b>Friendly</b> agents</h3>
          </div>
        </div>
        <div className="flex items-start py-4">
          <div className="mr-5 text-gray-500">
          <svg className="w-10 h-10 check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle  cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-2 text-xl leading-loose text-gray-600" data-config-id="header3"><b>No</b> Pushy Agents Or Hidden Fees</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h-96 lg:h-auto lg:absolute top-0 right-0 bottom-0 lg:w-1/2 bg-no-repeat bg-cover lastSec" data-config-id="image" />
        </section>
        <FooterMedicare />
     </div>
    )
  }
}

export default LandingPage;
