(function () {
    var app = angular.module('ImgurAlbum')
        .controller('MainCtrl', ['$scope', '$location', 'imgursvc', MainCtrl]);

    function MainCtrl($scope, $location, imgursvc) {
        var album = {};
         var getImgurFeed = function (albumName, callbackObj) {
        imgursvc.getAlbumImages(albumName).then(function (data) {
            callbackObj.images = data;
        });
    }

        // example:  file:///C:/Users/Sam/Documents/GitHub/ImgurAlbumThumbs/index.html#/!/?albumName=xxx
        var albumName = $location.search().albumName;
        if (albumName !== undefined) {
            getImgurFeed(albumName, album);
        }

        album.submit = function () {
            getImgurFeed(album.code, album);
        };

        album.msg = "Welcome to the Imgur Album program!";

        $scope.album = album;
    };
})();