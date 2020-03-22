$(function(){
 
	 /***************** Slick ********************/
	 $('.offer-slider').slick({
		arrows:false,
		asNavFor: ".offer-slider__dots",
		slidesToShow: 1,
		slidesToScroll: 1,
		/* autoplay: true, */
  		autoplaySpeed: 4000,
	 });

	 $('.offer-slider__dots').slick({
		arrows:false,
		asNavFor: ".offer-slider",
		slidesToShow: 5,
		slidesToScroll: 1,
	 });



	/***************** Menu-btn ********************/
	$(".menu__burger").click(function(event){
	$(".menu__burger,.menu").toggleClass("active");
	});


	/***************** Login-form ********************/
	$(".header-btn__login").click(function(event){
		$(".login-form").toggleClass("active");
		});

	$(document).mouseup(function (e){ // событие клика по странице
		if (!$(".header-btn__login").is(e.target) && // если клик сделан не по элементу
			 $(".login-form").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
			 $(".login-form").removeClass('active'); // скрываем блок
		}
  });

/***************** Search-form ********************/
  $(".header-btn__search").click(function(event){
	$(".header-btn__search-input").toggleClass("active");
	$(".header-btn__search").toggleClass("active");
	});

	$(document).mouseup(function (e){ // событие клика по странице
		if (!$(".header-btn__search-input").is(e.target) && // если клик сделан не по элементу
			 $(".header-btn__search-input").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
			$(".header-btn__search-input").removeClass('active'); // скрываем блок
			$(".header-btn__search").removeClass('active'); // скрываем блок
		}
  });
	 
});