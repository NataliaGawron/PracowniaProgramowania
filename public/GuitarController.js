var app = angular.module("guitarApp", ["ngResource", "ng"]);

app.controller("formCtrl", function($scope) {
	$scope.list = [];
	$.ajax({
		url: "http://localhost:4000/api/guitars",
		dataType: "json",
	})
		.done(function(ret) {
			ret.forEach(guitars => {
				$scope.list.push({
					guitarProducer: guitars.producer,
					type: guitars.type,
					model: guitars.model,
					colour: guitars.colour,
					price: guitars.price,
				});
				console.log(
					"%c Gitara " + guitars.producer + ":",
					"font-weight:bold"
				);
				console.log(guitars);
				console.log("");
			});
		})
		.fail(function(err) {
			console.error(err);
		})
		.always(function() {});

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
		$scope.list.erase();
	};
});
