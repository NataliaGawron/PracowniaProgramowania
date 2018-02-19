'use strict';

angular
    .module('app')
    .controller('GuitarsController', GuitarsController);

function GuitarsController($scope, $http) {
    var vm = this;
    vm.guitars = [];
    vm.getAll = getAll;
    vm.getDeleted = getDeleted;
    vm.deleteGuitar = deleteGuitar;
    vm.addGuitar = addGuitar;

    init();

    function init() {
        getAll();
    }

        function addGuitar(){
            var url = "/guitars/create";
            console.log("Trying to add new guitar");
            var data = {
                producer: $scope.producer,
                type: $scope.type,
                model: $scope.model,
                colour: $scope.colour
				price: $scope.price
            }
            console.log(data);

            $http.post(url, data).then(function(response){
                vm.guitars = response.data;
            });

            document.getElementById("inputProducent").value = "";
            document.getElementById("inputType").value = "";
            document.getElementById("inputModel").value = "";
            document.getElementById("inputKolor").value = "";
			document.getElementById("inputCena").value = "";
        }

        function getAll() {
            var url = "/guitars/all";
            var usersPromise = $http.get(url);
            usersPromise.then(function (response) {
                vm.guitars = response.data;
            });
        }

        function getDeleted() {
            var url = "/guitars/deleted";
            var usersPromise = $http.get(url);
            usersPromise.then(function (response) {
                vm.guitars = response.data;
            });
        }

        function deleteGuitar(id) {
            var url = "/guitars/remove/" + id;
            $http.post(url).then(function (response) {
                vm.guitars = response.data;
            });
        }
}
