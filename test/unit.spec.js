'use strict';

describe('adaptive.youtube', function() {

  beforeEach(module('adaptive.youtube'));

  var rootScope;
  beforeEach(inject(function($rootScope) {
    rootScope = $rootScope;
  }));

  var elm, scope, ctrl, createController;

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.youtubeId = 'kxopViU98Xo'; 

    elm = angular.element(
      '<youtube video="youtubeId" class="youtube"></youtube>'
    );

    $compile(elm)(scope);
    scope.$digest();
  }));

  it('shold have correct video id', function(){
    expect(scope.youtubeId).toBe('kxopViU98Xo');
  });

  it('shold have background image', function(){
    expect(elm.css('background-image').match(/\/\/img.youtube.com\/vi\/kxopViU98Xo\/0.jpg/g).length).toBe(1);
  });

});