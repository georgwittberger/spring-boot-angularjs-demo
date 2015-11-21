/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="angularjs-demo-controller.ts" />
/// <reference path="angularjs-demo-service.ts" />

var demoApp = angular.module('demo', []);

demoApp.controller('demo.DemoController', demo.DemoController);

demoApp.service('demo.DemoService', demo.DemoService);
