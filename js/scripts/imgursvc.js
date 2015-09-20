(function() {
    var app = angular.module('ImgurAlbum');

    var imgur = function($resource, $q, $http) {
        $http.defaults.headers.common['Authorization'] = 'Client-ID 825022f85f02219';

        var getAlbum = function(code) {
            var defer = $q.defer();

            var res = $resource('https://api.imgur.com/3/album/' + code);
            res.get(function(d) {
               defer.resolve(d.data);
            });

            return defer.promise;
        };

        var getAlbumImages = function(code) {
            var defer = $q.defer();

            var res = $resource('https://api.imgur.com/3/album/' + code + '/images');
            res.get(function(d) {
                var regex = /(.+)\.(\w{3})$/;
                d.data.forEach(function(item) {
                    var link = item.link;
                    var match = regex.exec(link);
                    item.thumblink = match[1] + 't.' + match[2];
                });

                defer.resolve(d.data);
            });

            return defer.promise;
        };

        return {
            getAlbum: getAlbum,
            getAlbumImages: getAlbumImages
        }
    };

    app.factory('imgursvc', ['$resource', '$q', '$http', imgur]);
})();