var app = angular.module("accessoriesApp", ["ngResource", "ng"]);

app.AccessoriesController("formCtrle", function($scope) {
	$scope.list = [];
	$.ajax({
		url: "http://localhost:4000/api/accessoriesMusic",
		dataType: "json",
	})
		.done(function(ret) {
			ret.forEach(accessoriesMusic => {
				$scope.list.push({
					name: accessoriesMusic.name,
					producer: accessoriesMusic.producer,
					model: accessoriesMusic.model,
					colour: accessoriesMusic.colour,
					price: accessoriesMusic.price,
				});
				console.log(
					accessoriesMusic.name +
						"%c firmy " +
						accessoriesMusic.producer +
						":",
					"font-weight:bold"
				);
				console.log(accessoriesMusic);
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
				$scope.list[i].name +
				" – " +
				$scope.list[i].producer +
				" " +
				$scope.list[i].model +
				" " +
				$scope.list[i].colour +
				" " +
				$scope.list[i].price;
			if ($scope.list[i].name !== "") {
				result.push(concat);
			}
		}
		return result;
	};

	$scope.addItem = function() {
		$scope.list.push({
			name: "",
			producer: "",
			model: "",
			colour: "",
			price: "",
		});
	};

	$scope.deleteItem = function() {
		$scope.list.erase();
	};
});
