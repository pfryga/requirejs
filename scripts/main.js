console.log('hello world');

require.config({
	baseUrl: 'scripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery'
	}
});

require(['jquery', 'message', 'another-module'], function($, message, another) {
	$('#output').html(message + " " + another);
});