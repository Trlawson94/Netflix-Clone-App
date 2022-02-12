import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

import App from './App';

ReactDom.render(<App />, document.getElementById('root'));


/* var header = $('.serAllTitle').text().trim();
console.log(header.charAt(0));

if ( $('.serAllTitle').text().trim().charAt(0) == 'A') {
$(this).find($('.serAllTitle').text().trim().charAt(0) == 'A');
}

*/

 $(".serAllTitle").each(function() { 
    if ($(this).text().trim().charAt(0) == 'A') {
        $(this).first().append("<div><b>AYE</b></div>");
    }
 });

 $(".serAllBox .serAllTitle").each(function() { 
    if ($(this).eq(0).text().trim().charAt(0) == 'A') {
        $(this).find().first().parent(6).before("<h1>AYE</h1><br>");
        console.log($(this).text());
    }
 })



 $(".serAllBox .serAllTitle").each(function() { 
    var firsLetter = $(this.text().trim().charAt(0)); 
    if ($(this).text().trim().charAt(0) == firsLetter) {
        $(this).first().parent(5).before('<h1>' + firsLetter + '</h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
})

$(".serAllBox .serAllTitle").each(function() { 
    //var firsLetter = $(this).text().trim().charAt(0);
    //var values = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 
    if ($(this).text().trim().charAt(0) == 'A') {
        $(this).first().parent(5).before('<h1> A </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'B') {
        $(this).first().parent(5).before('<h1> B </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'C') {
        $(this).first().parent(5).before('<h1> C </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'D') {
        $(this).first().parent(5).before('<h1> D </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'E') {
        $(this).first().parent(5).before('<h1> E </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'F') {
        $(this).first().parent(5).before('<h1> F </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'G') {
        $(this).first().parent(5).before('<h1> G </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'H') {
        $(this).first().parent(5).before('<h1> H </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'I') {
        $(this).first().parent(5).before('<h1> I </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'J') {
        $(this).first().parent(5).before('<h1> J </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'K') {
        $(this).first().parent(5).before('<h1> K </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'L') {
        $(this).first().parent(5).before('<h1> L </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'M') {
        $(this).first().parent(5).before('<h1> M </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'N') {
        $(this).first().parent(5).before('<h1> N </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'O') {
        $(this).first().parent(5).before('<h1> O </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'P') {
        $(this).first().parent(5).before('<h1> P </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'Q') {
        $(this).first().parent(5).before('<h1> Q </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'R') {
        $(this).first().parent(5).before('<h1> R </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'S') {
        $(this).first().parent(5).before('<h1> S </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'T') {
        $(this).first().parent(5).before('<h1> T </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'U') {
        $(this).first().parent(5).before('<h1> U </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'V') {
        $(this).first().parent(5).before('<h1> V </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'W') {
        $(this).first().parent(5).before('<h1> W </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'X') {
        $(this).first().parent(5).before('<h1> X </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'Y') {
        $(this).first().parent(5).before('<h1> Y </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
    if ($(this).text().trim().charAt(0) == 'Z') {
        $(this).first().parent(5).before('<h1> Z </h1><br>');
        $(this > h1).not(this > 'h1').first().remove();
        console.log($(this).text());
    }
})

$(document).ready(function(){
    if ($('.ms-cui-tabContainer').length) {
        $("#s4-workspace").css("overflow", "auto");
    }
});



$(".serAllBox .serAllTitle").each(function() { 
    //var firsLetter = $(this).text().trim().charAt(0);
    //var values = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 
    if ($(this).text().trim().charAt(0) == 'A') {
        $(this).first().parent(5).before('<h1> A </h1><br>');
        console.log($(this).text());
    }
    else if ($(this).text().trim().charAt(0) == 'C') {
        $(this).first().parent(5).before('<h1> CAYE </h1><br>');
        console.log($(this).text());
    }
})