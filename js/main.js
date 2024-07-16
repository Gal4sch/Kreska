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
const footerYear = document.querySelector('.footer__year');

const handleOffersStageOne = () => {
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
	footerYear.innerText = year;
};

handleCurrentYear();
offersStageOneButton.addEventListener('click', handleOffersStageOne);
offersStageTwoButton.addEventListener('click', handleOffersStageTwo);
offersStageThreeButton.addEventListener('click', handleOffersStageThree);
offersStageFourButton.addEventListener('click', handleOffersStageFour);
offersStageFiveButton.addEventListener('click', handleOffersStageFive);
offersStageSixButton.addEventListener('click', handleOffersStageSix);
