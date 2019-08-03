angular.module("Celebrations", ['ionic']);

angular.module("Celebrations").config(function($stateProvider, $urlRouterProvider) {
	console.log("Celebrations");
	$urlRouterProvider.otherwise("/timer");

	$stateProvider.state('timer', {
    	url: '/timer',
    	templateUrl: 'templates/timer.html',
    	resolve: {

    		isTimer : function($state, $q, $timeout) {

    			console.log("Resolver");
    			var deferred = $q.defer();

		        $timeout(function() {
		        	var targetDate = new Date();
					var currDate = new Date();
					console.log("Is Timer"+ currDate.getTime() + "-" + targetDate.getTime());
					if (currDate.getTime() >= targetDate.getTime()) {
						alert("Entered");
						$state.go("home");
						deferred.reject();
					}
		          	else {
		            	deferred.resolve();
		          	}
		        });

		        return deferred.promise;
    			
    			
    		}
    	}
 	})
 	.state('home', {
    	url: '/home',
    	templateUrl: 'templates/home.html'
 	});

});

angular.module("Celebrations").run(function($ionicPlatform, $rootScope, $state) {

	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			// Set the statusbar to use the default style, tweak this to
			// remove the status bar on iOS or change it to use white instead of dark colors.
			StatusBar.styleDefault();
		}

		/*$rootScope.$on('$stateChangeStart', 
			function(event, toState, toParams, fromState, fromParams) { 
			    // do something
			    console.log("Resolver change");
    			var targetDate = new Date();
				var currDate = new Date();
				console.log("Is Timer"+ currDate.getTime() + "-" + targetDate.getTime());
				if (currDate.getTime() >= targetDate.getTime()) {
					alert("Entered state change");
					$state.go("home");
				}
		});*/

	});

});