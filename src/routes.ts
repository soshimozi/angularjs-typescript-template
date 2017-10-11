/**
 * Created by Monkey on 8/20/2017.
 */
export default class Routes {

    static inject: Array<string> = [
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider'
    ];

    constructor($locationProvider: ng.ILocationProvider,
                $stateProvider: angular.ui.IStateProvider,
                $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $locationProvider.hashPrefix('');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', <ng.ui.IState> {
                url: "/",
                template: require('./views/home'),
                controller: 'homeController',
                controllerAs: 'vm'
            });
    }
}