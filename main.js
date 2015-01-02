// Attempting to do the same thing as the the Javascript
$(document).ready(function(){
	var count = 0;
	var inputArray = []; 

	$("#addButton").click(function(){
		/*
		 * Data structure stuff
		 */
		count++;
		console.log("clicked add");

		var input = {
			number : count,
			label: "<input type='text'>",
			micDI: "<input type='text'>" 
		};	

		inputArray.push(input);
		console.log(inputArray);
		/*
		 * Display stuff
		 */
		$("#inputList").append("<tr>"+"<td>"+input.number+"</td>"+"<td>"+input.label+"</td>"+"<td>"+input.micDI+"</td>"+"</tr>");

		/*add input number
		var $newInput = $("<tr>"+"<td>"+count+"</td>");
		$("#inputList").append($newInput);
		*/

		/*add input text box for label
		var $newInputLabel = $("<tr>"+"<td>"+"<input type='text'>"+"</td>"+"</tr>");
		$("#inputList").append($newInputLabel); 
		*/
		
	});

	$("#removeButton").click(function(){
		if (count>0){
			count--;
			console.log("clicked remove");
			inputArray.pop();
			$("#inputList tr").last().remove();
			console.log(inputArray);
		} else {
			console.log("cannot remove any more inputs");
			console.log(inputArray);
			return false;
		}
	});

});