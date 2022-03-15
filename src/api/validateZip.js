import React from 'react';
import ziptastic from 'ziptastic';
import $ from 'jquery'

export default function validateZip(values) {
  

    values.preventDefault();

    let val = document.getElementById('zip').value;
    
    if(val.length < 5){
      console.log('wrong length');
      return 
    }
  

    else {

      var ziptastic = require('ziptastic');

      let zipVal = document.getElementById('zip').value;


      var requestOptions = {
        async: true,
        crossDomain: true,
        method: 'GET',
        redirect: 'follow',
        url:'https://ziptasticapi.com/' + zipVal
      };

      $.ajax(requestOptions).done(function(res){
        console.log(res);

        var parse = JSON.parse(res);


        if (parse.error) {
          toast.error('Please enter a correct zip code');
          document.getElementById('submit').disabled = true;

        }

        else {



          localStorage.setItem('zip', val);

          document.getElementById('zipCode').value = val;
          document.getElementById('zip').value = val;
    
          let zipVal = localStorage.getItem('zip');

          let city = parse.city;
          let state = parse.state;

        localStorage.setItem('city', city);
        localStorage.setItem('state', state);

          document.getElementById('zipCode').value = zipVal;
        document.getElementById('city').value = city;
          document.getElementById('state').value = state; 

        }

        
      }

      )
    
    }
  
}
