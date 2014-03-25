(function(){
  'use strict';

  /**
   * @ngdoc overview
   * @name adaptive.youtube
   *
   * @description
   * This module allows you to adapt youtube component for different occasions like
   * static youtube video, open video in a new tab / a native mobile application or
   * load a youtube video.
   */
  var adaptive = angular.module('adaptive.youtube', []);

  adaptive.controller('YoutubeCtrl', ['$scope', function ($scope) {

    $scope.updateStyle = function(videoId){
      var videoImage = 'http://img.youtube.com/vi/' + videoId + '/0.jpg';
      var playImage = 'data:image/png;base64,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';

      $scope.style = {
        'display': 'block',
        'cursor': 'pointer',
        'background-image': 'url(\'' + playImage + '\'), url(\'' + videoImage + '\')',
        'background-repeat': 'no-repeat, no-repeat',
        '-webkit-background-size': 'auto, cover',
        '-moz-background-size': 'auto, cover',
        '-o-background-size': 'auto, cover',
        '-ms-background-size': 'auto, cover',
        'background-size': 'auto, cover',
        'background-position': 'center center, center center'
      };
    };

    $scope.updateStyle($scope.video);
  }]);

  adaptive.directive('youtube', [ function () {
    return {
      template: '<a ng-style="style" ng-href="{{VIDEO_HREF}}" target="_blank"></a>',
      replace: true,
      restrict: 'E',
      controller: 'YoutubeCtrl',
      scope: {
        video: '='
      },

      link: function postLink(scope, element) {

        if (scope.video === undefined) {
          throw new Error('The `video` attribute is required.');
        }

        scope.videoLoaded = false;

        element.bind('click', function(event){
          event.preventDefault();
          scope.videoLoaded = true;
          var height = element[0].offsetHeight;
          element[0].innerHTML = '<iframe type="text/html" width="100%" height="' + height + '" src="http://www.youtube.com/embed/' + scope.video + '?autoplay=1&origin=http://angular-adaptive.github.io" frameborder="0"/>';
        });

        scope.$watch('video', function() {
          scope.updateStyle(scope.video);
          element[0].innerHTML = '';
        });
      }
    };
  }]);
})();

