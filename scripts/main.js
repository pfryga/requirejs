console.log('hello world');

require.config({
	baseUrl: "",
	paths: {
		"jquery": "bower_components/jquery/dist/jquery"
	}
});

require(['jquery'], function($) {
	$('#output').html('This is output.');
});