//accessing the brain.js library
const brain = require('brain.js');

//creating a new blank neural network
const network = new brain.NeuralNetwork();

/*
//creating some training data- normal datasets contain thousands
network.train([
	{ input: [0, 0, 0], output: [0]},
	{ input: [0, 0, 1], output: [0]},
	{ input: [0, 1, 1], output: [0]},
	{ input: [1, 0, 1], output: [1]},
	{ input: [1, 1, 1], output: [1]}
]);

//we want to run an input into our neural network and save the result to output
const output = network.run([1, 0, 0]);

//This prints the probabilty that there is a 90% chance the output should be 1
console.log(`Prob:  ${output}`);
*/

/*
	If we changed .run([0, 0, 0]), the probability will flip to less than 0.06%
	that the output will be 1
*/

//Adding more context to the above example- using teams 1 - 4
/*
	In the following example, we are using teams playing against each other.
	In the first example, if 1 beats 2, we get an output of 0. If 2 beats 1,
	we get an output of 1.
*/

/*
network.train([
	{ input: [1, 2], output: [1]},	// Team 2 wins
	{ input: [1, 3], output: [1]},	// Team 3 wins
	{ input: [2, 3], output: [0]},	// Team 2 wins
	{ input: [2, 4], output: [1]},	// Team 4 wins
]);

//Team 1 against team 4 returning the probability of team 4 winning.
//It should be highish because team 1 lost two games and team 4 won one.
const output = network.run([1, 4]);

//returns a 99% chance that team 4 will win
console.log(output);
*/

network.train([
	{ input: [1, 2], output: [1]},	// Team 2 wins
	{ input: [1, 3], output: [1]},	// Team 3 wins
	{ input: [2, 3], output: [0]},	// Team 2 wins
	{ input: [2, 4], output: [1]},	// Team 4 wins

	//adding more games will influence the output
	{ input: [1, 2], output: [0]},	// Team 1 wins
	{ input: [1, 3], output: [0]},	// Team 1 wins
	{ input: [3, 4], output: [0]}	// Team 4 loses
]);

//Team 1 against team 4 returning the probability of team 4 winning.
//It should be equal because team 1 lost two but won two and 
//team 4 lost one and won one.
const output = network.run([1, 4]);

//returns a 40% chance that team 4 will win
console.log(output);

