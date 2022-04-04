import React, { Component } from 'react';

class MedicareMA extends Component {



  componentDidMount() {

    const renderScript = document.createElement("script");

    const zip = localStorage.getItem('zipCode');


    // TODO: add lp1-4, landing page, tcpa language, privacy policy url
    //   

    renderScript.innerHTML = "window.MediaAlphaExchange = {'data': { 'zip': localStorage.getItem('zipCode')}, 'placement_id': 'vLKzTdoPTUxy-P7jysaC7AwW18kMVA','sub_1': '', 'type': 'ad_unit', 'version': 17, }; window.MediaAlphaExchange__load('mediaalpha_placeholder'); ";

    document.body.appendChild(renderScript);

    const script = document.createElement("script");

    script.src = "//insurance.mediaalpha.com/js/serve.js";
    script.async = true;
    document.body.appendChild(script);
  }


  render() {
    return (



      <div id='mediaalpha_placeholder' />



    )
  }
}

export default MedicareMA;