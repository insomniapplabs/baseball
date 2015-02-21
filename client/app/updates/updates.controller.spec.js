'use strict';

describe('Controller: UpdatesCtrl', function () {

  // load the controller's module
  beforeEach(module('baseballApp'));

  var UpdatesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatesCtrl = $controller('UpdatesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
