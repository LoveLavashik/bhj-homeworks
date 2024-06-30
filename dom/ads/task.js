const rotatorcases = Array.from(document.querySelectorAll('.rotator__case'));

function startRotator() {
	let rotatorcaseactive = document.querySelector('.rotator__case_active');
	let nextrotatorcase = rotatorcaseactive.nextElementSibling;

	let activecaseindex = rotatorcases.findIndex((item) => item.classList.contains('rotator__case_active'));

	rotatorcaseactive.classList.remove('rotator__case_active');
	if (activecaseindex === rotatorcases.length - 1) {
		rotatorcases[0].classList.add('rotator__case_active');
	} else {
		nextrotatorcase.classList.add('rotator__case_active');
	}
}

setInterval(startRotator, 1000);