import * as helperFunctions from "./helperFunctions";

export let renderMenuTab = function () {
	helperFunctions.resetMainBoard();
	mainBoard.classList.add(
		"grid",
		"grid-cols-2",
		"sm:grid-cols-4",
		"items-center",
		"justify-around"
	);
	let left_div = document.createElement("div");
	left_div.classList.add("col-start-1", "pl-8");
	let left_div_cost = document.createElement("div");
	left_div_cost.classList.add(
		"col-start-2",
		"grid",
		"justify-center",
		"items-center"
	);
	let right_div = document.createElement("div");
	right_div.classList.add("col-start-1", "sm:col-start-3", "pl-8");
	let right_div_cost = document.createElement("div");
	right_div_cost.classList.add(
		"col-start-2",
		"sm:col-start-4",
		"grid",
		"justify-center",
		"items-center"
	);
	document.querySelector("#menuTabID").classList.add("bg-amber-500");
	helperFunctions.create3RowMenuTab(
		left_div,
		"Marinara",
		"Bolognese",
		"Special"
	);
	helperFunctions.create3RowMenuTab(left_div_cost, "10$", "10$", "12$");
	helperFunctions.create3RowMenuTab(right_div, "Carbonara", "Salad", "Beer");
	helperFunctions.create3RowMenuTab(right_div_cost, "9$", "8$", "3$");

	mainBoard.appendChild(left_div);
	mainBoard.appendChild(left_div_cost);
	mainBoard.appendChild(right_div);
	mainBoard.appendChild(right_div_cost);
};
