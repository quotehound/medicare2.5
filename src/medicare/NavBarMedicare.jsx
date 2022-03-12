import React, { Component } from 'react'

export default class NavBarMedicare extends Component {
  render() {
    return (
      <div>
        <nav className="py-8 bg-transparent" data-config-id="toggle-mobile" data-config-target=".navbar-menu" data-config-class="hidden">
  <div className="container p-2 mx-auto">
    <div className="flex justify-end items-center">
      <a className="text-gray-600 text-2xl leading-none" href="#" data-config-id="brand">
        <img className="h-8" src="plain-assets/logos/plain-gray.svg" alt="" width="auto" />
      </a>
     
      
              <a className="block px-5 py-3 text-sm bg-blue-500 hover:bg-gray-600 text-white font-semibold border border-gray-500 hover:border-blue-600 rounded transition duration-200" href="#" data-config-id="primary-action">(123) 456-7890</a>
              <p className='flex p-2 text-sm'>
                TTY: 711 Monday-Friday 6am-6pm
              </p>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50" data-config-id="toggle-mobile-2" data-config-target=".navbar-menu" data-config-class="hidden">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-12">
        <a className="mr-auto text-2xl font-semibold leading-none" href="#" data-config-id="brand">
          <img className="h-8" src="plain-assets/logos/plain-gray.svg" alt="" width="auto" />
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-config-id="auto-svg-5-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-gray-50 hover:text-gray-500 rounded" href="#" data-config-id="link1">About</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-gray-50 hover:text-gray-500 rounded" href="#" data-config-id="link2">Company</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-gray-50 hover:text-gray-500 rounded" href="#" data-config-id="link3">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold hover:bg-gray-50 hover:text-gray-500 rounded" href="#" data-config-id="link4">Testimonials</a></li>
        </ul>
      </div>

    </nav>
  </div>
</nav>

      </div>
    )
  }
}
