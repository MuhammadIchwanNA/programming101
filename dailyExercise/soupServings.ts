
// SOLUTIONS leetcode.com/problems/soup-servings: 

function soupServings(n: number): number {

    if (n > 4200) {
        return 1; // this is a contion to avoid overflow in the simulation
    }

    const memo: Map<string, number> = new Map(); // memorization to store results using a map
                                                 // and to avoid recomputation


    // inside the simulation, we use function to simulate the servings
    
    function servingSimulation(a: number, b: number): number {
        const key = `${a},${b}`; // create a unique key for the current state
        
        if (memo.has(key)) return memo.get(key)!; // if already calculated, return the stored result
        if (a <= 0 && b <= 0) return 0.5; // both soups are empty
        if (a <= 0) return 1; // soup A is empty, soup B is available
        if (b <= 0) return 0; // soup B is empty, soup A is available

        // calculate the probabilities of each serving option
        const probabilities = (
            servingSimulation(a - 100, b) +
            servingSimulation(a - 75, b - 25) +
            servingSimulation(a - 50, b - 50) +
            servingSimulation(a -25, b - 75) / 4 );

            memo.set(key, probabilities); // store the result in the memoization map
            return probabilities; // return the calculated probability
    }  
    return servingSimulation(n, n); // start the simulation with both soups having n servings
};

console.log(soupServings(150)); // Example usage
console.log(soupServings(5000)); // Example usage to test the overflow condition