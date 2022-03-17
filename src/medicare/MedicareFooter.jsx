import React, { Component } from 'react'

export default class MedicareFooterForm extends Component {
  render() {
    return (
        <footer className="bg-white">
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
  <div className="flex justify-center space-x-6 md:order-2">
  <button  className="px-2 py-2 m-2 text-sm bg-blue-500 hover:shadow-lg text-white rounded transition duration-200 zipSubmit" >
  Call For My Quote
</button>

  </div>
  <div className="mt-8 md:mt-0 md:order-1">
    <p className="text-center text-base text-gray-400">&copy; 2022 UsMedicare Quotes, Inc. All rights reserved.</p>
  </div>
</div>
</footer>
    )
  }
}
