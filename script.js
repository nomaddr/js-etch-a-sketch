const grid_size = 16;
let grid = [];
let container = document.querySelector(".container");

for (let i = 0; i < grid_size; i++) {
	grid[i] = document.createElement("div");
	grid[i].classList.add("grid-cell");
	container.appendChild(grid[i]);
}
