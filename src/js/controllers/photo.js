function PhotoController ($scope, $http, $state, SERVER) {
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
  $scope.toggleLike = (photo) => {
    photo.liked = !photo.liked;
  }
  //to use below, add a likecount() to ng-glass on heart in modal
  // $scope.likeCount = () => {
  //   $scope.data = 0;
  //   $scope.data++;
  // }
}

PhotoController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default PhotoController;
