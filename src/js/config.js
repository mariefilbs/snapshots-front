function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html',
    controller: 'LayoutController'
  })
  .state('root.home',  {
    url: '/home',
    template: `<h1>Welcome to SnapShots! Excuse the construction on our site!<h1>`,
    //templateUrl: 'templates/layout.tpl.html',
    controller: 'UserController'
  })
   .state('root.login', {
     url: '/users',
     templateUrl: 'templates/login.tpl.html',
     controller: 'UserController'
   })
   .state('root.photos', {
     url: '/photos',
     templateUrl: 'templates/add-photo.tpl.html',
     controller: 'PhotoController'
   })
   .state('page-not-found', {
     url: '/not-found',
     template: `<h2>So sorry! Unable to find that URL.</h2>`
   })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
