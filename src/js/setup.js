function setup ($rootScope, $cookies, $http) {

  $rootScope.$on('$stateChangeStart', (event, toState) => {
    console.log(toState);
  })

  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    console.log("That worked apparently?");
  })

  var token = $cookies.get('access-token');
  if (token) {
    $rootScope.loggedIn = true;
    $http.defaults.headers.common['access-token'] = token;
  }
}

setup.$inject = ['$rootScope', '$cookies', '$http'];

export default setup;
