// ==UserScript==
// @name         YouTube player controls hider
// @namespace    https://github.com/DzhamaAz/JS-Userscripts
// @version      1.0
// @description  Toggles the YouTube player controls on and off.
// @author       DzhamaAz
// @match        https://www.youtube.com/watch*
// ==/UserScript==

(function() {
    function hideElement(element) {
        let DOMelement = document.getElementsByClassName(element.name)[0] || document.getElementById(element.name);
        if (!element.defaultState) {
            let state = DOMelement.style.display;
            element.defaultState = state;
        }
        DOMelement.style.display = "none";
    }
    function unhideElement(element) {
        let DOMelement = document.getElementsByClassName(element.name)[0] || document.getElementById(element.name);
        DOMelement.style.display = element.defaultState;
    }
    function hideElementArray(elementsArray) {
        elementsArray.forEach(element => {
            hideElement(element);
        });
    }
    function unhideElementArray(elementsArray) {
        elementsArray.forEach(element => {
            unhideElement(element);
        });
    }
    
    const ELEMENTS = [
        // { name: "ytp-caption-window-container", defaultState: null },
        { name: "ytp-gradient-bottom", defaultState: null },
        { name: "ytp-gradient-top", defaultState: null },
        { name: "ytp-chrome-bottom", defaultState: null },
        { name: "annotation annotation-type-custom iv-branding", defaultState: null },
        { name: "ytp-chrome-top", defaultState: null }
    ];
    let displayFlag = true;

    document.onkeydown = function(key) {
        if (key.altKey && key.key == "t") {
            if (displayFlag) {
                hideElementArray(ELEMENTS);
                displayFlag = false;
            } else {
                unhideElementArray(ELEMENTS);
                displayFlag = true;
            }
        }
    }
})();