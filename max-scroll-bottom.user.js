// ==UserScript==
// @name         "Прокрутить вниз" для чатов мессенджера MAX
// @namespace    http://tampermonkey.net/
// @description  Двойной клик по каналу перемещает в конец сообщений (как в телеге)
// @match        https://web.max.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=max.ru
// @version      2026-05-07
// ==/UserScript==

(function() {
    'use strict';

    var b = document.body;
    b.addEventListener('dblclick', (e) => {
        const curIt = e.target;
        const maxItem = curIt.closest('div.item');
        const w = document.querySelector('.openedChat');
        if (w)
        {
            const chatCont = w.querySelector('.scrollListScrollable');
            chatCont.scrollTo({
                top: chatCont.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
})();
