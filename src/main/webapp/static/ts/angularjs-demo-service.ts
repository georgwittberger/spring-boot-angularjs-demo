/// <reference path="../typings/angularjs/angular.d.ts" />

module demo {
  export interface IPerson {
    firstName: string;
    lastName: string;
  }
  export class DemoService {
    static $inject = ['$http'];
    private httpService: ng.IHttpService;

    constructor($http: ng.IHttpService) {
      this.httpService = $http;
    }

    getPerson(): ng.IPromise<IPerson> {
      return this.httpService.get<IPerson>('api/person').then((response) => {
        return response.data;
      });
    }
  }
}
