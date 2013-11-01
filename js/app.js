var gossipy = angular.module('gossipyApp', []);

gossipy.controller('MainCntrl', ['$scope',
		function($scope) {
			navigator.getUserMedia = navigator.getUserMedia ||
			navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

			constraints = {video: true, audio: true};

			function successCallback(localMediaStream) {
			  window.stream = localMediaStream; // stream available to console
			  var video = document.querySelector("video");
			  video.src = window.URL.createObjectURL(localMediaStream);
			  video.play();
			}

			function errorCallback(error){
			  console.log("navigator.getUserMedia error: ", error);
			}

			navigator.getUserMedia(constraints, successCallback, errorCallback);

			$scope.volume = 1;
			$scope.videoshow = true;
			$scope.$watch('volume', function() {
				document.getElementById("myVideo").volume = $scope.volume;
			});
		}
	]);