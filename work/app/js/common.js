$(function() {

	$('.sub').on('click', function(){

		var data = $('#form1').serializeArray();

		// var q1 = $("input[name=q1]");
		// var checkedValue = q1.filter(":checked").val();
		
		
		// console.log(checkedValue)
		console.log(data)

	});

	// Custom JS
	// $('.block .answer .a').on('click', function(){
		
		// $('.block .answer .a').removeClass('active');
		// $(this).parent().find('.a').removeClass('active');
		// $(this).toggleClass('active');
		
	});


	// $('body').on('change', '.block .answer .a', function() { 
	// 	console.log('yes');
	// });
	


});