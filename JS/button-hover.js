class ButtonHover {
  constructor(buttonElement) {
    this.buttonElement = buttonElement;
    this.originalButtonText = buttonElement.textContent;
    this.originalButtonTextColor = buttonElement.style.color;
    console.log(this.originalButtonTextColor);
    this.buttonElement.addEventListener(
      "mouseenter",
      this.inverseStyle.bind(this)
    );
    this.buttonElement.addEventListener(
      "mouseleave",
      this.returnToNormalStyle.bind(this)
    );
  }

  inverseStyle() {
    if (this.buttonElement.textContent.toLowerCase() === "sign up!") {
      this.buttonElement.textContent = "Be Kind!";
    }

    this.buttonElement.style.transition = "all .5s ease-in-out";
    this.buttonElement.style.color = "#48beff";
  }

  returnToNormalStyle() {
    this.buttonElement.textContent = this.originalButtonText;
    this.buttonElement.style.color = this.originalButtonTextColor;
    this.buttonElement.style.transition = "all .5s ease-in-out";
  }
}

const buttons = document.querySelectorAll("button");

console.log(buttons);

buttons.forEach(buttonElement => {
  return new ButtonHover(buttonElement);
});
