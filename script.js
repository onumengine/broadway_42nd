//jshint esversion: 6

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
        //console.log(allTabsInPage);
        allTabsInPage.forEach((tab) => {
            tab.classList.remove("visible");
            tab.classList.add("hidden");
        });
    },
    showTabById: function(event) {
        //console.log(`the ${event.target.id} was clicked`);
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
        //console.log(`making the ${tabId} visible...`);
        document.getElementById(tabId).classList.add("visible");
        //console.log(`attempt to display ${tabId} complete`);
    }
};

function main() {
    var navbarButtons = document.querySelectorAll("#appbarActions li");
    //console.log(navbarButtons);

    navbarButtons.forEach((button) => {button.addEventListener("click", tabManager.showTabById);});

    tabManager.showTab(elementsIds.homeTab);
}