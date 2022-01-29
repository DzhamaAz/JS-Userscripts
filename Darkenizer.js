// ==UserScript==
// @name         Darkenizer
// @namespace    https://github.com/DzhamaAz/JS-Userscripts
// @version      0.1
// @description  Prevent page from flashing while using dark mode.
// @author       Dzhamaaz
// @match        *
// @grant        none
// ==/UserScript==
(function () {
    document.body.style.backgroundColor = "black";
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            document.body.style.backgroundColor = "";
        }
    }
})();