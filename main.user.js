// ==UserScript==
// @name         Author Today unblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://author.today/reader/*
// @grant        none
// ==/UserScript==

(function() {
    console.log('1');
    'use strict';
    let style = document.createElement('style');
    style.innerHTML = '*{ user-select: auto !important; webkit-user-select: auto !important; }';
    $('.noselect')[0].onmousedown = e=>true;
    $('.noselect')[0].onselectstart = e=>true;
    $('.noselect')[0].oncontextmenu = e=>true
    document.body.appendChild(style);
})();
