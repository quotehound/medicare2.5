import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import MedicareBanner from "../medicare/MedicareBanner";
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { LinkWithQuery } from '../BackButton'

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      month: 'January',
      progress: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;

    this.state.value = param;

    let val = this.state.value;

    this.props.setMonth(val);

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
    const gender = urlParams.get('gender');
    const month = val;

    this.props.history.push(
      "/day" +
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
      "&gender=" + gender
      + "&month=" + val
    );
  }

  skipStep() {

    let val = '1'

    this.props.setMonth(val);

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
    const gender = urlParams.get('gender');
    const month = val;

    this.props.history.push(
      "/day" +
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
      "&gender=" + gender
      + "&month=" + val
    );

  }

  render() {
    let buttonsTitles = [
      { title: "January", id: '01', value: '01' },
      { title: "February", id: '02', value: '02' },
      { title: "March", id: '03', value: '03' },
      { title: "April", id: '04', value: '04' },
      { title: "May", id: '05', value: '05' },
      { title: "June", id: '06', value: '06' },
      { title: "July", id: '07', value: '07' },
      { title: "August", id: '08', value: '08' },
      { title: "September", id: '09', value: '09' },
      { title: "October", id: '10', value: '10' },
      { title: "November", id: '11', value: '11' },
      { title: "December", id: '12', value: '12' },




    ];

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formTpye");

    if (fType === "medicare") {
      this.state.progress = 16;
    }

    let buttonList = buttonsTitles.map((buttonTitle, index) => {
      return (
        <button
          className="monthButton border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 font-bold"
          key={buttonTitle.id}
          data-param={buttonTitle.id}
          id={buttonTitle.id}
          value={buttonTitle.value}
          onClick={this.handleClick}
        >
          {buttonTitle.title}
        </button>
      );
    });
    return (
      <div className="bg-[#F3F5FF] ">
        <NavBarMedicare />
        <MedicareBanner setProgress={this.state.progress} />

        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className=" w-full max-w-4xl space-y-8 items-center">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  What Month Were You Born In?
                </h2>
              </div>
              <form className="mt-8 space-y-6 justify-center">

                <div className="buttonBlockRow">
                  <div className="grid justify-center lg:grid-cols-4 lg:gap-2 md:grid-cols-3 sm:grid-cols-2">
                    {buttonList}



                  </div>
                </div>

                <a className="flex justify-center text-gray-500 underline" onClick={this.skipStep}>Skip</a>

                <LinkWithQuery to='/gender'>Back</LinkWithQuery>
              </form>

            </div>
          </div>

        </Fade>

        <FooterMedicare />
      </div>
    );
  }
}

export default withRouter(Month);
