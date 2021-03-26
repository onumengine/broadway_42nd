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
    collectionsButton: "collectionsButton",
    contactButton: "contactButton",
    homeButton: "homeButton",
    aboutTab: "aboutTab",
    collectionsTab: "collectionsTab",
    contactTab: "contactTab",
    homeTab: "homeTab",
};

const tabManager = {
    navbarButtons: document.querySelectorAll("#appbarActions li"),
    activateTabButton: function(button){
        tabManager.navbarButtons.forEach((button) => {
            button.style.backgroundColor = "black";
        });
        button.style.backgroundColor = "#b8860b";
    },
    addListenersToTabButtons: function() {
        tabManager.navbarButtons.forEach((button) => {
            button.addEventListener("click", tabManager.showTabById);
        });
    },
    hideAllTabs: function() {
        var allTabsInPage = document.querySelectorAll(".tabContent");
        allTabsInPage.forEach((tab) => {
            tab.classList.remove("visible");
            tab.classList.add("hidden");
        });
    },
    showTab: function(tabId) {
        this.hideAllTabs();
        document.getElementById(tabId).classList.add("visible");
        if (outerWidth <= 592 && document.querySelector("#appbarActions").style.width !== "0") {
            document.querySelector("#appbarActions").style.width = "0";
        }
    },
    showTabById: function(event) {
        switch(event.target.id) {
            case elementsIds.homeButton:
                tabManager.showTab(elementsIds.homeTab);
                break;
            case elementsIds.aboutButton:
                tabManager.showTab(elementsIds.aboutTab);
                break;
            case elementsIds.collectionsButton:
                tabManager.showTab(elementsIds.collectionsTab);
                break;
            case elementsIds.contactButton:
                tabManager.showTab(elementsIds.contactTab);
                break;
            default:
                console.log("Switch statement couldn't find a condition");
        }
    }
};

var form = {
    textArea: document.querySelector("#formTextArea"),
    decideToResizeForm: function() {
        if (outerWidth <= 592) {
            form.resizeFormTextArea();
        }
    },
    resizeFormTextArea: function() {
        form.textArea.setAttribute("cols", "103");
        form.textArea.setAttribute("rows", "50");
    }
};



function main() {

    tabManager.addListenersToTabButtons();

    tabManager.showTab(elementsIds.homeTab);

    form.decideToResizeForm();
}

window.onload = main;
window.onresize = form.decideToResizeForm;