function submitAnswers() {
	let total = 6;
	let score = 0;

	// Get user input
	let q1 = document.forms['quizForm']['q1'].value;
	let q2 = document.forms['quizForm']['q2'].value;
	let q3 = document.forms['quizForm']['q3'].value;
	let q4 = document.forms['quizForm']['q4'].value;
	let q5 = document.forms['quizForm']['q5'].value;
	let q6 = document.forms['quizForm']['q6'].value;

	// show validations
	for (let i = 1; i <= total; i++) {
		if (eval('q' + i) === null || eval('q' + i) === '') {
			alert('Please answer all questions!');
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
	let results = document.getElementById('results');
	results.style.color = 'green';
	results.innerHTML =
		'<h3> You scored <span>' +
		score +
		'</span> out of <span>' +
		total +
		'</span></h3>';
	alert('You scored ' + score + ' out of ' + total);

	return false;
}
