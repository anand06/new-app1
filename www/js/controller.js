angular
.module('starter')
.controller('OneController', function($scope, $ionicModal, $http){


			  $ionicModal.fromTemplateUrl('animal-modal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
			  }).then(function(modal) {
			    $scope.modal = modal;
			  });
			  $scope.openModal = function(animal) {
			  	$scope.animalmodal=animal
			    $scope.modal.show();
			  };
			  $scope.closeModal = function() {
			    $scope.modal.hide();
			  };

			$scope.animals = [];

			$http({
				method: 'GET',
				url: 'https://gist.githubusercontent.com/anand06/70b80f47c713195d2b14/raw/e2786cf194880e2fc733f7aa0c16c6aced92bc91/animals.json'
			}).then(function(response){
				$scope.animals  = response.data;
			})
})
