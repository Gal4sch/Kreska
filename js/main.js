const allNavItems = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.navbar-collapse');

allNavItems.forEach((item) =>
	item.addEventListener('click', () => {
		navList.classList.remove('show');
	})
);

const offersStageOneButton = document.querySelector('.offers-stage-one-button');
const offersStageTwoButton = document.querySelector('.offers-stage-two-button');
const offersStageThreeButton = document.querySelector(
	'.offers-stage-three-button'
);
const offersStageFourButton = document.querySelector(
	'.offers-stage-four-button'
);
const offersStageFiveButton = document.querySelector(
	'.offers-stage-five-button'
);
const offersStageSixButton = document.querySelector('.offers-stage-six-button');

const stageOne = document.querySelector('.stage-one');
const stageTwo = document.querySelector('.stage-two');
const stageThree = document.querySelector('.stage-three');
const stageFour = document.querySelector('.stage-four');
const stageFive = document.querySelector('.stage-five');
const stageSix = document.querySelector('.stage-six');
const stages = document.querySelector('.stages');

const footerYearMobile = document.querySelector('.footer__year-mobile');
const footerYearDesktop = document.querySelector('.footer__year-desktop');

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#msg');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');

const handleOffersStage = () => {
	stageOne.classList.remove('hide');
	stageTwo.classList.add('hide');
	stageThree.classList.add('hide');
	stageFour.classList.add('hide');
	stageFive.classList.add('hide');
	stageSix.classList.add('hide');
};
const handleOffersStageTwo = () => {
	stageOne.classList.add('hide');
	stageTwo.classList.remove('hide');
	stageThree.classList.add('hide');
	stageFour.classList.add('hide');
	stageFive.classList.add('hide');
	stageSix.classList.add('hide');
};
const handleOffersStageThree = () => {
	stageOne.classList.add('hide');
	stageTwo.classList.add('hide');
	stageThree.classList.remove('hide');
	stageFour.classList.add('hide');
	stageFive.classList.add('hide');
	stageSix.classList.add('hide');
};
const handleOffersStageFour = () => {
	stageOne.classList.add('hide');
	stageTwo.classList.add('hide');
	stageThree.classList.add('hide');
	stageFour.classList.remove('hide');
	stageFive.classList.add('hide');
	stageSix.classList.add('hide');
};
const handleOffersStageFive = () => {
	stageOne.classList.add('hide');
	stageTwo.classList.add('hide');
	stageThree.classList.add('hide');
	stageFour.classList.add('hide');
	stageFive.classList.remove('hide');
	stageSix.classList.add('hide');
};
const handleOffersStageSix = () => {
	stageOne.classList.add('hide');
	stageTwo.classList.add('hide');
	stageThree.classList.add('hide');
	stageFour.classList.add('hide');
	stageFive.classList.add('hide');
	stageSix.classList.remove('hide');
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
	if (!input.value) showError(username, 'Podaj nazwę użytkownika');
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

if (sendBtn) {
	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();

		checkForm([username, email, message]);
		checkLength(username, 3);
		validateEmail(email);
		checkMessage(message, 1);
		checkErrors();
	});
}

handleCurrentYear();
offersStageOneButton.addEventListener('click', handleOffersStage);
offersStageTwoButton.addEventListener('click', handleOffersStageTwo);
offersStageThreeButton.addEventListener('click', handleOffersStageThree);
offersStageFourButton.addEventListener('click', handleOffersStageFour);
offersStageFiveButton.addEventListener('click', handleOffersStageFive);
offersStageSixButton.addEventListener('click', handleOffersStageSix);
