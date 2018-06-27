var sliderImage1 			= new Image(1045, 881);
		sliderImage1.src 	= 'img/slider-img/slider-1.png';
var sliderImage2			= new Image(1045, 881);
		sliderImage2.src 	=	'img/slider-img/slider-2.png';
var sliderImage3			= new Image(1045, 881);
		sliderImage3.src 	= 'img/slider-img/slider-3.png';

var sliderPagButtons 	= document.querySelectorAll('.slider-pagination button');
var sliders 					=	document.querySelectorAll('.slider-item');
var body 							= document.querySelector('body');
var paginationButtons = document.querySelectorAll('.pagination a');
var pagPrevBtn 				= document.querySelector('.pag-prev-btn');
var pagNextBtn 				= document.querySelector('.pag-next-btn');



for (let i = 0; i < sliderPagButtons.length; i++) {

	sliderPagButtons[i].addEventListener('click', function() {
		toggleSlider(i);
	});
}

function toggleSlider(btn) {

	for (var i = 0; i < sliderPagButtons.length; i++) {
			sliderPagButtons[i].classList.remove('slider-pagination-active');
			sliders[i].classList.remove('slider-item-active');		
		};

	if (btn == 0) {
			body.style.background = '#849d8f url("img/slider-img/slider-1.png") no-repeat center top';
		} else if (btn == 1) {
			body.style.background = '#8996a6 url("img/slider-img/slider-2.png") no-repeat center top';
		} else if (btn == 2) {
			body.style.background = '#9d8b84 url("img/slider-img/slider-3.png") no-repeat center top';
		};

	sliderPagButtons[btn].classList.add('slider-pagination-active');
	sliders[btn].classList.add('slider-item-active');
};





var feedbackBtn 			= document.querySelector('.open-feedback-btn');
var popup 						= document.querySelector('.feedback-modal');
var popupWindow 			= popup.querySelector('.modal-inner');
var overlay 	 				= document.querySelector('.overlay');
var closeModal 				= popup.querySelector('.modal-close');
var form 							= popup.querySelector('.feedback-form');
var userName 					= document.querySelector('.feedback-name-field');
var userEmail 				= document.querySelector('.feedback-email-field');
var userMessage				= document.querySelector('.user-message-area');

var isStorageSupport 		= true;
var nameStorage				= '';
var emailStorage 			= '';

try {
	nameStorage				= localStorage.getItem('name');
	emailStorage 			= localStorage.getItem('email');
} catch (err) {
	isStorageSupport 	= false;
}


if (feedbackBtn) {

	feedbackBtn.addEventListener('click', function(evt) {
		evt.preventDefault();
		popup.classList.add('modal-show');
		overlay.classList.add('overlay-show');

		
		if (nameStorage && emailStorage) {
			userName.value 	= nameStorage;
			userEmail.value = emailStorage;
			userMessage.focus();
		} else if (nameStorage) {
			userName.value 	= nameStorage;
			emailStorage.focus();
		} else {
			userName.focus();	
		}
	});
}

if(closeModal) {
	closeModal.addEventListener('click', function(evt) {
		evt.preventDefault();
		popup.classList.remove('modal-show');
		overlay.classList.remove('overlay-show');
		popupWindow.classList.remove('modal-error');
	});
}

if (form) {
	form.addEventListener('submit', function(evt) {
		if (!userName.value || !userEmail.value || !userMessage.value) {
			evt.preventDefault();
			popupWindow.classList.remove('modal-error');
			popupWindow.offsetWidth = popupWindow.offsetWidth;
			popupWindow.classList.add('modal-error');
		} else {
			if (isStorageSupport) {
				localStorage.setItem('name', userName.value);
				localStorage.setItem('email', userEmail.value);	
			}		
		}
	});
}


window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (popup.classList.contain('modal-show')) {
			popup.classList.remove('modal-show');
			popupWindow.classList.remove('modal-error');
			overlay.classList.remove('overlay-show');
		}
	}
});





for (var i = 0; i < paginationButtons.length; i++) {

	paginationButtons[i].addEventListener('click', function() {

		for (var i = 0; i < paginationButtons.length; i++) {
			paginationButtons[i].classList.remove('pagination-active');
			paginationButtons[i].removeAttribute('href');
			paginationButtons[i].setAttribute('href', '#');
		}

		this.removeAttribute('href');
		this.classList.add('pagination-active');

		if (paginationButtons[0].hasAttribute('href')) {
		pagPrevBtn.classList.remove('disabled-btn');
		} 

		if (!paginationButtons[0].hasAttribute('href')) {
		pagPrevBtn.classList.add('disabled-btn');
		} 

		if (paginationButtons[paginationButtons.length - 1].hasAttribute('href')) {
			pagNextBtn.classList.remove('disabled-btn');
		}

		if (!paginationButtons[paginationButtons.length - 1].hasAttribute('href')) {
			pagNextBtn.classList.add('disabled-btn');
		}
	});
}