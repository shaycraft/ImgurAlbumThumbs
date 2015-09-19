(function() {
	var app = angular.module('ImgurAlbum', []);

	var MainCtrl = function($scope) {
		$scope.msg = "Welcome to the Imgur Album program!";
	};

    app.controller('MainCtrl', ['$scope', MainCtrl]);
})();