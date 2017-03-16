import angular from 'angular';
import 'angular-ui-router';
import Config from './config';
import SERVER from './server';
import UserController from './controllers/User';

angular
   .module('app', ['ui.router'])
   .config(Config)
   .constant('SERVER', SERVER)
   .controller('UserController', UserController);
