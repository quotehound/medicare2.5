import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import MedicareBanner from "../medicare/MedicareBanner";
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { LinkWithQuery } from "../BackButton";
import $ from "jquery";
import { toast, ToastContainer } from "react-toastify";
import Axios from 'axios';
import PhoneInput from "react-phone-number-input/input";


class EmailPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      phone: " ",
      progress: 10,
      error: "",
      loading: false,
      response: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  postEmail = (values) => {
    let email = document.getElementById('email').value;

    this.state.email = email;

    this.props.setEmail(email)
  }

  postPhone = (values) => {

    let phone = document.getElementById('phone_home').value;

    var realPhone = phone.replace(/\D/g, "");

    this.props.setPhone(realPhone);

  }


  handleClick = (value) => {

    value.preventDefault();


    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_home').value;

    if (phone.length < 14) {
      toast.error('Please Enter A Valid Phone Number')

      return;
    }

    let realPhone = phone.replace(/[0-9]/g, '');

    toast.dismiss();
    $(':input[type="submit"]').prop("disabled", false);
    $(':input[type="submit"]').removeClass("disabled cursor-not-allowed");



    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = localStorage.getItem("formType");
    const age = urlParams.get("age");
    const enrolled = urlParams.get("enrolled");
    const month = urlParams.get("month")
    const day = urlParams.get("day")
    const year = urlParams.get("year");
    const address = urlParams.get('address')
    const fName = urlParams.get('first_name');
    const lName = urlParams.get('lName');

    this.setState({
      loading: true
    }, this.postMedicare(this.props.postData))




    this.props.history.push(
      "/thank-you" +
      "?gclid=" +
      gclid +
      "&lp=" +
      lp +
      "&zipcode=" +
      zipCode +
      "&city=" +
      city +
      "&state=" +
      state +
      "&formType=" +
      formType +
      "&age=" +
      age +
      "&enrolled=" +
      enrolled +
      "&month=" +
      month +
      "&day=" +
      day +
      "&year=" +
      year +
      "&address=" +
      address +
      "&first_name=" + fName +
      "&last_name=" + lName +
      "&email=" + email +
      "&home_phone=" + realPhone

    );
  };

  postMedicare = (postData) => {
    console.log(postData);

    Axios.post('https://quotehound.leadspediatrack.com/post.do', null, {
      params: postData,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            loading: false,
          });
        }
      })
      .catch((err) => {
        if (err) {
          toast.error('there was an error submiting your form!')
        }
      })
  }



  render() {


    const { response, loading } = this.state;

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fName = urlParams.get('first_name');

    $(document).ready(function () {
      $(':input[type="submit"]').prop("disabled", true);
      $('input[type="email"]').keyup(function () {
        if ($(this).val() != "") {
          $(':input[type="submit"]').prop("disabled", false);
          $(':input[type="submit"]').removeClass("disabled cursor-not-allowed");
        }
      });
    });

    const fType = urlParams.get("formType");

    if (fType === "medicare") {
      this.state.progress = 100;
    }

    return (
      <div className="bg-[#F3F5FF] ">

        <NavBarMedicare />
        <MedicareBanner setProgress={this.state.progress} />
        <ToastContainer limit={1} position="top-center" theme="colored" />
        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Almost there {fName}, what is your email & Phone Number?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className=" space-y-6 relative w-full items-center justify-center m-auto">
                  <div className=" leading-5 ">
                    <input
                      className="appearance-none p-3 mb-10  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="email"
                      value={this.state.email}
                      name="email"
                      placeholder="Email"
                      id="email"
                      onChange={this.postEmail}

                    />

                    <PhoneInput

                      country="US"
                      className="appearance-none p-3 mb-10  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      id="phone_home"
                      placeholder="Phone Number"
                      name="phone_home"
                      onChange={this.postPhone}
                      minLength={10}
                      maxLength={14}
                      required
                    />


                  </div>

                  <p className="tcpa w-full text-xs text-gray-400">
                    <label htmlFor="leadid_tcpa_disclosure">
                      <input type="hidden" id="leadid_tcpa_disclosure" /> By pressing Get My Free Quote, I am providing my express written consent and e-signature which may be revoked at any time. I consent to receive emails, telephone calls, text messages, artificial or prerecorded messages from Us Medicare Quotes its affiliates, and/or any of our <a className='underline decoration-wavy decoration-blue-300' href="https://www.quotehound.com/partners"> marketing partners </a>  (or their service provider partners on their behalf) regarding their products and services (including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans) at the email address and telephone number provided, including my wireless phone number (if provided) utilizing an automated telephone dialing system. Telephone companies may impose additional charges on subscribers for messages.  I understand that I am not required to grant this consent as a condition of purchasing any property, goods, or services from the foregoing companies or prerecorded or artificial voices. (1) I consent to electronic video monitoring and recordation of my activities on this Site. I may call <a className='underline decoration-wavy decoration-blue-300' href='tel:18884261036'> (888) 426-1036 </a> to speak with someone about obtaining an insurance quote.   I acknowledge that I may revoke my consent by emailing “STOP” to <a className='underline decoration-wavy decoration-blue-300' href="mailto:optout@quotehound.com" >optout@quotehound.com.</a>  (2) I agree to this website's <a className='underline decoration-wavy decoration-blue-300' href="https://www.quotehound.com/privacy-policy"> Privacy Policy </a> and  <a className='underline decoration-wavy decoration-blue-300' href="https://www.quotehound.com/terms-conditions">Terms of Use</a>

                    </label>
                  </p>

                  <button
                    type="submit"
                    className="px-6 py-4 ripple-bg-blue-200 text-lg bg-blue-400 hover:shadow-lg hover:shadow-blue-300/50 text-white rounded transition duration-200 zipSubmit disabled cursor-not-allowed items-center align-middle flex flex-row text-center justify-center "
                    id="submit"
                    onClick={this.handleClick}
                  >
                    Get Your No Obligation Quote!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-auto pl-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>

                <LinkWithQuery to="/name">Back</LinkWithQuery>
              </form>
            </div>
          </div >
        </Fade >

        <FooterMedicare />
      </div >
    );
  }
}

export default withRouter(EmailPhone);
