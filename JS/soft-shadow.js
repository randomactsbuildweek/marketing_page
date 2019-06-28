class SoftShadowHover{
    constructor(hoverElement) {
        this.hoverElement = hoverElement;
        this.hoverElement.addEventListener('mouseenter', this.addShadow.bind(this));
        this.hoverElement.addEventListener('mouseleave', this.removeShadow.bind(this));
    }

    addShadow() {
            this.hoverElement.classList.add("soft-hover-shadow");
            this.hoverElement.style.transition = "all .5s";
    }
    removeShadow() {
            this.hoverElement.classList.remove("soft-hover-shadow");
            this.hoverElement.style.transition = "all .5s";
    }
}


const softShadowItems = document.querySelectorAll(".soft-shadow");

softShadowItems.forEach((softShadowElement) => { return new SoftShadowHover(softShadowElement) })