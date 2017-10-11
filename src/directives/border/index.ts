import {directive} from "../../decorators/directive";

@directive("$location", "$rootScope")

export default class BorderDirective implements ng.IDirective {

    public scope = {color: '@'};

    public transclude = true;

    public restrict = 'E';

    public template = '<div style="border: 1px solid black;padding:10px;" ng-style="{\'border-color\': color}">' +
        '<ng-transclude></ng-transclude>' +
        '</div>';

    public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
    };

    constructor(private $location: ng.ILocationService, private $rootScope: ng.IScope) {
    }
}
