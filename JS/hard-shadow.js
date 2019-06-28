class HardShadowHover{
    constructor(hoverElement) {
        this.hoverElement = hoverElement;
        this.hoverElement.addEventListener('mouseenter', this.addShadow.bind(this));
        this.hoverElement.addEventListener('mouseleave', this.removeShadow.bind(this));
    }

    addShadow() {
            this.hoverElement.classList.add("hard-hover-shadow");
            this.hoverElement.style.transition = "all .5s";
    }
    removeShadow() {
            this.hoverElement.classList.remove("hard-hover-shadow");
            this.hoverElement.style.transition = "all .5s";
    }
}


const hardShadowItems = document.querySelectorAll(".hard-shadow");

hardShadowItems.forEach((hardShadowElement) => { return new HardShadowHover(hardShadowElement) })