import React, { Component } from 'react';

import NavBarMedicare from './medicare/NavBarMedicare';
import MedicareBanner from './medicare/MedicareBanner';
import MedicareFooterForm from './medicare/MedicareFooter';

import './forms.css'
export default class Age extends Component {

 

  render() {


    let buttonsTitles = [
      { 'title': 'Yes', 'id': 'Yes', 'value': 'Yes' },
      { 'title': 'No', 'id': 'No', 'value': 'No' },      
    ]


    let buttonList = buttonsTitles.map((buttonTitle, index) => { return (<button className='chooseButton border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-200 font-bold' id={buttonTitle.id} value={buttonTitle.value}>{buttonTitle.title}</button>)})
    return (
      <div className="bg-[#F3F5FF] ">
        <NavBarMedicare />
        <MedicareBanner
          setProgress="10"
        />


           <div className="flex items-center justify-center py-5 px-4 sm:px-6 lg:px-4">
        <div className="max-w-lg w-full space-y-8">
          <div>
            
            <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900">Do you have Medicare or will you be eligible for Medicare within the next 3 months?</h2>
            
          </div>
          <form className="mt-8 space-y-6">
          <div className="w-full space-y-6 relative flex justify-center leading-5">

<div className=" leading-5 buttonBlock">
  {buttonList}
</div>
</div>
           
          </form>
          </div>
          
      </div>
 
        <MedicareFooterForm />
      </div>
    )
  }
}
