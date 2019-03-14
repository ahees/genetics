
$(function() {

		

	$("#fanketa").on('change', '.block-a', function () {
		var block_a = $(".block-a").serializeArray();

		if (block_a.length >= 5) {
			$(".next-block").addClass("active");
		} else {
			$(".next-block").removeClass("active");
		}

		$(".next-block.active").on('click', function () {
			$(".block-a").fadeOut('slow', function () {
				$(".block-b").fadeIn('slow');
				$(".next-block").removeClass("active");
				console.log('click');
			});
		});
		//console.log(block_a.length);
	});	
	$("#fanketa").on('change', '.block-b', function () {
		var block_b = $(".block-b").serializeArray();

		if (block_b.length >= 6) {
			$(".next-block").addClass("active");
		} else {
			$(".next-block").removeClass("active");
		}

		$(".next-block.active").on('click', function () {
			$(".block-b").fadeOut('slow', function () {
				$(".block-c").fadeIn('slow');
				$(".next-block").removeClass("active").css("display", "none");
				console.log('click');
			});
		});
		//console.log(block_a.length);
	});	

	$("#fanketa").on("submit", function(e){
		e.preventDefault();
		var ddd = $('#fanketa').serializeArray();

		$.ajax({
			url: 'http://jobmax.server/anketa.php',
			type: 'post',
			data: ddd,
			success: function (result) {
				$('#result').html(result);
			}
		});
		// console.log(data)
	});
	// var block_bb = $("#fanketa").serializeArray();
	// console.log(block_bb)

	
	

	// Custom JS
	// $('.block .answer .a').on('click', function(){
		
		// $('.block .answer .a').removeClass('active');
		// $(this).parent().find('.a').removeClass('active');
		// $(this).toggleClass('active');
		
	





});