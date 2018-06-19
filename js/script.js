var feedbackBtn 			= document.querySelector('.open-feedback-btn');
var modalWindow 			= document.querySelector('.feedback-modal');
var closeModal 				= document.querySelector('.modal-close');
var sliderPagButtons 	= document.querySelectorAll('.slider-pagination button');
var sliders 					=	document.querySelectorAll('.slider-item');
var body 							= document.querySelector('body');


// var hiddenElement 		= document.querySelector('.catalog-list');
// // console.log(hiddenElement);
// // var hoveredElement 		= document.querySelector('.site-nav [href]:hover');
// // console.log(hoveredElement);
// // var normElement 			= document.querySelector('.site-nav-catalog a');
// 	// console.log(hiddenElement.previousElementSibling);
// 	var anchor = document.querySelector('.site-nav-catalog a');
// 	// console.log(anchor);
// 	console.log(hiddenElement.style.display);

// // while (hiddenElement.style.display !== 'none') {
// // 	// anchor.style.color = '#333';
// // 	// hiddenElement.previousElementSibling.style.backgroundColor = '#f7f6f3';
// // }




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
			body.style.background = '#849d8f url("../img/slider-img/slider-1.png") no-repeat center top';
		} else if (btn == 1) {
			body.style.background = '#8996a6 url("../img/slider-img/slider-2.png") no-repeat center top';
		} else if (btn == 2) {
			body.style.background = '#9d8b84 url("../img/slider-img/slider-3.png") no-repeat center top';
		}

	sliderPagButtons[btn].classList.add('slider-pagination-active');
	sliders[btn].classList.add('slider-item-active');
};



feedbackBtn.addEventListener('click', function() {
	modalWindow.style.display = 'block';
});

closeModal.addEventListener('click', function() {
	modalWindow.style.display = 'none';
});

