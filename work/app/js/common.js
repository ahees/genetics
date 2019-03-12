$(function() {

	// Custom JS
	$('.block .answer .a').on('click', function(){
		
		// $('.block .answer .a').removeClass('active');
		// $(this).parent().find('.a').removeClass('active');
		// $(this).toggleClass('active');
		$(this).css('background-color', 'tomato');
	});


	$('body').on('change', '.block .answer .a', function() { 
		console.log('yes');
	});
	


});




// new Vue({
//   el: '#app',
//   methods: {
//     say: function (message) {
//       //console.log(message)
// 			axios({
// 			    method: 'post',
// 			    url: 'http://gen.test/pro.php',
// 			    data: {
// 			        firstName: 'Fred',
// 			        lastName: 'Flintstone'
// 			    }
// 			})
// 			.then(function(response) {

// 			    console.log(response);

// 			})
// 			.catch(function (error) {
// 			    console.log(error);
// 			});
//     }
//   }
// })
