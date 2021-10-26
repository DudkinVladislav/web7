$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		arrows:true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptive: {
		  1024:{
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  infinite: true,
			  dots: true
		  },
		  600:{
			  slidesToShow: 2,
			  slidesToScroll: 2
			
		  },
		 480: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  }
	  });
});
