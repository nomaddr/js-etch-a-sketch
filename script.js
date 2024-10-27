const grid_size = 16;
let grid = [];
let container = document.querySelector(".container");

function mouseHover() {

}

// Create Grid using Flexbox
for (let i = 0; i < grid_size*grid_size; i++) {
	grid[i] = document.createElement("div");
	//grid[i].classList.add("grid-cell");
	grid[i].classList.add("square");
	grid[i].addEventListener("mouseover", () => {
		grid[i].classList.add("active");
	 });
	grid[i].addEventListener("mouseout", () => {
		grid[i].classList.remove("active");
	 });
	container.appendChild(grid[i]);

}

