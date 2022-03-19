import React, { Component } from "react";
import NavBarMedicare from "../medicare/NavBarMedicare";
import MedicareBanner from "../medicare/MedicareBanner";
import FooterMedicare from "../medicare/FooterMedicare";
import "../forms.css";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";
import { LinkWithQuery } from '../BackButton'
import { fireEvent } from "@testing-library/react";


class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Male",
      progress: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const { param } = event.target.dataset;
    this.state.value = param;

    let val = this.state.value;

    this.props.setDay(val);

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
    const gender = urlParams.get("gender");
    const month = urlParams.get("month")


    this.props.history.push(
      "/year" +
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
      "&gender=" +
      gender
      + "&month=" + month
      + "&day=" + val
    );
  }

  render() {


    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);
    const month = urlParams.get("month");

    const moment = require('moment');

    let totalDates = moment('2012-' + month, 'YYYY-MM').daysInMonth().toString();

    const range = (start, end, length = end - start + 1) =>
      Array.from({ length }, (_, i) => start + i)

    let dates = range(1, totalDates);

    let buttonList = dates.map((date, index) => {
      return (
        <button
          className="dateButton border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 font-bold"
          key={date}
          data-param={date}
          id={date}
          value={date}
          onClick={this.handleClick}
        >
          {date}
        </button>
      );
    });
    return (
      <div className="bg-[#F3F5FF] ">
        <NavBarMedicare />
        <MedicareBanner setProgress={this.state.progress} />

        <Fade>
          <div className="formArea flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
            <div className="max-w-lg w-full space-y-8">
              <div>
                <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">
                  What day were you born?
                </h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="buttonBlockRow">
                  <div className="grid justify-center lg:grid-cols-6 lg:gap-2 md:grid-cols-4 gap-2 grid-cols-4">
                    {buttonList}



                  </div>
                </div>

                <LinkWithQuery to='/month'>Back</LinkWithQuery>
              </form>
            </div>
          </div>
        </Fade>

        <FooterMedicare />
      </div>
    );
  }
}

export default withRouter(Day);