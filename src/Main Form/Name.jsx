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


class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      progress: 10,
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick = (value) => {

    value.preventDefault();


    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;


    if (fName.length < 2 || lName.length < 2) {
      toast.error('Please Enter A Valid Name');

      return;
    }


    toast.dismiss();
    $(':input[type="submit"]').prop("disabled", false);
    $(':input[type="submit"]').removeClass("disabled cursor-not-allowed");

    this.props.setFName(fName);
    this.props.setLName(lName);

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


    this.props.history.push(
      "/email-phone" +
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
      "&last_name=" + lName

    );
  };

  render() {


    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formTpye");

    $(document).ready(function () {
      $(':input[type="submit"]').prop("disabled", true);
      $('input[type="text"]').keyup(function () {
        if ($(this).val() != "") {
          $(':input[type="submit"]').prop("disabled", false);
          $(':input[type="submit"]').removeClass("disabled cursor-not-allowed");
        }
      });
    });

    if (fType === "medicare") {
      this.state.progress = 16;
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
                  What is your Name?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className=" space-y-6 relative w-3/4 items-center justify-center m-auto">
                  <div className=" leading-5 ">
                    <input
                      className="appearance-none p-3 mb-10  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="text"
                      name="fName"
                      placeholder="First Name"
                      id="fName"

                    />

                    <input
                      className="appearance-none p-3  text-lg font-semibold leading-none bg-white rounded text-blue-500 zipInput "
                      type="text"
                      name="lName"
                      placeholder="Last Name"
                      id="lName"

                    />

                  </div>
                  <button
                    type="submit"
                    className="px-6 py-4 ripple-bg-blue-200 text-lg bg-blue-400 hover:shadow-lg hover:shadow-blue-300/50 text-white rounded transition duration-200 zipSubmit disabled cursor-not-allowed items-center align-middle flex flex-row text-center justify-center "
                    id="submit"
                    onClick={this.handleClick}
                  >
                    Next
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

                <LinkWithQuery to="/address">Back</LinkWithQuery>
              </form>
            </div>
          </div >
        </Fade >

        <FooterMedicare />
      </div >
    );
  }
}

export default withRouter(Name);
