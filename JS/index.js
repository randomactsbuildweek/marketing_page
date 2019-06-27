let NavBar = document.querySelector(`.button`);
NavBar.addEventListener(`click`, event => {
  alert("Please fill out the form in the contacts tab!");
});

let hamburger = document.querySelector(`.fas`);
hamburger.addEventListener("click", event => {
  toggle();
});

let content = document.querySelector(`ul`);

let toggle = () => {
  content.classList.toggle(`toggle-content`);
};
