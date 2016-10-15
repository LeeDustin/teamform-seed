import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';
import pagination from 'angular-utils-pagination';

import routes from './config/routes';
import menu from '../common/menu';
import alert from '../common/alert';
import footer from '../common/footer';
import firebase from '../common/firebase';
import EventDetailCtrl from './controllers/eventDetail';
import EventListCtrl from './controllers/eventList';
import EventCreateCtrl from './controllers/eventCreate';
import EventService from './factories/EventService';

export default angular.module('event', [uirouter, angularfire, firebase, pagination, menu, footer, alert])
    .config(routes)
    .controller('EventDetailCtrl', EventDetailCtrl)
    .controller('EventListCtrl', EventListCtrl)
    .controller('EventCreateCtrl', EventCreateCtrl)
    .factory('EventService', EventService.instance)
    .name;
