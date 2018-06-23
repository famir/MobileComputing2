 

var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'partial_view/home.html',
    controller  : 'HomeController'
  })

  .when('/login', {
    templateUrl : 'partial_view/login.html',
    controller  : 'LoginController'
  })

  .when('/signup', {
    templateUrl : 'partial_view/signUp.html',
    controller  : 'SignUpController' 
  })  
  
  .when('/forgotPassword', {
    templateUrl : 'partial_view/password_reset_1.html',
    controller  : 'SignUpController' 
  })  

  .otherwise({redirectTo: '/'});
});


app.controller('SignUpController', function($scope) {
    // create a message to display in our view
   // $scope.message = 'Everyone come and see how good I look!';
    $scope.master = {firstName:"John", lastName:"Doe"};
        $scope.reset = function() {
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.email = '';
        $scope.nationalId = '';
        $scope.password = '';
        $scope.confirmPassword = '';
        $scope.firstName = '';

        $("#photo").replaceWith($("#photo").val('').clone(true));
    };
});


// app.controller('SignUpController', function($scope, $http) {
    // $http.get('http://127.0.0.1:5000/users/list').
        // then(function(response) {
			// alert(123);
			// console.log(response);
            // //$scope.greeting = response.data;
        // });
// });

// app.controller('SignUpController', function($scope) {
//     $scope.master = {firstName:"John", lastName:"Doe"};
//     $scope.reset = function() {
//         $scope.firstName = '';
//         $scope.lastName = '';
//         $scope.email = '';
//         $scope.nationalId = '';
//         $scope.password = '';
//         $scope.confirmPassword = '';
//         $scope.firstName = '';

//         $("#photo").replaceWith($("#photo").val('').clone(true));
//     };
   
// });


// app.controller('SignUpController', function($scope) {
//     $scope.master = {firstName:"John", lastName:"Doe"};
//     $scope.reset = function() {
//         $scope.firstName = '';
//         $scope.lastName = '';
//         $scope.email = '';
//         $scope.nationalId = '';
//         $scope.password = '';
//         $scope.confirmPassword = '';
//         $scope.firstName = '';

//         $("#photo").replaceWith($("#photo").val('').clone(true));
//     };
//     $scope.reset();
// });

// app.controller('BlogController', function($scope) {
//   $scope.message = 'Hello from BlogController';
// });

// app.controller('AboutController', function($scope) {
//   $scope.message = 'Hello from AboutController';
// });