//1 EventListener
var NavBar = document.querySelector(`.button`);
NavBar.addEventListener(`click`, event => {
  alert("Please fill out the form in the 'Contact Us' tab!");
});

//2 DOM Manipulation
var hamburger = document.querySelector(`.fas`);
hamburger.addEventListener("click", event => {
  toggle();
});

var content = document.querySelector(`ul`);

var toggle = () => {
  content.classList.toggle(`toggle-content`);
};
