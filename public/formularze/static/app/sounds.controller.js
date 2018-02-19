'use strict';

angular
    .module('app')
    .controller('SoundsController', SoundsController);

function SoundsController($scope, $http) {
    var vm = this;
    vm.sounds = [];
    vm.getAll = getAll;
    vm.getDeleted = getDeleted;
    vm.deleteSound = deleteSound;
    vm.addSound = addSound;

    init();

    function init() {
        getAll();
    }

        function addSound(){
            var url = "/sounds/create";
            console.log("Trying to add new sound");
            var data = {
				name: $scope.name,
                producer: $scope.producer,
                model: $scope.model,
                colour: $scope.colour
				price: $scope.price
            }
            console.log(data);

            $http.post(url, data).then(function(response){
                vm.sounds = response.data;
            });
			
			document.getElementById("inputNazwa").value = "";
            document.getElementById("inputProducent").value = "";
            document.getElementById("inputModel").value = "";
            document.getElementById("inputKolor").value = "";
			document.getElementById("inputCena").value = "";
        }

        function getAll() {
            var url = "/sounds/all";
            var usersPromise = $http.get(url);
            usersPromise.then(function (response) {
                vm.sounds = response.data;
            });
        }

        function getDeleted() {
            var url = "/sounds/deleted";
            var usersPromise = $http.get(url);
            usersPromise.then(function (response) {
                vm.sounds = response.data;
            });
        }

        function deleteSound(id) {
            var url = "/sounds/remove/" + id;
            $http.post(url).then(function (response) {
                vm.sounds = response.data;
            });
        }
}
