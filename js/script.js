var feedbackBtn 			= document.querySelector('.open-feedback-btn');
var modalWindow 			= document.querySelector('.feedback-modal');
var closeModal 				= document.querySelector('.modal-close');
var sliderPagButtons 	= document.querySelectorAll('.slider-pagination button');
var sliders 					=	document.querySelectorAll('.slider-item');
var body 							= document.querySelector('body');

var sliderImage1 			= new Image(1045, 881);
		sliderImage1.src 	= 'img/slider-img/slider-1.png';
var sliderImage2			= new Image(1045, 881);
		sliderImage2.src 	=	'img/slider-img/slider-2.png';
var sliderImage3			= new Image(1045, 881);
		sliderImage3.src 	= 'img/slider-img/slider-3.png'

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

// function showMap() {
// 	var mapOptions = {
// 		center: new google.maps.LatLng(59.938795, 30.323085),
// 		zoom: 100;
// 	};

// 	var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
// }

feedbackBtn.addEventListener('click', function() {
	modalWindow.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
	modalWindow.style.display = 'none';
});