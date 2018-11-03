// ==UserScript==
// @name         Scratch Advanced Search
// @namespace
// @version      0.1
// @description  Adds new features to the Scratch search results' page
// @author       Smrman
// @match        *://scratch.mit.edu/search/*
// @connect      *://www.googleapis.com/customsearch/*
// @homepageURL
// @iconURL
// @icon64URL

// @updateURL
// @downloadURL
// @supportURL


// @require
// @resource

// @run-at document-end


// @grant         GM_xmlhttpRequest
// ==/UserScript==

(function() {
    //'use strict';
    const usersTabIcon = "";

    let searchButtonsBar = document.getElementsByClassName("sub-nav tabs")[0];
    let linkUsers = document.createElement("a");
    linkUsers.href = "#";
    let iconUsers = document.createElement("img");
    iconUsers.classList.add("tab-icon");
    iconUsers.classList.add("users");
    iconUsers.src = usersTabIcon;
    let spanUsers = document.createElement("span");
    spanUsers.innerHTML = "Les Utilisateurs";
    let liUsers = document.createElement("li");
    liUsers.appendChild(iconUsers);
    liUsers.appendChild(spanUsers);
    linkUsers.appendChild(liUsers);
    searchButtonsBar.appendChild(linkUsers);


console.log(searchButtonsBar);
})();