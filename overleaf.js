// ==UserScript==
// @name         Overleaf: map hjlk to jkl;
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://www.overleaf.com/project/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // poll until editor is loaded
    const retry = setInterval(() => {
        if (window._debug_editors === undefined) return
        clearInterval(retry)
        // get current editor instance
        const editor = window._debug_editors[window._debug_editors.length -1]
        // vim keyboard plugin
        const vimKeyboard = window.ace.require("ace/keyboard/vim")
        // add custom keybindings - insert mode applies on insert
        // vimKeyboard.Vim.map("jj", "<Esc>", "insert")
        // normal mode applies while escaped
        // vimKeyboard.Vim.map("h", "j", "normal")

        vimKeyboard.Vim.noremap("l", "gk", "normal")
        vimKeyboard.Vim.noremap("k", "gj", "normal");
        vimKeyboard.Vim.noremap("j", "h", "normal");
        vimKeyboard.Vim.noremap(";", "l", "normal");


        vimKeyboard.Vim.noremap("l", "gk", "visual")
        vimKeyboard.Vim.noremap("k", "gj", "visual");
        vimKeyboard.Vim.noremap("j", "h", "visual");

        // For some reason, we need to press escape twice to enter normal mode
        vimKeyboard.Vim.noremap("<Esc>", "<Esc><Esc>", "insert");


        // set the modified keyboard handler for editor
        editor.setKeyboardHandler(vimKeyboard.handler)
        console.log("Custom key bindings applied")
    }, 100)
})();
