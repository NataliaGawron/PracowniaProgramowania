var app = angular.module("soundApp", ["ngResource", "ng"]);

app.SoundController("formCtrlo", function($scope) {
	$scope.list = [];
	$.ajax({
		url: "http://localhost:4000/api/sounds",
		dataType: "json",
	})
		.done(function(ret) {
			ret.forEach(sounds => {
				$scope.list.push({
					name: sounds.name,
					producer: sounds.producer,
					model: sounds.model,
					colour: sounds.colour,
					price: sounds.price,
				});
				console.log(
					sounds.name + "%c firmy " + sounds.producer + ":",
					"font-weight:bold"
				);
				console.log(sounds);
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
