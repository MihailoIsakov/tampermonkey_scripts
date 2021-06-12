// ==UserScript==
// @name         Hide sidebar on stackexchange
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/*
// @match        https://*.stackexchange.com/*
// @match        https://askubuntu.com/*
// @match        https://serverfault.com/*
// @match        https://superuser.com/*
// @grant        none
// ==/UserScript==

// @require       http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js

(function() {
    'use strict';

    //$(document).find("#hot-network-questions").hide();
    $(document).find("#sidebar").hide();

})();