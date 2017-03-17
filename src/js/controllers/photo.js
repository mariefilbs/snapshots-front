function PhotoController ($scope, $http, $state, SERVER) {
  $scope.photos = [];

  function init () {
    $http.get(`${SERVER}/photos`).then(resp => {
      $scope.photos = resp.data;
      console.log(resp.data);
    });
  }

  init();

  $scope.create = function (data) {
    $http.post(`${SERVER}/photos`, data).then(resp => {
      $state.go('root.home');
    });
  };
}

PhotoController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default PhotoController;
