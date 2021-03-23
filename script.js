//jshint esversion: 6


var page = {
    allTabs: document.querySelectorAll(".tabContent"),
    homeTab: document.querySelector("#homeTab"),
    aboutTab: document.querySelector("#aboutTab"),
    hideAllTabs() {
        this.allTabs.forEach((element) => element.classList.add("hidden"));
    },
    showElement(elementId) {
        document.querySelector(elementId).classList.add("visible");
    },
    toggleVisibility(elementId) {
        document.querySelector(elementId).classList.toggle("hidden");
    }
};

document.querySelector("#aboutButton").addEventListener("click", () => {
    page.toggleVisibility("#aboutTab");
});

page.hideAllTabs();
page.showElement("#homeTab");