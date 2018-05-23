var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    console.log('BooksController');

    $scope.getBooks = function(){
        $http.get('/api/books').then(function(response){
            $scope.books = response.data;
        });
    }
    $scope.getBook = function(){
        var id = $routeParams.id;
        $http.get('/api/book/'+id).then(function(response){
            $scope.book = response.data;
        });
    }
}]);