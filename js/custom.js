$(".dropdown-trigger").dropdown();

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    // document.getElementById("logo").style.padding = "20px 10px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("navbar-fixed").style.height = "70px";
    document.getElementById("nav").style.height = "70px";
    document.getElementById("nav-wrapper").style.height = "70px";
    var divs = document.getElementsByClassName('nav_title');
        for(var i=0; i < divs.length; i++) { 
        divs[i].style.height = '70px';
    }
    

  } else {
    // document.getElementById("logo").style.padding = "20px 10px";
    document.getElementById("logo").style.height = "120px";
    document.getElementById("navbar-fixed").style.height = "120px";
    document.getElementById("nav").style.height = "120px";
    document.getElementById("nav-wrapper").style.height = "120px";
    var divs = document.getElementsByClassName('nav_title');
        for(var i=0; i < divs.length; i++) { 
        divs[i].style.height = '120px';
    }
  }
}

var d = new Date();

currentYear = d.getFullYear();