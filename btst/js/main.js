(function(){
	var width;
	
	function correctSpaceMd() {
		width = $(window).width();
		if (width === 320) {
			$('use#icn2').attr('x', '85px');
			$('use#icn3').attr('x', '170px');
			$('text#txt2').attr('x', '95px');
			$('text#txt3').attr('x', '190px');
		}
		else if(width >= 375 && width <= 415) {
			$('use#icn2').attr('x', '105px');
			$('use#icn3').attr('x', '215px');
			$('text#txt2').attr('x', '120px');
			$('text#txt3').attr('x', '235px');
		}
		else if(width >= 415 && width <= 767) {
			$('use#icn2').attr('x', '115px');
			$('use#icn3').attr('x', '230px');
			$('text#txt2').attr('x', '130px');
			$('text#txt3').attr('x', '250px');
		}
		else if(width >= 768 && width <= 989) {
			$('use#icn2').attr('x', '125px');
			$('use#icn3').attr('x', '245px');
			$('text#txt2').attr('x', '135px');
			$('text#txt3').attr('x', '265px');
		} 
		else if(width >= 990 && width <= 1200) {
			$('use#icn2').attr('x', '95px');
			$('use#icn3').attr('x', '195px');
			$('text#txt2').attr('x', '105px');
			$('text#txt3').attr('x', '214px');
		} 
		else if(width > 1200) {
			$('use#icn2').attr('x', '85px');
			$('use#icn3').attr('x', '160px');
			$('text#txt2').attr('x', '95px');
			$('text#txt3').attr('x', '180px');
		}
	}

	$(document).ready(correctSpaceMd);
	$(window).resize(correctSpaceMd);

}());