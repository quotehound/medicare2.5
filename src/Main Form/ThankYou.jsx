import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import $ from 'jquery'
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-react';
import sending from '../images/sending.json'



class ThankYou extends Component {



  componentDidMount() {
    setTimeout(() => {

      let lottieSection = document.getElementById('lottie');
      let content = document.getElementById('content')

      $(lottieSection).show();
      $(content).hide()



    }, 5000)

  }


  render() {

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get('formType');
    const name = urlParams.get('first_name');

    if (fType === 'medicare') {

    }



    return (
      <div className="bg-[#F3F5FF] ">
        <NavBarMedicare />

        <section className="py-8 w-1/2 mx-auto" id='lottie'>
          <div className="container px-4 mx-auto">
            <div className="py-12 bg-blue-500   overflow-hidden rounded-lg">
              <div className="flex flex-wrap">
                <div className="w-full md:w-full px-6 md:pl-12 lg:pr-0 mb-10 md:mb-0 text-center">
                  <h3 className="mb-2 lg:text-4xl sm:text-lg font-medium text-white text-center">
                    <span className="text-white" data-config-id="header-p1">{name}, </span>
                    <span data-config-id="header-p2">We are matching you with your best options!</span>
                  </h3>
                  <p className="lg:text-xl sm:text-sm font-medium text-blue-100 text-center justify-center" data-config-id="desc">Please wait while we fetch your best plans!</p>
                </div>
                <div className="relative w-full md:w-1/2 px-12">
                </div>
              </div>
            </div>

            <Lottie animationData={sending} loop={true} className="lottie" />

          </div>

        </section>

        <Fade>
          <div className=" mx-auto flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4" id="content" >
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Are you currently enrolled in both Medicare Part A & Part B?

                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="w-full space-y-6 relative flex justify-center leading-5">
                  <div className=" leading-5 buttonBlock">test</div>
                </div>

              </form>
            </div>
          </div>
        </Fade>

        <FooterMedicare />

      </div>
    );
  }
}

export default withRouter(ThankYou);
