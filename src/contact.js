import * as helperFunctions from "./helperFunctions";
export let renderContactTab = function () {
	helperFunctions.resetMainBoard();
	mainBoard.classList.add(
		"text-lg",
		"grid",
		"grid-cols-2",
		"items-center",
		"justify-around"
	);
	document.querySelector("#contactTabID").classList.add("bg-amber-500");
	let left_div = document.createElement("div");
	left_div.classList.add("col-start-1", "pl-8");
	let left_div_cost = document.createElement("div");
	left_div_cost.classList.add("col-start-2");
	helperFunctions.create3RowMenuTab(left_div, "Address", "tel.", "email");
	helperFunctions.create3RowMenuTab(
		left_div_cost,
		"Avenue ABC",
		"(123) 456 7890",
		"random@mail.com"
	);
	mainBoard.appendChild(left_div);
	mainBoard.appendChild(left_div_cost);
};
