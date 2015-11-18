/// <reference path="../../typings/angularjs/angular.d.ts" />

module demo.services {
  export class DemoService {
    static $inject = ['$http'];
    http: ng.IHttpService;

    constructor($http: ng.IHttpService) {
      this.http = $http;
    }

    getGreeting(): string {
      return 'Hello World';
    }
  }
  angular.module('demo').service('demo.services.DemoService', DemoService);
}
