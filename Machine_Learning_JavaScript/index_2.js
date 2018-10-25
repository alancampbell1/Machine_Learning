/*
	Long Short term memory, aka working with Strings.
	This next section will take a dataset and train the neural network to
	recognise a piece of text is related to hardware or software.
	The data will come from a file called data.json

	 The goal is using the sentences provided here, the PC will use existing
	 examples from the json file to figure out if it falls under the category
	 or hardware or software
*/

//accessing the brain.js library
const brain = require('brain.js');

//bringing in the JSON data
const data = require('./data.json');

//creating a recurrent neural network with long/short term memory to deal with Strings
const network = new brain.recurrent.LSTM();

//We want the text to be the input and category to the output
const trainingData = data.map(item => ({
	input: item.text,
	output: item.category
}));

//runs 2000 times - the more iterations the more accurate but longer to process
network.train(trainingData, {
	//config option of 2000
	iterations: 2000
});

//we can run a piece of text against out neural network
const output = network.run('I fixed the power supply');
//The PC should learn the this sentence falls under hardware

console.log(`Category: ${output}`);






