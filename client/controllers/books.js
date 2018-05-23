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
    $scope.addBook = function(){
        $http.post('/api/book/', $scope.book).then(function(){
            window.location.href = '#!/books';
        });
    }
    $scope.editBook = function(){
        var id = $routeParams.id;
        $http.put('/api/book/'+id, $scope.book).then(function(){
            window.location.href = '#!/books';
        });
    }
    $scope.deleteBook = function(){
        var id = $routeParams.id;
        $http.delete('/api/book/'+id).then(function(){
            window.location.href = '#!/books';
        });
    }
}]);