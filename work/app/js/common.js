$(function() {

	// Custom JS

});

new Vue({
  el: '#app',
  methods: {
    say: function (message) {
      //console.log(message)
			axios({
			    method: 'post',
			    url: 'http://gen.test/pro.php',
			    data: {
			        firstName: 'Fred',
			        lastName: 'Flintstone'
			    }
			})
			.then(function(response) {

			    console.log(response);

			})
			.catch(function (error) {
			    console.log(error);
			});
    }
  }
})
