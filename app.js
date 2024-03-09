// let cInput = document.querySelector('#celcius > input');
// let fInput = document.querySelector('#fahrenheit > input');
// let kInput = document.querySelector('#kelvin > input');

// let btn = document.querySelector('.btn');




// function roundNumber(number) {
//     return Math.round(number*100)/100
// }

// cInput.addEventListener('input', function() {
//     let cTemp = parseFloat(cInput.value);
//     let fTemp = (cTemp*(9/5)) + 32;
//     let kTemp = cTemp + 273.15;

//     fInput.value = roundNumber(fTemp);
//     kInput.value = roundNumber(kTemp);

// })

// fInput.addEventListener('input', function() {
//     let fTemp = parseFloat(fInput.value);
//     let cTemp = (fTemp - 32) * (5/9);
//     let kTemp = (fTemp - 32) * (5/9) + 273.15;

//     cInput.value = roundNumber(cTemp);
//     kInput.value = roundNumber(kTemp);

// })

// kInput.addEventListener('input', function() {
//     let kTemp = parseFloat(kInput.value);
//     let cTemp = kTemp - 273.15;
//     let fTemp = (kTemp - 273.15) * (9/5) + 32
   

//     cInput.value = roundNumber(cTemp);
//     fInput.value = roundNumber(fTemp);

// })

// btn.addEventListener('click', () => {
//     cInput.value = "";
//     fInput.value = "";
//     kInput.value = "";
// })



// let InputDegree = document.querySelector('#input-degree > input');

// let cInput = document.querySelector('#temp').options[document.querySelector('#cel').selectedIndex].text;
// console.log(cInput);
// let fInput = document.querySelector('#far');
// let kInput = document.querySelector('#kel');

// let convTemp1 = document.querySelector('coverted-temp1 > input');
// let convTemp2 = document.querySelector('coverted-temp2 > input');

// document.getElementById(eid).options[document.getElementById(eid).selectedIndex].text;

// InputDegree.addEventListener('input', function() {
//     if(cInput == celcius) {
//         let cTemp = parseFloat(cInput.value);
//         let fTemp = (cTemp*(9/5)) + 32;
//         let kTemp = cTemp + 273.15;

//         convTemp1.value = roundNumber(fTemp);
//         convTemp2.value = roundNumber(kTemp);
//     }
   

    

// })






// function convertTemp() {
//    const inputTemp = parseFloat(document.querySelector("#input-temp").value);
//    const typeTemp = document.querySelector("#choose-type").value; 


//    let convertedTemp;

//    if(typeTemp == "celsius"){

//     convertedTemp = (inputTemp * 9/5) + 32;
//     document.querySelector("#converted-temp").textContent = `${convertedTemp}`;
//    }
//    else if(typeTemp == "fahrenheit"){
//     convertedTemp = (inputTemp - 32) * 5/9;
//     document.querySelector("#converted-temp").textContent =  `${convertedTemp}`;
    
//    }else {
     
//     document.querySelector("#converted-temp").textContent =  'please select valid input'

//    }


// }


function convertTemp() {
   const inputTemp = parseFloat(document.querySelector("#input-temp").value);
   const typeTemp = document.querySelector("#choose-type").value;

   let convertedTemp;

   if (typeTemp === "celsius") {
      convertedTemp = (inputTemp * 9/5) + 32;
      document.querySelector("#converted-temp").textContent = `${convertedTemp} °F`;
   } else if (typeTemp === "fahrenheit") {
      convertedTemp = (inputTemp - 32) * 5/9;
      document.querySelector("#converted-temp").textContent =  `${convertedTemp} °C`;
   }else if(typeTemp == 'kelvin') {
      convertedTemp = inputTemp - 273.15;
      document.querySelector("#converted-temp").textContent = `${convertedTemp} °C`;
   
   } else {
      document.querySelector("#converted-temp").textContent = 'Please select a valid input';
   }
   console.log(`inputTemp: ${inputTemp}, typeTemp: ${typeTemp}, convertedTemp: ${convertedTemp}`);

  
}


function cleanFields() {
   document.querySelector("#input-temp").value = "";

   document.querySelector("#converted-temp").textContent = "";

}



