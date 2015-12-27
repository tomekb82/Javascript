'use strict'

/* wrap evertything in anonymous function to caontain the variables */
var app = (function(){

    if (!css) {
        throw new Error('Css library not found');
    }

    if (!ajax) {
        throw new Error('Ajax library not found');
    }

    if (!addressBook) {
        throw new Error('AddressBook library not found');
    }

    /* define the DOM elements and common variables */
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        getAllButton = document.getElementById("get-all"),
        outputElement = document.getElementById("output"),
        dataUrl = "data/contacts.json";

    /* define address book and css methods */
    addressBook.init(searchField, outputElement, dataUrl);
    css.init(searchForm);

    // activate autocomplete on keyUp
    searchField.addEventListener("keyup", addressBook.search, false);

    // set active section on focus of the form field
    searchField.addEventListener("focus", css.setActiveSection, false);

    // remove active section on blur of the form field
    searchField.addEventListener("blur", css.removeActiveSection, false);

    // get all results when you click the button
    getAllButton.addEventListener("click", addressBook.getAllContacts, false);

    // add hover class on mouse over of the form field
    searchForm.addEventListener("mouseover", css.addHoverClass, false);

    // remove hover class on mouse over of the form field
    searchForm.addEventListener("mouseout", css.removeHoverClass, false);

    // activate search on form submit
    searchForm.addEventListener("submit", addressBook.search, false);


})();


