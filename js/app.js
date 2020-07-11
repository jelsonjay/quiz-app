function submitQuiz() {
	'use strict';

	let total = 6;
	let score = 0;

	// declare variable
	let q1 = document.forms['quizForm']['q1'].value;
	let q2 = document.forms['quizForm']['q2'].value;
	let q3 = document.forms['quizForm']['q3'].value;
	let q4 = document.forms['quizForm']['q4'].value;
	let q5 = document.forms['quizForm']['q5'].value;
	let q6 = document.forms['quizForm']['q6'].value;

	// show validations
	for (let i = 1; i <= total; i++) {
		if (eval('q' + i) === null || eval('q' + i) === '') {
			alert('You mised question!' + 1);
			return false;
		}
	}

	//Set Correct Answers
	let answers = ['a', 'a', 'd', 'b', 'd', 'c'];

	//Check the answers
	for (let i = 1; i <= total; i++) {
		if (eval('q' + i) === answers[i - 1]) {
			score++;
		}
	}

	// show results
	let results = document.querySelector('#results');
	results.style.color = 'green';
	results.innerHTML =
		'<h3>Result: you score: <span>' +
		score +
		'</span> out of <span>' +
		total +
		'</span></h3>';
	alert('Result you score: ' + score + ' out of ' + total);

	return false;
}
