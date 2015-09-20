(function() {
	var app = angular.module('ImgurAlbum')
    .controller('MainCtrl', ['$scope', 'imgursvc', MainCtrl]);

	function MainCtrl($scope, imgursvc) {
		var album = {};

        album.submit = function () {
         imgursvc.getAlbum(album.code).then(function(data) {
             console.log(data);
         });
        };

		album.msg = "Welcome to the Imgur Album program!";

        $scope.album = album;
	};
})();