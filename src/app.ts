/**
 * Created by Monkey on 8/20/2017.
 */

let angular = require('angular');

require('@uirouter/angularjs');
require('angular-ui-bootstrap');
require('angular-resource');

require('./less/main');


import Routes from './routes';
import HomeController from "./controllers/home";
import BorderDirective from "./directives/border";

angular
    .module('typescript-app', ['ui.router', 'ui.bootstrap', 'ngResource'])
    .controller('homeController', HomeController)
    .directive('myBorder', BorderDirective)
    .config(Routes);
