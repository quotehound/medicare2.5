import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


//* Import Pages
import LandingPage from './LandingPage'
import Age from './Age'
import Enrolled from './medicare/Enrolled';
import Gender from './Main Form/Gender';
class App extends Component {

  //* set states for post data 

  state = {

    postData: {
      lp_campaign_id: '6216b43dd07de',
      lp_campaign_key: '2Bd63GNZDYpV4HnxvTmj',
      lp_s4: '13',
      landing_page: 'usmedicarequotes.com',
      TCPA_Consent: 'Yes',
      TCPA_Language: 'By pressing Get My Free Quote, I am providing my express written consent and e-signature which may be revoked at any time. I consent to receive emails, telephone calls, text messages, artificial or prerecorded messages from Us Medicare Quotes its affiliates, and/or any of our  marketing partners  (or their service provider partners on their behalf) regarding their products and services (including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans) at the email address and telephone number provided, including my wireless phone number (if provided) utilizing an automated telephone dialing system. Telephone companies may impose additional charges on subscribers for messages.  I understand that I am not required to grant this consent as a condition of purchasing any property, goods, or services from the foregoing companies (2) I agree to this websites  Privacy Policy and Terms of Use',
      user_agent: navigator.userAgent,
      gclid: localStorage.getItem('gclid'),
      IP_Address: localStorage.getItem('ip'),
      zip_code: '',
      city: '',
      state: '',
      form_type: '',
      over_sixty_five: '',
      coverage_time: 'Yes',
      are_you_currently_enrolled_in_both_medicare_part_a_part_b: '',
      gender: '',
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>

          <Switch>
            <Route path='/' exact>
              <LandingPage

                setZipCode={(zipCode) => {
                  this.setState({
                    postData: {
                      zip_code: zipCode,
                    },
                  });
                }}

                setCity={(city) => {
                  this.setState({
                    postData: {
                      city: city,
                    },
                  });
                }}

                setUState={(state) => {
                  this.setState({
                    postData: {
                      state: state,
                    },
                  });
                }}

                setFormType={(formType) => {
                  this.setState({
                    postData: {
                      form_type: formType,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/age'>
              <Age
                setAge={(age) => {
                  this.setState({
                    postData: {
                      over_sixty_five: age,
                    },
                  });
                }}
              />
            </Route>

            <Route path='/enrolled'>
              <Enrolled
                setEnrolled={(enrolled) => {
                  this.setState({
                    postData: {
                      are_you_currently_enrolled_in_both_medicare_part_a_part_b: enrolled
                    }
                  })
                }}
              />
            </Route>

            <Route path='/gender'>
              <Gender
                setGender={(gender) => {
                  this.setState({
                    postData: {
                      gender: gender,
                    },
                  });
                }}
              />
            </Route>
          </Switch>

        </div>
      </BrowserRouter>

    )
  }
}
export default App;