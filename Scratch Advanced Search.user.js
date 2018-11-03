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

// @updateURL    https://smrman.github.io/ScratchAdvancedSearch/Scratch%20Advanced%20Search.user.js
// @downloadURL  https://smrman.github.io/ScratchAdvancedSearch/Scratch%20Advanced%20Search.user.js
// @supportURL   https://github.com/Smrman/ScratchAdvancedSearch/issues/new


// @require
// @resource     https://smrman.github.io/ScratchAdvancedSearch/users-active.svg
// @resource     https://smrman.github.io/ScratchAdvancedSearch/users-inactive.svg

// @run-at document-end


// @grant         GM_xmlhttpRequest
// ==/UserScript==

(function() {
    //'use strict';
    const usersTabIconActive = "https://smrman.github.io/ScratchAdvancedSearch/users-active.svg";
    const usersTabIconInactive = "https://smrman.github.io/ScratchAdvancedSearch/users-inactive.svg";

    let searchButtonsBar = document.getElementsByClassName("sub-nav tabs")[0];
    let linkUsers = document.createElement("a");
    linkUsers.href = "#";
    linkUsers.addEventListener("click", searchUser());

    let iconUsers = document.createElement("img");
    iconUsers.classList.add("tab-icon");
    iconUsers.classList.add("users");
    iconUsers.src = usersTabIconInactive;
    let spanUsers = document.createElement("span");
    spanUsers.innerHTML = "Les Utilisateurs";
    let liUsers = document.createElement("li");
    liUsers.appendChild(iconUsers);
    liUsers.appendChild(spanUsers);
    linkUsers.appendChild(liUsers);
    searchButtonsBar.appendChild(linkUsers);


console.log(searchButtonsBar);
})();

function searchUser() {
    const url = new URL(window.location.href);
    const query = url.searchParams.get("q");
    window.history.replaceState(history.state, "Scratch - Search", "users?q=" + query);
}