"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Paige Mabbitt
   Date:  4.18.19 
   
   Filename: mpl_links.js

*/
//On window load  
window.onload = function () {
    //object collection of all the select elements within a govLinks form
    var allSelect = document.querySelectorAll("form#govLinks select");
    //Whenever the document changes, the href of the page is changed to the selected option value
    for (var i = 0; i < allSelect.length; i++) {
        document.onchange = function (e) {
            document.location.href = e.target.value;
        }
    }
};