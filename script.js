/** The GREAT RGB COLOR GAME
  * @author Roshan Poudel <roshan.poudel@stonybrook.edu>
  * made while learning JS from Colt Steele's Web. Dev. course on Udemy
  */



var squares = document.querySelectorAll(".square");
var span = document.getElementById("rgb-placeholder");
var clickMessage = document.getElementById("click-message");
var titlebar =  document.getElementById("title");
var button = document.querySelector("button");
randomColors(6); // Initiate the game with 6 random colors
// Choose a random color that user has to click to win
// Only select after each squares are filled with random color
// Else the color selected will be default "purple" color
var toSelectColor = selectColor(6);
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
addEventListeners(); // Add Event Listeners to each squares

// Returns a number between 0 & n, inclusive
function getRandomNumber(n){
	return Math.floor(Math.random()*(n+1))
}


// Returns a random rgb color string: "rgb(x, x, x)"
// where x is an integer between 0 & 255, inclusive
function getRandomColor(){
	let a = getRandomNumber(255);
	let b = getRandomNumber(255);
	let c = getRandomNumber(255);
	return "rgb(" + a + ", " + b + ", " + c + ")";
}


// Handles event by changing square color and displaying message
function gameLogic (square){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor == toSelectColor){ // User selected the right color
			clickMessage.textContent = "Good Job!";
			// Change all colors to the right color
			for (let j = 0; j < squares.length; j++){
				squares[j].style.backgroundColor = toSelectColor;
			}
			// change the title background to same color
			titlebar.style.backgroundColor = toSelectColor;
			// Change the button text to play again
			button.textContent = "Play Again"
			
		}
		else { // User selected the wrong color
			clickMessage.textContent = "Try again!";
			this.style.backgroundColor = "#232323";
			button.textContent = "New Colors";
		}
	
}

// Assigns random colors to each squares
function randomColors(n){
	for (let i = 0; i < n; i++){
		// Assign random color
		var color = getRandomColor();
		squares[i].style.backgroundColor = color;
		
	}
}


// Assigns event Listeners to each squares
function addEventListeners(){
	// Show the message on title about which color the user should select
	span.textContent = toSelectColor.slice(0, 3).toUpperCase() + toSelectColor.slice(3, toSelectColor.length);

	//Assign Event listeners to each squares
	// Only assign after each squares are filled with random color
	for (let i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", gameLogic.bind(squares[i]));	
	}


	// Event handling for play again or New Colors
	button.addEventListener("click", buttonHandler);

	// Function to handle button click events; Play Again or New Color
	function buttonHandler(){
		if (easy.classList == "blueButton"){
			reset(3);	
		}
		else {
			reset(6);
		}

	}

	// Event Handling for Hard Button
	hard.addEventListener("click", function() {
		reset(6);
		hard.classList.add("blueButton");
		easy.classList.remove("blueButton");
		for (let i = 3; i < squares.length; i++){
			squares[i].style.display = "block";
		}
	});

	// Event Handling for Easy Button
	easy.addEventListener("click", function() {
		reset(3);
		easy.classList.add("blueButton");
		hard.classList.remove("blueButton");
		for (let i = 3; i < squares.length; i++){
			squares[i].style.display = "none";
		}

	});	
}

// Returns a new color for the user to select
function selectColor(n){
	return squares[getRandomNumber(n-1)].style.backgroundColor;
}

// Resets the game with n colors
function reset(n){
	// Load new colors to the squares
	randomColors(n);
	// Remove the title bar color 
	titlebar.style.backgroundColor = "steelblue";
	// Remove the try again text
	clickMessage.textContent = "";
	toSelectColor = selectColor(n);
	// Change selected color message
	span.textContent = toSelectColor.slice(0, 3).toUpperCase() + toSelectColor.slice(3, toSelectColor.length);

}

