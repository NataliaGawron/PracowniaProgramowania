'use strict';

angular
    .module('app')
    .controller('AccessoriesMusicControler', AccessoriesMusicControler);

function AccessoriesMusicControler($scope, $http) {
    var vm = this;
    vm.accessoriesMusic = [];
    vm.getAll = getAll;
    vm.getDeleted = getDeleted;
    vm.deleteSound = deleteSound;
    vm.addSound = addSound;

    init();

    function init() {
        getAll();
    }

        function addSound(){
            var url = "/accessoriesMusic/create";
            console.log("Trying to add new accessories");
            var data = {
				name: $scope.name,
                producer: $scope.producer,
                model: $scope.model,
                colour: $scope.colour
				price: $scope.price
            }
            console.log(data);

            $http.post(url, data).then(function(response){
                vm.accessoriesMusic = response.data;
            });
			
			document.getElementById("inputNazwa").value = "";
            document.getElementById("inputProducent").value = "";
            document.getElementById("inputModel").value = "";
            document.getElementById("inputKolor").value = "";
			document.getElementById("inputCena").value = "";
        }

        function getAll() {
            var url = "/accessoriesMusic/all";
            var usersPromise = $http.get(url);
            usersPromise.then(function (response) {
                vm.accessoriesMusic = response.data;
            });
        }

        function getDeleted() {
            var url = "/accessoriesMusic/deleted";
            var usersPromise = $http.get(url);
            usersPromise.then(function (response) {
                vm.accessoriesMusic = response.data;
            });
        }

        function deleteSound(id) {
            var url = "/accessoriesMusic/remove/" + id;
            $http.post(url).then(function (response) {
                vm.accessoriesMusic = response.data;
            });
        }
}
