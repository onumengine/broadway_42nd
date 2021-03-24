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

var navbarButtons = document.querySelectorAll("#appbarActions li");
console.log(navbarButtons);

navbarButtons.forEach((button) => {button.addEventListener("click", showTabById);});

hideAllTabs();

function hideAllTabs() {
    var allTabsInPage = document.querySelectorAll(".tabContent");
    console.log(allTabsInPage);
    allTabsInPage.forEach((element) => {
        element.classList.add("hidden");
    });
}

function showTabById(event) {
    console.log(`the ${event.target.id} was clicked`);
    switch(event.target.id) {
        case "homeButton":
            showTab(elementsIds.homeTab);
            break;
        case "aboutButton":
            showTab(elementsIds.aboutTab);
            break;
        case "portfolioButton":
            showTab(elementsIds.portfolioTab);
            break;
        case "contactButton":
            showTab(elementsIds.contactTab);
            break;
        default:
            console.log("Switch statement couldn't find a condition");
    }
}

function showTab(tabId) {
    console.log(`making the ${tabId} visible...`);
    document.getElementById(tabId).classList.add("visible");
    console.log(`attempt to display ${tabId} complete`);
}