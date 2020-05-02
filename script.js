var squares = document.querySelectorAll(".square");
var span = document.getElementById("rgb-placeholder");
var clickMessage = document.getElementById("click-message");

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
			clickMessage.textContent = "Correct!";
			// Change all colors to the right color
			for (let j = 0; j < squares.length; j++){
				squares[j].style.backgroundColor = toSelectColor;
			}
			
		}
		else { // User selected the wrong color
			clickMessage.textContent = "Try again!";
			this.style.backgroundColor = "#232323";
		}
	}

// Assigns random colors and event Listener to each squares
for (let i = 0; i < squares.length; i++){
	// Assign random color
	var color = getRandomColor();
	squares[i].style.backgroundColor = color;
	
}

// Choose a random color that user has to click to win
// Only select after each squares are filled with random color
// Else the color selected will be default "purple" color
var toSelectColor = squares[getRandomNumber(5)].style.backgroundColor;
// Show the message on title about which color the user should select
span.textContent = toSelectColor.slice(0, 3).toUpperCase() + toSelectColor.slice(3, toSelectColor.length);

//Assign Event listeners to each squares
// Only assign after each squares are filled with random color
for (let i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", gameLogic.bind(squares[i]));	
}
	