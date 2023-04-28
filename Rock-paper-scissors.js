$(document).ready(function() {

	$(".btn").click(function() {
	  var userChoice = $(this).attr("id");

	  var computerChoice =  Math.floor(Math.random() * 3 );
	  if (computerChoice === 0) {
		computerChoice = "rock";
	  } else if (computerChoice === 1) {
		computerChoice = "paper";
	  } else {
		computerChoice = "scissors";
	  }

	  if (userChoice == computerChoice) {
		$("#result").text("Tie!");
	  }

		if((userChoice=="rock") && (computerChoice=="scissors")){
			$("#result").text("You won!");
		}
		if((userChoice=="rock") && (computerChoice=="paper")){
			$("#result").text("Computer won!");
		}
		if((userChoice=="scissors") && (computerChoice=="rock")){
			$("#result").text("Computer won !");
		}
		if((userChoice=="scissors") && (computerChoice=="paper")){
			$("#result").text("You won !");
		}
		if((userChoice=="paper") && (computerChoice=="rock")){
			$("#result").text(" You won !");
		}
		if((userChoice=="paper") && (computerChoice=="scissors")){
			$("#result").text("Computer won !");
		}
	  });		
});