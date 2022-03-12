import React, { Component } from 'react'
import Logo from '../images/usmq.png'

export default class FooterMedicare extends Component {
  render() {
    const navigation = {
      main: [
        { name: 'Do Not Sell', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
      ],
      
    }

    return (
      
      <footer className="bg-white text-sm text-center">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <img src={Logo} className="h-10 m-auto text-center pb-4" />

          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
  
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 UsMedicare Quotes, Inc. All rights reserved.</p>{''}
          <p className='text-gray-400 text-center'>
          Quotehound Inc. is not endorsed by or affiliated with Medicare or any government program.

This is a commercial site designed for the solicitation of insurance from selected health and Life insurance carriers. It is not an insurer, an insurance agency, or a medical provider. Insurance agency services may be provided by a partner licensed agency. This site is not maintained by or affiliated with the federal government’s Health Insurance Marketplace website or any state government health insurance marketplace

Invitations for application for insurance via usmedicarequotes.comare made through Quotehound, Inc. or through its designated agent(s), Devanand Gaymes, only where licensed and appointed. License numbers are available here or upon request and are automatically provided where required by law. Devanand Gaymes is a licensed General Lines Health Insurance agent in the State of Texas. Devanand Gaymes' Texas license number is 1897511
          </p>
      </div>
    </footer>
    )
  }
}
