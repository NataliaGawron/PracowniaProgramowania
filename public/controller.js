var app = angular.module("guitarApp", []);

app.controller("formCtrl", function($scope) {
	$scope.list = [];

	$scope.list.push({
		guitarProducer: "",
		type: "",
		model: "",
		colour: "",
		price: "",
	});
	$scope.myResult = function() {
		var result = [];
		for (var i = 0; i < $scope.list.length; i++) {
			var concat =
				$scope.list[i].guitarProducer +
				" – " +
				$scope.list[i].type +
				" " +
				$scope.list[i].model +
				" " +
				$scope.list[i].colour +
				" " +
				$scope.list[i].price;
			if ($scope.list[i].guitarProducer !== "") {
				result.push(concat);
			}
		}
		return result;
	};

	$scope.addItem = function() {
		$scope.list.push({
			guitarProducer: "",
			type: "",
			model: "",
			colour: "",
			price: "",
		});
	};

	$scope.deleteItem = function() {
		$scope.list.erase({
			guitarProducer: "",
			type: "",
			model: "",
			colour: "",
			price: "",
		});
	};
});
