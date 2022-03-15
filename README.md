<p align="center">
  <a href="" rel="noopener">
 <img src="https://assets.website-files.com/5dfd95f78d0e1ee3b32e0f58/5dfd965f8d0e1e23372e0fad_Quotehound%2520Primary%2520Logo%2520-%2520transparent%2520rasterized%2520(1)-p-2600.png" alt="Project logo"></a>
</p>
<h3 align="center">Medicare Form</h3>
---

<p align="center"> Details About The Form & Code Base.
    <br> 
</p>

# LATEST UPDATES: 
- [Click here to view latest push](#latest)

- [Click Here To View All Push Updates](#updates)



- [Click here to view known bugs](#bugs)
- [Click here to view Roadmap](#roadmaps)

## 📝 Table of Contents


- [Dependencies / Limitations](#limitations)

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- Zipcode API (on load)
- Address Validator 
- Router v6
- React Script 5.0
- Tailwind CSS 3.0 
- axios POST
- Lottie Files (animations)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. 

git clone the repository
```
git clone git@gitlab.com:forms7/medicare-form.git
```

open terminal and install all neccesary libraries 
```
npm i 
```

## Updates <a name= "updates" > </a>

- ## v2.5.0.0 <a name='latest'></a>
  - Created initial template from create-react-app
  - fixed multifolder issue
  - installed tailwind 
  - installed following libraries:
    - tailwind 
    - axios
    - react-number-format
    - react-toastify 
    - react-router
    - react-router-dom
    - ziptastic
    - jquery 
    - lottie player
  - Added in custom font for ThiccBoi
  - Added Headless UI 
  - installed Hero Icons
  - Created Landing Page jsx & css files

- ## v2.5.0.1 
  - created landing page
  - added function for adding more elements in the landing page
  - added banner on top 
  - started function for zipcode validation 
  - added function for state passs between components


- ## v2.5.0.2 
  - Finalized Initial design
  - added how it works
  - added CTA
  - added navbar 
  - added footer

- ## v2.5.0.3 
  - Changed Navbar height
  - Optimized landing page
  - added button interactions
  - changed "how it works" section
  - fixed footer
  
- ## v2.5.0.4 <a name='latest'></a>
  - Finalized landing page
  - updated navbar 
  - started api call for zipcode verification which produced a bug <a name='api-bug'> Here </a>
  - created a webpack config file
  - started a congif ovverrides file 
## Known Bugs <a name = "bugs"></a>

  - API post bug: 
    - when making an api GET call or i think any just AXIOS call, react scripts no longer has modules to cover for polyphil which in turn makes missing modules or does not have any polyphils that are needed. I have tried installing libraries, dependencies, and even creating a webpack config file with no solution yet. 

## Roadmap <a name = "roadmap"></a>