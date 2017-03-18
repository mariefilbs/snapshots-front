function PhotoController ($scope, $http, $state, SERVER) {
  $scope.active = 'is-active';
  $scope.isActive = false;
  $scope.photos = [];

  function init () {
    $http.get(`${SERVER}/photos`).then(resp => {
      $scope.photos = resp.data;
      //console.log(resp.data);
    });
  }
  init();

  $scope.create = function (data) {
    $http.post(`${SERVER}/photos`, data).then(resp => {
      $state.go('root.home');
    });
  };
  $scope.activateHeart = function() {
    $scope.isActive = !$scope.isActive;
  }
}

PhotoController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default PhotoController;
