/* 
* Script that handles interactive elements of input list
* adds and removes input
*/

// Global variables
var inputNumber = 1;	
var inputTable = document.getElementById('inputList');

// Input object constructor
function input (number, label, mic) {
	this.number = number;
	this.label = label;
	this.mic = mic;
}

// Add a new input
function addInput () {
	// create a new input object with the input number, an empty label, and an empty mic/line
	var newInput = new input(inputNumber, "", "");
	
	// create a new <tr> element in the inputList table
	var row = inputTable.insertRow(inputNumber);
	
	// create a new <td> element for the channel number
	var channel = row.insertCell(0);
	// assigns channel number to that <td>
	channel.innerHTML = inputNumber;
	
	// create a new <td> element for the label
	var label = row.insertCell(1);
	// assigns a label to that <td>
	label.innerHTML = newInput.label; 

	// create a new <td> element for the mic/line
	var micLine = row.insertCell(2);
	// assigns a mic/line to that <td>
	micLine.innerHTML = newInput.mic;

	//increment inputNumber by 1
	inputNumber++;
}

