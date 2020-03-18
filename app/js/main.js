$(function(){
 
	 /***************** Slick ********************/
	 $('.offer-slider').slick({
		arrows:false,
		asNavFor: ".offer-slider__dots",
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 4000,
	 });

	 $('.offer-slider__dots').slick({
		arrows:false,
		asNavFor: ".offer-slider",
		slidesToShow: 5,
		slidesToScroll: 1,
	 });
});