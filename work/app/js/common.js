
$(function() {

	$("#phone").inputmask("+38(999)999-99-99");

	$("#fanketa").on('change', '.block-a.novalid', function () {
		var block_a = $(".block-a").serializeArray();

		if (block_a.length >= 5) {
			$(".next-block").addClass("active").addClass("active-a");
			console.log('блок а валидный');
		} else {
			$(".next-block").removeClass("active");
		}

		$(".next-block.active").on('click', function () {
			$(".block-a").fadeOut('slow', function () {
				console.log('скрываем блок А');
				$(".block-b").fadeIn('slow');
				$(".next-block").removeClass("active");
				$(".block-a").removeClass("novalid");
				console.log('открываем блок Б');
			});
		});
		return true;
		//console.log(block_a.length);
	});	
	$("#fanketa").on('change', '.block-b.novalid', function () {
		var block_b = $(".block-b").serializeArray();

		if (block_b.length >= 6) {
			$(".next-block").addClass("active");
			console.log('блок Б валидный');
		} else {
			$(".next-block").removeClass("active");
		}

		$(".next-block.active.active-a").on('click', function () {
			$(".block-b").fadeOut('slow', function () {
				console.log('скрываем блок Б');
				$(".block-c").fadeIn('slow');			
				$(".next-block").removeClass("active");
				$(".block-b").removeClass("novalid");
				console.log('открываем блок С');
			});
		});
		//console.log(block_a.length);
	});	

	$("#fanketa").on('change', '.block-c.novalid', function () {
		var block_c = $(".block-c").serializeArray();

		if (block_c.length >= 3) {
			$(".next-block").addClass("active");
			console.log('блок С валидный');
		} else {
			$(".next-block").removeClass("active");
		}

		$(".next-block.active").on('click', function () {
			$(".block-c").fadeOut('slow', function () {
				console.log('Скрываем блок С');
				$(".block-d").fadeIn('slow');
				$(".next-block").removeClass("active").css("display", "none");
				$(".block-c").removeClass("novalid");
				console.log('показываем блок Д');
			});
		});
		//console.log(block_a.length);
	});	

	$("#ggg").on("click", function(e){
		e.preventDefault();
		var ddd = $('#fanketa').serializeArray();
		var dddd = $('#ggg').val();
		console.log(ddd);
		$.ajax({
			url: 'http://gen.test/anketa.php',
			type: 'post',
			data: ddd,
			success: function (result) {
				$('#result').html(result);
			}
		});
		// console.log(data)
	});

	$("#fanketa").on("submit", function(e){
		e.preventDefault();
		var ddd = $('#fanketa').serializeArray();

		$.ajax({
			url: 'http://gen.test/anketa.php',
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
		
	


		$("#fanketa").validate({
			messages: {
				email: {
				required: "Поле email обязательно для заполнения",
				email: jQuery.validator.format("Введите корректный email")
				},
				name: {
				required: "Поле имя обязательно для заполнения",
				minlength: jQuery.validator.format("Длина имени должна быть больше 5-ти символов")
				}
			},
			rules: {
				email: {
				required: true,
				email: true
				},
				name: {
				required: true,
				minlength: 5
				}
			}
			}
		);







});