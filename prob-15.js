// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner. How many such routes are there through a 20×20 grid?

const size = 20;
let routes = 1;
for (let i = 1; i <= size; i++) {
    routes = routes * (size + i) / i;
}

console.log(routes)

// IT'S A COMBINATORIAL RELATIONSHIP
// 4 CHOOSE 2 IS 6
// 20 CHOOSE 2 IS...