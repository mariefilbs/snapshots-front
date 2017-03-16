function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/home',
    template: `<h1>Welcome to SnapShots! Excuse the construction on our site!<h1>`
    //templateUrl: 'templates/layout.tpl.html',
    //controller: 'PhotoController'
  })
   .state('login', {
     url: '/users',
     templateUrl: 'templates/login.tpl.html',
     controller: 'UserController'
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
