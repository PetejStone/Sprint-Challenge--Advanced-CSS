
const contact = document.querySelector('#contact');
const form = document.querySelector('form');
const overlay = document.querySelector('.overlay');




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

//Form button functionilty
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  alert('Thanks For Reaching Out To Us! Someone Will Contact You Soon!');
  overlay.style.display = 'none';
});

contact.addEventListener('click', (e)=> {
  overlay.style.display = 'flex';

});

cancel.addEventListener('click', (e)=> {
  overlay.style.display = 'none';
});
