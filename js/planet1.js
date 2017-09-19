function answerQuestion() {
			var favs = new Array(1);

				for(i=0;i<1;i++) {
				favs[i] = prompt("Please enter your favorite planet", " ");
				}
			document.write = alert("Your favorite planet is " + favs[0] );
			}
			document.getElementById("go").addEventListener("click", answerQuestion, false);