class MemberPanel{
    constructor(memberElement) {
        this.memberElement = memberElement;

        this.panelBackgroundColor = memberElement.style.background;
        this.panelTextColor = memberElement.querySelector("h4").style.color;

        this.panelText = memberElement.querySelectorAll(".member-text");

        this.memberElement.addEventListener('mouseenter', this.inverseStyle.bind(this));
        this.memberElement.addEventListener('mouseleave', this.returnNormalStyle.bind(this));
    }

    inverseStyle() {
        this.memberElement.style.backgroundColor = "#0081c7";

        this.panelText.forEach(element => {
            element.style.color = "whitesmoke";
        });

        this.memberElement.style.borderColor = "#48beff";
    }
    returnNormalStyle() {
        this.memberElement.style.backgroundColor = this.panelBackgroundColor; 

        this.panelText.forEach(element => {
            element.style.color = this.panelTextColor;
        });
        
        this.memberElement.style.borderColor = "#0081c7";
    }
}


const memberPanels = document.querySelectorAll(".member");

memberPanels.forEach((memberElement) => { return new MemberPanel(memberElement) })
console.log(memberPanels);