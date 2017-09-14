

var Crystals ={
	types: ["red", "green", "orange", "blue"]
}

var score = 0;
var goalNumber = Math.floor(Math.random() * 120 + 1);
var win = 0;
var lost = 0;

$(".goalNumber").html("<h2>" + goalNumber + "</h2>");
assignedValue();

function resetGoal(){
	goalNumber = Math.floor(Math.random() * 120 + 20);
	$(".goalNumber").html("<h2>" + goalNumber + "</h2>");
}

function assignedValue () {

	for(var i=1;i<5;i++){

		var crystalValue = Math.floor(Math. random() * 12 +1);
		$("#c" + i).attr("data-value" , crystalValue);

	}
}

function reset() {
	score = 0;
	assignedValue();
	resetGoal();
	$(".score").html("<h2>" + score + "</h2>");


}

$(".crystalContainer").on("click" , ".crystals" , function(){

	score += parseInt($(this).attr("data-value"));
	$(".score").html("<h2>" + score + "</h2>");
	if (score>goalNumber) {
		lost ++;
		$(".lost").text("Lost : " + lost);
		reset();
	} else if (score === goalNumber) {
		win++;
		$(".win").text("Wins : " + win);
		reset();

	} 

	console.log($(this).attr("data-value"));
})


