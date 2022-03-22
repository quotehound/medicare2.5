import React, { Component } from 'react';

class MedicareMA extends Component {



  componentDidMount() {

    const renderScript = document.createElement("script");

    const zip = localStorage.getItem('zipCode');


    renderScript.innerHTML = "window.MediaAlphaExchange = {'data': { 'zip': localStorage.getItem('zipCode')}, 'placement_id': 'YiPFAJc_r0i9fsZr0uP7vvicsinK3Q','sub_1': 'test sub id', 'type': 'ad_unit', 'version': 17}; window.MediaAlphaExchange__load('mediaalpha_placeholder'); ";

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