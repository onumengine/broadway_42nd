//jshint esversion: 6

//document.querySelectorAll(".tabContent").forEach((element) => element.classList.add("hidden"));

document.querySelector("#aboutButton").addEventListener("click", () => {
    document.querySelector("#aboutTab").classList.toggle("hidden");
});
