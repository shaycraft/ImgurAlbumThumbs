(function () {
    var app = angular.module('ImgurAlbum')
        .controller('MainCtrl', ['$scope', '$location', 'imgursvc', MainCtrl]);

    function MainCtrl($scope, $location, imgursvc) {
        var album = {};

        // example:  file:///C:/Users/Sam/Documents/GitHub/ImgurAlbumThumbs/index.html#/!/?albumName=xxx
        var albumName = $location.search().albumName;
        if (albumName !== undefined) {
            imgursvc.getAlbumImages(albumName).then(function (data) {
                album.images = data;
            });
        }

        album.submit = function () {
            imgursvc.getAlbumImages(album.code).then(function (data) {
                album.images = data;
            });
        };

        album.msg = "Welcome to the Imgur Album program!";

        $scope.album = album;
    };
})();