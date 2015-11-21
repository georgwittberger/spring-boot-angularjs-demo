/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="angularjs-demo-service.ts" />

module demo {
  interface IDemoScope extends ng.IScope {
    person: IPerson;
    fetchPerson: () => void;
  }
  export class DemoController {
    static $inject = ['$scope', 'demo.DemoService'];
    private scope: IDemoScope;
    private demoService: DemoService;

    constructor($scope: IDemoScope, demoService: DemoService) {
      this.scope = $scope;
      this.demoService = demoService;
      this.scope.fetchPerson = () => this.fetchPerson();
    }

    fetchPerson(): void {
      this.demoService.getPerson().then((person) => {
        this.scope.person = person;
      }).catch(() => {
        delete this.scope.person;
      });
    }
  }
}
