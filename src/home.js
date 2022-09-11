import * as helperFunctions from "./helperFunctions";
import pizzaMilano from "./pizzaMilano.jpg";

export let renderHomeTab = function () {
	helperFunctions.resetMainBoard();
	mainBoard.classList.add(
		"flex",
		"flex-col",
		"items-center",
		"justify-around",
		"p-2"
	);
	document.querySelector("#homeTabID").classList.add("bg-amber-500");
	let pizzaHeader = document.createElement("h1");
	pizzaHeader.textContent = "The best pizza in town!";
	pizzaHeader.classList.add("text-center", "py-12");
	let samplePizza = new Image();
	samplePizza.src = pizzaMilano;
	samplePizza.classList.add("m-auto");
	mainBoard.appendChild(pizzaHeader);
	mainBoard.appendChild(samplePizza);
};
