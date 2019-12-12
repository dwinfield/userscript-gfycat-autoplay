// ==UserScript==
// @name        Gfycat Disable Autoplay Related GIFs
// @match       *://*gfycat.com/*
// @grant       none
// @version     1.0
// @author      Dave Winfield
// @description Turns off the "Autoplay Related GIFs" feature
// @require     https://code.jquery.com/jquery-3.4.1.slim.min.js
// @downloadURL https://raw.githubusercontent.com/dwinfield/userscript-gfycat-autoplay/master/gfycat.js
// @supportURL  https://github.com/dwinfield/userscript-gfycat-autoplay
// @homepageURL https://github.com/dwinfield/userscript-gfycat-autoplay
// ==/UserScript==

$(function() {  
  $('div.switch').each(function(i, elem) {    
    var $input = $(elem).find('input');
    //only toggle the click if the box is checked.
    if ($input.prop("checked")) { 
      $input.click();  
    }
  });
});
