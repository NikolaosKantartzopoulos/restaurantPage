import "./style.css";
import { renderHomeTab } from "./home";
import { renderMenuTab } from "./menu";
import { renderContactTab } from "./contact";
import helperFunctions from "./helperFunctions";
import bgImage from "./bgImage.jpg";

/* #region  setup */
/* #region body and mainContent setup*/
document.body.style = `background-image: url(${bgImage}); background-repeat: no-repeat; background-attachment: fixed; background-position: center;`;
document.body.classList.add(
	"grid",
	"grid-col-1",
	"my-auto",
	"min-w-full",
	"h-full"
);
var mainContent = document.getElementById("content");
mainContent.classList.add(
	"grid",
	"grid-col-1",
	"gap-12",
	"items-start",
	"min-w-full",
	"h-5/6"
);
/* #endregion */
/* #region navBar setup */
var navBar = document.createElement("div");
navBar.setAttribute("id", "navBarID");
var homeTab = document.createElement("div");
homeTab.setAttribute("id", "homeTabID");
var menuTab = document.createElement("div");
menuTab.setAttribute("id", "menuTabID");
var contactTab = document.createElement("div");
contactTab.setAttribute("id", "contactTabID");
homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";
navBar.appendChild(homeTab);
navBar.appendChild(menuTab);
navBar.appendChild(contactTab);
navBar.classList.add(
	"bg-amber-100",
	"w-30",
	"h-12",
	"flex",
	"flex-row",
	"justify-around",
	"items-center"
);
mainContent.appendChild(navBar);
var allTabs = Array.from(document.querySelectorAll("#navBarID > div"));
allTabs.forEach((tab) => {
	tab.classList.add(
		"bg-amber-500",
		"rounded-xl",
		"h-12",
		"w-35",
		"grid",
		"justify-center",
		"items-center",
		"cursor-pointer",
		"hover:bg-amber-500",
		"m-auto",
		"px-8"
	);
});
/* #endregion */
let mainBoard = document.createElement("div");
mainBoard.classList.add("h-full", "w-5/6", "bg-amber-200", "m-auto");
mainBoard.setAttribute("id", "mainBoard");
mainContent.appendChild(mainBoard);

/* #endregion */
homeTab.onclick = renderHomeTab;
menuTab.onclick = renderMenuTab;
contactTab.onclick = renderContactTab;

renderHomeTab();
