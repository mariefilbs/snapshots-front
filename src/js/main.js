import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import setup from './setup';

import Config from './config';
import SERVER from './server';

import UserController from './controllers/user';
import LayoutController from './controllers/layout';
import PhotoController from './controllers/photo';
import SelectPhotoController from './controllers/selectphoto';

angular
   .module('app', ['ui.router', 'ngCookies'])
   .config(Config)
   .run(setup)
   .constant('SERVER', SERVER)

   .controller('UserController', UserController)
   .controller('LayoutController', LayoutController)
   .controller('PhotoController', PhotoController)
   .controller('SelectPhotoController', SelectPhotoController);
