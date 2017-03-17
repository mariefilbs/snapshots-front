function UserController ($scope, $http, SERVER, $cookies, $state, $rootScope) {
  $scope.notifications = [];
  console.log($cookies);

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  }

  $scope.register = (user) => {
    $http.post(`${SERVER}/users`, user).then(resp => {
      var message = `Created new user: ${resp.data.username}`;
      $scope.notifications.push(message);
    }).catch(error => {
      console.log(error);
    });
  };

  $scope.login = (user) => {
    console.log(user)
    $http.post(`${SERVER}/login`, user).then(resp => {
      $rootScope.loggedIn = true;
      $cookies.put('access-token', resp.data.token);
      $state.go('root.home');
    }).catch(error => {
       console.log(error);
    });
  }
}
UserController.$inject = ['$scope', '$http', 'SERVER', '$cookies', '$state', '$rootScope'];

export default UserController;
