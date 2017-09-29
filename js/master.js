// function for email info
function submitInfo() {
	var name = document.getElementById("nameinput");
    var email = document.getElementById("emailinput");
	(name.value && email.value) ? alert("Thank you!") : alert("Please fill in all fields");
	}

// Favorit planet question
function answerQuestion() {
			var favs = new Array(1);

				for(i=0;i<1;i++) {
				favs[i] = prompt("Please enter your favorite planet", " ");
				}
			document.write = alert("Your favorite planet is " + favs[0] );
			}

// planet weight js
function planetWeight() {
			var eWeight = new Array();
			var aPlanet = document.getElementById("planet").value;

				for(i=0;i<1;i++) {
				eWeight[i] = prompt("Please enter your weight",  " ") * 100;
				}

			document.write = alert("Your weight would be: " + (eWeight[0] * aPlanet) / 100 + "lbs.");
		}

//frequency space joke
function jokeSpace() {
    alert( "I think we need some Space!");
}

// create event listeners
function createEventListeners() {
  var emailInfo = document.getElementById("submit");
  if (emailInfo) {
    emailInfo.addEventListener("click", submitInfo, false);
  } else if (emailInfo) {
    emailInfo.attachEvent("onclick", submitInfo);
  }
  var favPlanet = document.getElementById("go");
  if (favPlanet) {
    favPlanet.addEventListener("click", answerQuestion, false);
  } else if (favPlanet) {
    favPlanet.attachEvent("onclick", answerQuestion);
  }
  var weight = document.getElementById("weightButton");
  if (weight) {
    weight.addEventListener("click", planetWeight, false);
  } else if (weight) {
    weight.attachEvent("onclick", planetWeight);
  }
  var joke = document.getElementById("spaceJoke");
  if (joke) {
    joke.addEventListener("click", jokeSpace, false)
  } else if (joke) {
    joke.attachEvent("onclick", jokeSpace);
  }
}

// add event listeners at page load
function pageSetUp() {
    createEventListeners()
}

// run setUpPage() function at page load
if (window.addEventListener) {
  window.addEventListener("load", pageSetUp, false);
}
