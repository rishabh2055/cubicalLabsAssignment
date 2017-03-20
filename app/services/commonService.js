/* Common Service file */
app.service('commonService', ['$http', function($http){
	/* Function used to submit Artist search data */
	this.submitSearchArtist = function(obj){
		var url = 'http://itunes.apple.com/search?term='+obj.name+'&limit='+obj.track;
		url = 'data/artistSearch.json';
		return $http({
					method: 'GET',
					dataType: 'jsonp',
					url: url
				}).success(function (data, status, headers, config) {
		            return;
		        }).error(function (data, status, headers, config) {
		            return;
		        });
	};

	/* Function used to fetch Artist data */
	this.fetchArtistDetails = function(obj){
		var url = 'http://itunes.apple.com/search?term='+obj.name+'&limit=1';
		url = 'data/artistDetails.json';
		return $http({
					method: 'GET',
					dataType: 'jsonp',
					url: url
				}).success(function (data, status, headers, config) {
		            return;
		        }).error(function (data, status, headers, config) {
		            return;
		        });
	};
}]);

app.service('messageService', ['$timeout', function($timeout){
	/* Function used to display success or error response message */
	this.showMessage = function(messageObj){
		angular.element('.req-res-message').show();
		angular.element('.req-res-message').html(messageObj.msg);
		var messageTimer = false, displayDuration = 5000;
		if (messageTimer) {
            $timeout.cancel(messageTimer);
        }
        
        messageTimer = $timeout(function () {
            angular.element('.req-res-message').hide();
        }, displayDuration);
	};
}]);