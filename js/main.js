const nav = document.getElementById('nav');

/// carousel slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


//sticky nav
window.onscroll = function() {myFunction();};

let sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
    nav.style.maxWidth = "1200px";
    nav.style.marginTop = 0;
    nav.style.backgroundColor = "white";
    nav.style.height = "3rem";
    nav.style.borderRadius = '10px';
    nav.style.opacity = '.7';


  } else {
    nav.classList.remove("sticky");
    // intro.style.marginTop = "2em";
    nav.style.marginTop = "1em";

  }
}
//end of sticky nav
