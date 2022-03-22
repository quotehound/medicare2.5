import React, { Component } from "react";
import NavBarHealth from "./NavBarHealthCare";
import HealthBanner from "./HealthBanner";
import HealthFooter from './FooterHealthCare'
import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { LinkWithQuery } from "../BackButton";


class PreExist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      progress: 66,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;
    this.state.value = param;

    let val = this.state.value;

    this.props.setPreexist(val);

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const gclid = urlParams.get("gclid");
    const lp = urlParams.get("lp_request_id");
    const zipCode = localStorage.getItem("zipCode");
    const city = localStorage.getItem("city");
    const state = localStorage.getItem("state");
    const formType = urlParams.get("formType");
    const age = urlParams.get('age');
    const coverage = urlParams.get('coverage');
    const income = urlParams.get('income');
    let feet = urlParams.get('feet');
    let inches = urlParams.get('inches');
    let weight = urlParams.get('weight');
    let household = urlParams.get('household')

    this.props.history.push("/gender"
      + "?gclid=" + gclid
      + "&lp=" + lp
      + "&zipcode=" + zipCode
      + "&city=" + city
      + "&state=" + state
      + "&formType=" + formType
      + "&age=" + age
      + "&coverage=" + coverage
      + "&income=" + income
      + "&feet=" + feet
      + "&inches=" + inches
      + "&weight=" + weight
      + "&household=" + household
      + "&preexist=" + val
    )
  }

  render() {
    let buttonsTitles = [
      { title: "Yes", id: "Yes", value: "Yes" },
      { title: "No", id: "No", value: "No" },

    ];

    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const fType = urlParams.get("formType");

    if (fType === "medicare") {
      this.state.progress = 33;
    }

    let buttonList = buttonsTitles.map((buttonTitle, index) => {
      return (
        <button
          className="chooseButton border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 font-bold"
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
        <NavBarHealth />
        <HealthBanner setProgress={this.state.progress} />

        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  Do You Have Any Pre-Existing Conditions?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="w-full space-y-6 relative flex justify-center leading-5">
                  <div className=" leading-5 buttonBlock">{buttonList}</div>
                </div>

                <LinkWithQuery to='/household'>Back</LinkWithQuery>
              </form>
            </div>
          </div>
        </Fade>

        <HealthFooter />
      </div>
    );
  }
}

export default withRouter(PreExist);
