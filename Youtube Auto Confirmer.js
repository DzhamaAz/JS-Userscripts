// ==UserScript==
// @name         Youtube Auto Confirmer
// @namespace    https://github.com/DzhamaAz/JS-Userscripts
// @version      0.1
// @description  Confirms automatically the Youtube 'Continue wachting?' dialog.
// @author       Dzhamaaz
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function confirmer(mutation){
        console.log(mutation.type); // Can be removed!
        dialogs.forEach((dialog)=>{
            if(dialog==document.querySelector(elements[1]).innerText){
                alert("Are you there?"); // Can be removed!
                target.querySelector(elements[2]).click(); 
            }
        });
    }
    var elements=[
        "yt-confirm-dialog-renderer", // The popup.
        ".line-text.style-scope.yt-confirm-dialog-renderer", // The dialog.
        "#button.style-scope.yt-button-renderer" // The confirm button.
    ];
    var dialogs=[
        "Video paused. Continue watching?", // For english users.
        "Video angehalten. Wiedergabe fortsetzen?" // For german users.
    ];
    var target=document.querySelector(elements[0]); // The targel element to observe.
    var observer=new MutationObserver(confirmer(mutation));
    var config={ // Observer configuration - look for all changes.
        attributes:true,
        childList:true
        // attributeFilter:['style'] // shows only changes on style attribute. // Can be removed!
    };
    observer.observe(target,config); // Start obsering the target element.
})();