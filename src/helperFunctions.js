export function resetMainBoard() {
	document.querySelector("#mainBoard").innerHTML = "";
	mainBoard.removeAttribute("class");
	mainBoard.classList.add("h-[66vh]", "w-5/6", "bg-amber-200", "m-auto");
	document.querySelector("#homeTabID").classList.remove("bg-amber-500");
	document.querySelector("#menuTabID").classList.remove("bg-amber-500");
	document.querySelector("#contactTabID").classList.remove("bg-amber-500");
}

export function create3RowMenuTab(appendToNode, a, b, c) {
	for (let i = 0; i < 3; i++) {
		let temp = document.createElement("div");
		temp.classList.add("text-lg");
		switch (i) {
			case 0:
				temp.textContent = a;
				break;
			case 1:
				temp.textContent = b;
				break;
			case 2:
				temp.textContent = c;
				break;
		}
		appendToNode.appendChild(temp);
	}
}
