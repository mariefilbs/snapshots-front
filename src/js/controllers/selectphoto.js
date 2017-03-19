function SelectPhotoController ($scope, $http, $state, $stateParams, SERVER) {

  $scope.comments = [];

  function init () {
    var id = $stateParams.id;
    $http.get(`${SERVER}/photos/${id}`).then(resp => {
      console.log(resp.data);
      $scope.photo = resp.data;
      $scope.comments = resp.data.Comments;


      console.log($scope.comments);
    });
  }

  init();

  $scope.addComment = function (data) {
    var id = $stateParams.id;
    var comment = {comment: data};
    $http.post(`${SERVER}/photos/${id}/comment`, comment).then(resp => {
      $scope.comment = resp.data;
      $scope.liveComment = resp.data;
    }).then($state.reload());
  }
  $scope.deactivate = function () {
    $state.go('root.home');
  };

}

SelectPhotoController.$inject = ['$scope', '$http', '$state', '$stateParams', 'SERVER'];

export default SelectPhotoController;
