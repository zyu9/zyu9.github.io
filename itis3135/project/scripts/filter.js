//filter plugin
//from https://www.jqueryscript.net/other/filter-tags-input.html

$(function($) {
    $.autofilter({
        // filter string as substring
        subString: false,

        // is case sensitive?
        caseSensitive: false,

        // enable animation
        animation: true,

        // duration in ms
        duration: 0
    });
  });