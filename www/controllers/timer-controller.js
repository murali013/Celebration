angular.module("Celebrations").controller("TimerController", ["$scope", "$timeout", function($scope, $timeout) {

	$scope.time = {
		hours : "00",
		minutes : "00",
		seconds : "00"
	};

	var targetDate = new Date("2016", "10", "28");
	var currDate;
	

	var showTimer = function() {

		function runTimer() {
			var diff =  targetDate.getTime() - currDate.getTime();
			var hh = Math.floor(diff / (60 * 60 * 1000));
			var mm = Math.floor((diff - (hh * 60 * 60 * 1000)) / (60 * 1000));
			var ss = Math.floor((diff - ((hh * 60 * 60 * 1000) + (mm * 60 * 1000))) / 1000);
			//alert(hh + " Hours" + mm + " Minutes" + ss + " Seconds");
			$scope.time.hours = (hh < 10) ? '0' + hh : hh;
			$scope.time.minutes = (mm < 10) ? '0' + mm : mm;
			$scope.time.seconds = (ss < 10) ? '0' + ss : ss;			
		}

		$timeout(function() {
			console.log("console.log");
			currDate = new Date();
			if (currDate.getTime() < targetDate.getTime())
			{
				var diff =  targetDate.getTime() - currDate.getTime();
				var hh = Math.floor(diff / (60 * 60 * 1000));
				var mm = Math.floor((diff - (hh * 60 * 60 * 1000)) / (60 * 1000));
				var ss = Math.floor((diff - ((hh * 60 * 60 * 1000) + (mm * 60 * 1000))) / 1000);
				//alert(hh + " Hours" + mm + " Minutes" + ss + " Seconds");
				$scope.time.hours = (hh < 10) ? '0' + hh : hh;
				$scope.time.minutes = (mm < 10) ? '0' + mm : mm;
				$scope.time.seconds = (ss < 10) ? '0' + ss : ss;			
				showTimer();
			}
		}, 1000);
	}
	var initTimer = function() {
		showTimer();
	};

	initTimer();
}]);