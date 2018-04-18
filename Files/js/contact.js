'use strict';

// Requesting extra credit for appending to document and gsubbing for formatting
document.addEventListener('DOMContentLoaded', ()=>{
    if (document.cookie){
        const recentlySubmitted = document.querySelector('.recentlySubmitted');
        let htmlAddition = '<li>' + document.cookie;
        htmlAddition = htmlAddition.replace(/;/g,'</li><li>')
        htmlAddition = htmlAddition.replace(/=/g,': ')
        recentlySubmitted.childNodes[3].innerHTML += htmlAddition;
        alert(htmlAddition);
        
        recentlySubmitted.classList.toggle('hidden-content');
    }
});

// Set forms
const contactForm = document.querySelector('#contact_form'),
      feedbackForm = document.querySelector('#contact_form');

// Creates a cookie based on the form submitted
const createCookie = (index) => {
    
    // Check which form is submitted
    if (index == 0){
        
        // Create cookies for contact form
        document.cookie = `Name=${contactForm[0].value};`;
        document.cookie = `Email=${contactForm[1].value};`;
        document.cookie = `Subject=${contactForm[2].value};`;
        document.cookie = `Message=${contactForm[3].value};`;

    }else{
        
        // Set variables for used form items
        let radioGroup =  document.querySelectorAll('#feedback_form > .rating-selection:first-of-type > .radio-container > input[type="radio"]'),
            checkList = document.querySelectorAll('#feedback_form > .rating-selection:last-of-type > .checkbox-container'),
            selectedRadioValue = '';
        
       // Check which radio button is toggled 
       radioGroup.forEach((radio) => {
            if (radio.checked){
                selectedRadioValue = radio.parentNode.childNodes[3].innerText;
            }
        });
        
        // Use ternary opertors to set if a checkbox is checked
         document.cookie = `Overall rating=${selectedRadioValue};`;
         document.cookie = `Issues?=${checkList[0].childNodes[1].checked ? 'Yes' : 'No'};`;
         document.cookie = `Bugs?=${checkList[1].childNodes[1].checked ? 'Yes' : 'No'};`;
         document.cookie = `Good Ssyling?=${checkList[2].childNodes[1].checked ? 'Yes' : 'No'};`;
         document.cookie = `Styling needs work?=${checkList[3].childNodes[1].checked ? 'Yes' : 'No'};`;
         document.cookie = `Content needs work?=${checkList[4].childNodes[1].checked ? 'Yes' : 'No'};`;
    }
}