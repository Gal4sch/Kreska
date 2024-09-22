const allNavItems = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.navbar-collapse');
const url = 'https://kreskawnetrza.pl/mail.php';

allNavItems.forEach((item) =>
	item.addEventListener('click', () => {
		navList.classList.remove('show');
	})
);

const stageOneButton = document.querySelector('.stages-stage-one-button');
const stageTwoButton = document.querySelector('.stages-stage-two-button');
const stageThreeButton = document.querySelector('.stages-stage-three-button');
const stageFourButton = document.querySelector('.stages-stage-four-button');
const stageFiveButton = document.querySelector('.stages-stage-five-button');
const stageSixButton = document.querySelector('.stages-stage-six-button');
const stageSevenButton = document.querySelector('.stages-stage-seven-button');
const stageEightButton = document.querySelector('.stages-stage-eight-button');

const stageOne = document.querySelector('.stage-one');
const stageTwo = document.querySelector('.stage-two');
const stageThree = document.querySelector('.stage-three');
const stageFour = document.querySelector('.stage-four');
const stageFive = document.querySelector('.stage-five');
const stageSix = document.querySelector('.stage-six');
const stageSeven = document.querySelector('.stage-seven');
const stageEight = document.querySelector('.stage-eight');

const footerYearMobile = document.querySelector('.footer__year-mobile');
const footerYearDesktop = document.querySelector('.footer__year-desktop');

const username = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const privacy = document.querySelector('#privacy');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');

const handleStageOne = () => {
	stageOne.classList.toggle('hide');
	stageOne.classList.toggle('active');
};
const handleStageTwo = () => {
	stageTwo.classList.toggle('hide');
};
const handleStageThree = () => {
	stageThree.classList.toggle('hide');
};
const handleStageFour = () => {
	stageFour.classList.toggle('hide');
};
const handleStageFive = () => {
	stageFive.classList.toggle('hide');
};
const handleStageSix = () => {
	stageSix.classList.toggle('hide');
};
const handleStageSeven = () => {
	stageSeven.classList.toggle('hide');
};
const handleStageEight = () => {
	stageEight.classList.toggle('hide');
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYearMobile.innerText = year;
	footerYearDesktop.innerText = year;
};

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input) => {
	if (!input.value) showError(username, 'Podaj swoje imię');
};

const validateEmail = (email) => {
	const regx =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	if (regx.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'Adres e-mail jest niepoprawny');
	}
};
const checkMessage = (input, min) => {
	if (input.value.length < min) showError(message, 'Wprowadź treść wiadomości');
};

const verifacateCheckbox = (input) => {
	if (!input.checked) showError(privacy, 'Zaakceptuj politykę prywatności');
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box');
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add('show-popup');
	}
};

async function makeRequest(data) {
	const rest = await fetch(url, {
		method: post,
		body: data,
	});
	if (rest.ok) {
		return rest.json();
	}
	return Promise.reject('${res.status: ${res.statusText}');
}

function showSubmitError() {
	formMessage.innerHTML = 'Wysłanie wiadomości się nie powiodło';
}

function showSubmitSuccess() {
	const div = document.createElement('div');
	div.classList.add('contact-form-popup');
	form.after(div);
	div.innerHTML = `
		<strong>Wiadomość została wysłana</strong>
		<span>Dziękujemy za kontakt. Postaramy się odpowiedzieć jak najszybciej
	`;
	form.remove();
}

function afterSubmit(res) {
	if (res.errors) {
		const selectors = res.errors.map((el) => `[name ="${el}"]`);
		const fieldsWithErrors = form.querySelectorAll(selectors.join(','));
		for (const field of fieldsWithErrors) {
			field.classList.add('is-invalid');
		}
	} else {
		if (res.status === 'success') {
			showSubmitSuccess();
		}
		if (res.status === 'error') {
			showSubmitError(res.status);
		}
	}
}

async function submitForm() {
	let formErrors = checkErrors();

	if (!formErrors) {
		const formData = new FormData(form);
		send.disabled = true;
		submitForm.classList.add('loading');

		grecaptcha.enterprise.ready(function () {
			grecaptcha.enterprise
				.execute('6LclkUQqAAAAALs3C9MAv-n1sweZTd2YRcIHTbcm', {
					action: 'submit',
				})
				.then(async (token) => {
					formData.append('token', token);
					try {
						const response = await makeRequest(formData);
						afterSubmit(response);
					} catch (err) {
						showSubmitError();
					}
					console.log(token);
					document.getElementById('g-recaptcha-response').value = token;
					submit.disabled = false;
					submit.classList.remove('loading');
					// Add your logic to submit to your backend server here.
				});
		});
	}
}

if (sendBtn) {
	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();

		checkForm([username, email, message, privacy]);
		checkLength(username, 3);
		validateEmail(email);
		checkMessage(message, 1);
		verifacateCheckbox(privacy);
		checkErrors();
		submitForm();
	});
}

handleCurrentYear();
stageOneButton.addEventListener('click', handleStageOne);
stageTwoButton.addEventListener('click', handleStageTwo);
stageThreeButton.addEventListener('click', handleStageThree);
stageFourButton.addEventListener('click', handleStageFour);
stageFiveButton.addEventListener('click', handleStageFive);
stageSixButton.addEventListener('click', handleStageSix);
stageSevenButton.addEventListener('click', handleStageSeven);
stageEightButton.addEventListener('click', handleStageEight);
