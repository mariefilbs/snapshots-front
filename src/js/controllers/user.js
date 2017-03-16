const SERVER = "https://intense-woodland-38140.herokuapp.com/";

function UserController ($scope, $http, SERVER) {
  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  }

  $scope.register = (user) => {
    console.log(user)
    $http.post(`${SERVER}/register`, user).then(resp => {
      var message = `Created new user: ${resp.data.username}`;
      $scope.notifications.push(message);
    }).catch(error => {
      console.log(error);
    });
  }

  $scope.login = (user) => {
    $http.post(`${SERVER}/login`, user).then(resp => {
      $state.go('/home');
    }).catch(error => {
       console.log(error);
    });
  }
}
UserController.$inject = ['$scope', '$http', 'SERVER'];

export default UserController;
