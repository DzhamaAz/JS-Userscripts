// ==UserScript==
// @name         YouTube player controls hider
// @namespace    https://github.com/DzhamaAz/JS-Userscripts
// @version      1.0
// @description  Toggles the YouTube player controls on and off.
// @author       DzhamaAz
// @match        https://www.youtube.com/watch*
// ==/UserScript==

(function() {
    'use strict';
    function hideElement(element) {
        let DOMelement = document.getElementsByClassName(element)[0] || document.getElementById(element);
        DOMelement.style.display = "none";
    }
    function unhideElement(element) {
        let DOMelement = document.getElementsByClassName(element)[0] || document.getElementById(element);
        DOMelement.style.display = "";
    }
    function hideAllElements(elementsArray) {
        elementsArray.forEach(element => {
            hideElement(element);
        });
    }
    function unhideAllElements(elementsArray) {
        elementsArray.forEach(element => {
            unhideElement(element);
        });
    }
    const ELEMENTS = [
        // "ytp-caption-window-container",
        "ytp-gradient-bottom",
        "ytp-gradient-top",
        "ytp-chrome-bottom",
        "ytp-chrome-top-buttons"
    ];

    let displayFlag = true;
    document.onkeydown = function(key) {
        if (key.altKey && key.key == "t") {
            if (displayFlag) {
                hideAllElements(ELEMENTS);
                displayFlag = false;
            } else {
                unhideAllElements(ELEMENTS);
                displayFlag = true;
            }
        }
    }
})();