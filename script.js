let grid_size = 16;
//let grid = [];
const container = document.querySelector(".container");
const button = document.querySelector("#reset");

button.addEventListener("click", () => {
	let size = +prompt("Set Grid Size to: ", "16");
	if (0 < size && size < 101 && !isNaN(size)) {
		console.log("input is valid");
		console.log(size);
		// Remove existing Grid
		while (container.firstChild) {
			container.removeChild(container.firstChild);	
		}
		createGrid(size);
	} else {
		alert("Input is not Valid! Must be a Number 1 - 100")
	}

});

function createGrid(size) {
	// Create Grid using Flexbox
	const grid = [];
	const percentage = calcBasisPercentage(size);
	for (let i = 0; i < size * size; i++) {
		grid[i] = document.createElement("div");
		//grid[i].classList.add("grid-cell");
		grid[i].classList.add("square");
		grid[i].style.flex = `1 0 ${percentage}%`;
		grid[i].addEventListener("mouseover", () => {
			grid[i].classList.add("active");
		});
		/* 
		grid[i].addEventListener("mouseout", () => {
			grid[i].classList.remove("active");
		});
		*/
		container.appendChild(grid[i]);
	}
}

function calcBasisPercentage(n) {
	return Math.round((100 / n) * 100) / 100;
}