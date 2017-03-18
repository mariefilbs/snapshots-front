function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html',
    controller: 'LayoutController'
  })
  .state('root.home',  {
    url: '/home',
    //template: `<p>Welcome to SnapShots! Please excuse our site construction.</p>`
    templateUrl: 'templates/list-photo.tpl.html',
    controller: 'PhotoController'
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
   .state('root.developers', {
     url: '/developers',
     templateUrl: 'templates/developers.tpl.html',
   })
  //  .state('root.home.select-photo', {
  //    url: '/photos/{{ photo.id }}',
  //    templateUrl: 'templates/select-photo.tpl.html',
  //    controller: 'PhotoController'
  //  })
   .state('page-not-found', {
     url: '/not-found',
     template: `<h2>So sorry! Unable to find that URL.</h2>`
   })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
