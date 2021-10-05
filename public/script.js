const btnSign = +document.getElementById('btn');
const firstName = document.getElementById('firstname');
const thirdWindow = document.getElementById('third-window');

btnSign.addEventListener('click', (event) => {
	const firstNameValue = firstName.value.trim();

	if (firstNameValue === '') {
		setErrorFor(firstName, 'Value cannot be blank');
		event.preventdefault()
	} else if (!(isFirstName(firstNameValue))) {
		setErrorFor(firstName, 'Value is not valid')
		event.preventdefault()
	}
	else {
		setSuccessFor(firstName);

	}


	// checkInputs();

	// thirdWindow.classList.remove('block');
})

function checkInputs() {
	const firstNameValue = firstName.value.trim();

	if (firstNameValue === '') {
		setErrorFor(firstName, 'Value cannot be blank');
		return;
	} else if (!(isFirstName(firstNameValue))) {
		setErrorFor(firstName, 'Value is not valid')
		return;
	}
	else {
		setSuccessFor(firstName);

	}
}

function setErrorFor(input, message) {
	const formWrapper = input.parentElement;
	const small = formWrapper.querySelector('small');

	small.innerText = message;
	formWrapper.className = 'form-wrapper error';
}

function setSuccessFor(input) {
	const formWrapper = input.parentElement;
	formWrapper.className = 'form-wrapper success';
}

function isFirstName(firstNameExp) {
	return /^[0-9]{1,20}$/.test(firstNameExp);
}