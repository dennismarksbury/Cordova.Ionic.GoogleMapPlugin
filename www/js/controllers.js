angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $window, $rootScope, $ionicSideMenuDelegate, $ionicHistory) {
	//$('.menu-left').hide(); 

	$rootScope.$watch(function(){
    return $ionicSideMenuDelegate.getOpenRatio();
  }, function(newValue, oldValue) {
    if (newValue == 0){
      $('.menu-left').hide();
    } else{
      $('.menu-left').show();
    }
  }); 

	var pause = function() {
		setTimeout(function() {
			if ($window.mapReady) 
				init();
			else 
				pause();
		}, 200);
	};
	
	if (!$window.mapReady) pause();
	
	var init = function () {
		var GORYOKAKU_JAPAN = new plugin.google.maps.LatLng(41.796875,140.757007);
		var options = {
			'backgroundColor': 'white',
			'mapType': plugin.google.maps.MapTypeId.HYBRID,
			'controls': {
				'compass': true,
				'myLocationButton': true,
				'indoorPicker': true,
				'zoom': true
			 },
			'gestures': {
				'scroll': true,
				'tilt': true,
				'rotate': true
			 },
			'camera': {
				'latLng': GORYOKAKU_JAPAN,
				'tilt': 30,
				'zoom': 15,
				'bearing': 50
			 }
		};
		var div = document.getElementById('map-content');
		$window.map.setDiv(div);
		//$window.map.setClickable(false);
	};
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
