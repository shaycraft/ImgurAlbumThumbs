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

        return {
            getAlbum: getAlbum
        }
    };

    app.factory('imgursvc', ['$resource', '$q', '$http', imgur]);
})();