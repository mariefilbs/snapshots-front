import angular from 'angular';
import UserController from './controllers/User';

angular
   .module('app', [])
   .controller('UserController', UserController);
