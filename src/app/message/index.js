import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';

import routes from './config/routes';
import alert from '../common/alert';
import firebase from '../common/firebase';
import auth from '../common/auth';
import user from '../user';
import MessageCtrl from './controllers/message';
import MessageService from './factories/MessageService';

export default angular.module('message', [uirouter, angularfire, firebase, alert, user, auth])
    .config(routes)
    .controller('MessageCtrl', MessageCtrl)
    .factory('MessageService', MessageService.instance)
    .name;
