import "./style.css";

console.log("Test");
//  DOM
var mainContent = document.getElementById("content");

var navBar = document.createElement("div");
var tab1 = document.createElement("div");
var tab2 = document.createElement("div");
var tab3 = document.createElement("div");
tab1.setAttribute("id", "tab1");
tab2.setAttribute("id", "tab2");
tab3.setAttribute("id", "tab3");
navBar.classList.add(
	"bg-amber-100",
	"border-8",
	"border-black",
	"w-30",
	"h-10",
	"flex",
	"flex-row",
	"justify-around",
	"items-center"
);
mainContent.appendChild(navBar);

var allTabs = [tab1, tab2, tab3];
allTabs.forEach((tab) => {
	tab.classList.add("bg-amber-600");
});

tab1.textContent = "First";
tab2.textContent = "Second";
tab3.textContent = "Third";
navBar.appendChild(tab1);
navBar.appendChild(tab2);
navBar.appendChild(tab3);
