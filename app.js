
(function(){

/**
 * @ndgdoc Module
 * @name todo
 *@description
 * This is main module of this app
**/


angular.module("todo",["ngRoute"]);

angular.module("todo").controller("CartController" , CartController);


/**
 * @ndgdoc controller
 * @name todo.controller : CartController
 *@description
 * This is main module of this app
**/


function CartController($scope) {
    $scope.items = [
            {title: 'Paint pots', quantity: 8, price: 3.95},
            {title: 'Polka dots', quantity: 17, price: 12.95},
            {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    $scope.remove = function(index) {
      $scope.items.splice(index, 1);
    }
  }

angular.module("todo").service("CartService" , CartService);
function CartService(){}

angular.module("todo").config(config);

  function config ($routeProvider){
	$routeProvider
	.when('/sample1',{
		controller: 'CartController',
		templateUrl: 'src/partials/sample1.html'
	})
	.otherwise({redirectTo:'/'});

}


/**
 * @ndgdoc directive
 * @name todo.dontroller : pageHeader
 *@description
 * This is main module of this app
**/

/**
 * @ndgdoc directive
 * @name todo.dontroller : pageFooter
 *@description
 * This is main module of this app
**/


angular.module("todo").directive("pageHeader", function() {
      return {
        restrict: 'E',
        templateUrl: "src/directives/page-header.html"
      };
    });

angular.module("todo").directive("pageFooter", function() {
      return {
        restrict: 'E',
        templateUrl: "src/directives/page-footer.html"
      };
    });




  })();




