/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="demo-service.ts" />

module demo.controllers {
  export class DemoController {
    static $inject = ['demo.services.DemoService'];
    scope: ng.IScope;
    demoService: demo.services.DemoService;

    constructor($scope: ng.IScope, demoService: demo.services.DemoService) {
      this.scope = $scope;
      this.demoService = demoService;
    }
  }
  angular.module('demo').controller('demo.controllers.DemoController', DemoController);
}
