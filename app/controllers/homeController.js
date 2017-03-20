app.controller('HomeController', ['$scope', 'commonService', 'messageService', function($scope, commonService, messageService) {
      var self = this;
      self.artistDataArr = [];
      self.artistSearchModalId = 'searchArtistModal';
      self.showArtistDialog = false;
      self.nameCheck = '^jack$';
      self.trackCheck = '^4$';
      self.artistDetails = {};
      self.currentTab = 0;

      /* Function used to submit records for search artist */
      self.searchArtist = function(){
        var requestObj = {name: self.artistName, track: self.noOfTracks};
        commonService.submitSearchArtist(requestObj).then(function(response){
          if(response.status === 200){
            self.artistDataArr = ['jack', 'jack', 'jack', 'jack'];
            angular.element('#'+self.artistSearchModalId).modal('hide');
            var messageObj = {msg: 'Artist details successfully submitted !'};
            messageService.showMessage(messageObj);
            self.fetchArtistDetails(0);
          }
        }, function(err){

        });
      };

      /* Function used to fetch records for artist */
      self.fetchArtistDetails = function(index){
        self.currentTab = index;
        var requestObj = {name: self.artistName};
        commonService.fetchArtistDetails(requestObj).then(function(response){
          if(response.status === 200){
            self.artistDetails = response.data.results[0];
          }
        }, function(err){

        });
      };
  }]);