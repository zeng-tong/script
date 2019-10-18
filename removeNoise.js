// ==UserScript==
// @name         Remove Noise
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove site's noise information when you just want to read one piece.
// @author       zengtong
// @match        https://www.zhihu.com/*
// @match        https://www.baidu.com/*
// @grant        none
// ==/UserScript==

function removeByDivs(divs) {
    for (var i=0; i < divs.length; i++){
        removeDivByClassName(divs[i])
    }
}
function removeDivByClassName(name) {
    var paras = document.getElementsByClassName(name);
    for(var i=0;i<paras.length;i++){
        //删除元素 元素.parentNode.removeChild(元素);
        if (paras[i] != null) {
            paras[i].parentNode.removeChild(paras[i]);
        }
    }
}
function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

const zhihuTopSearchDivClass = ['TopSearch-items','Card-header','Footer']
const baiduTopSearch = ['FYB_RD']

(function() {
    'use strict';
    //通过class获取元素
   const zhihuLocation = 'zhihu.com'
   const baiduLocation = 'baidu.com'
   const url = document.URL
   if (isContains(url, zhihuLocation)) {
       window.onload=removeByDivs(zhihuTopSearchDivClass)
   }
   if (isContains(url, baiduLocation)) {
       window.onload=removeByDivs(baiduTopSearch)
   }
})();
