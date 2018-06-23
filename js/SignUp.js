// alert(1);
// app.controller('signupController', function($scope) {
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


 
alert(44444);
console.log(app);

app.controller('SignUpController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
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


app.controller('SignUpController', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
			alert(123);
			console.log(response);
            $scope.greeting = response.data;
        });
});

