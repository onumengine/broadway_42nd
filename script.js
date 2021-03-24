//jshint esversion: 6

const tabIds = {
    homeTab: "homeTab",
    aboutTab: "aboutTab",
    portfolioTab: "portfolioTab",
    contactTab: "contactTab",
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
            showTab("homeTab");
            break;
        case "aboutButton":
            showTab("aboutTab");
    }
}

function showTab(tabId) {
    console.log(`making the ${tabId} visible...`);
    document.getElementById(tabId).classList.add("visible");
    console.log(`attempt to display ${tabId} complete`);
}