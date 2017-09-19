function planetWeight() {
			var eWeight = new Array();
			var aPlanet = document.getElementById("planet").value;

				for(i=0;i<1;i++) {
				eWeight[i] = prompt("Please enter your weight",  " ") * 100;
				}

			document.write = alert("Your weight would be: " + (eWeight[0] * aPlanet) / 100 + "lbs.");
		}
		document.getElementById("weightButton").addEventListener("click", planetWeight, false);