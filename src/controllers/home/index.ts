/**
 * Created by Monkey on 8/20/2017.
 */
import {IDatepickerConfig} from "angular-ui-bootstrap";

export default class HomeController {
    something: string;
    options: IDatepickerConfig;
    dt: Date;
    selected: string;
    states: Array<string> = [];
    story: Object;
    color: string = "blue";

    static inject: Array<string> = ['$timeout'];

    constructor($timeout:angular.ITimeoutService) {

        let vm = this;

        vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        vm.story = {description: 'My Story!'};

        vm.something = "This is something!";

        $timeout(function() { vm.color = "yellow" }, 1500);
    }

}