function SelectPhotoController ($scope, $http, $state, $stateParams, SERVER) {

  $scope.photo = {};

  function init () {
    var id = $stateParams.id;
    $http.get(`${SERVER}/photos/${id}`).then(resp => {
      $scope.photo = resp.data;
      console.log(resp.data);
    });
  }

  init();

  $scope.deactivate = function () {
    $state.go('root.home');
  }

}

SelectPhotoController.$inject = ['$scope', '$http', '$state', '$stateParams', 'SERVER'];

export default SelectPhotoController;
