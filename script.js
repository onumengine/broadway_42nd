//jshint esversion: 6

const navDrawerOpenButton = document.querySelector("#navDrawerOpenButton");
navDrawerOpenButton.addEventListener("click", () => {
    var appbarActions = document.querySelector("#appbarActions");
    appbarActions.style.width = "80%";
});

const navDrawerCloseButton = document.querySelector("#navDrawerCloseButton");
console.log(navDrawerCloseButton);
navDrawerCloseButton.addEventListener("click", () => {
    var appbarActions = document.querySelector("#appbarActions");
    appbarActions.style.width = "0%";
});

const elementsIds = {
    aboutButton: "aboutButton",
    contactButton: "contactButton",
    homeButton: "homeButton",
    portfolioButton: "portfolioButton",
    aboutTab: "aboutTab",
    contactTab: "contactTab",
    homeTab: "homeTab",
    portfolioTab: "portfolioTab",
};

const tabManager = {
    hideAllTabs: function() {
        var allTabsInPage = document.querySelectorAll(".tabContent");
        allTabsInPage.forEach((tab) => {
            tab.classList.remove("visible");
            tab.classList.add("hidden");
        });
    },
    showTabById: function(event) {
        switch(event.target.id) {
            case elementsIds.homeButton:
                tabManager.showTab(elementsIds.homeTab);
                break;
            case elementsIds.aboutButton:
                tabManager.showTab(elementsIds.aboutTab);
                break;
            case elementsIds.portfolioButton:
                tabManager.showTab(elementsIds.portfolioTab);
                break;
            case elementsIds.contactButton:
                tabManager.showTab(elementsIds.contactTab);
                break;
            default:
                console.log("Switch statement couldn't find a condition");
        }
    },
    showTab: function(tabId) {
        this.hideAllTabs();
        document.getElementById(tabId).classList.add("visible");
    }
};

function main() {
    var navbarButtons = document.querySelectorAll("#appbarActions li");

    navbarButtons.forEach((button) => {button.addEventListener("click", tabManager.showTabById);});

    tabManager.showTab(elementsIds.homeTab);
}

window.onload = main;