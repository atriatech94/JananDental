 angular.module('myapp')
 .controller('gallery', function($scope,$http) {
  
     $http({
       
                method: 'GET',
                url: base_url+'get_gallery/jananTEstYESSYwds',  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
           
         }).then(function successCallback(response) {
                  $scope.img = base_img; 
                  $scope.galleries = response.data.gallery; 
         }); 
       
 })
.controller('galleryDetail', function($scope,$http) { 
      $scope.id =  gallerynav.topPage.data.id; 
      $scope.loading.show();
       $http({
                
                method: 'GET',
                url: base_url+'get_gallery_detail/jananTEstYESSYwds/'+$scope.id,  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
           
         }).then(function successCallback(response) {
                  $scope.loading.hide();
                  $scope.img = base_img; 
                  $scope.galleries = response.data.gallery; 
                 
        
      }, function errorCallback(response) {
                         $scope.loading.hide();
                        ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                    }); 
        });
       
     
     
     $scope.swiper = {}; 
     var on_ready = 0;
     $scope.active_swiper =  function(gallery_active) {
        
         $scope.gallery_active = parseInt(gallery_active);
         if(on_ready==1)
             $scope.swiper.slideTo($scope.gallery_active);
     }
     $scope.onReadySwiper = function(swiper){
          
         $scope.swiper = swiper; 
         on_ready = 1;
         swiper.slideTo($scope.gallery_active);
     }
     $scope.showDialog = function(gallery_active) {
        
         if ($scope.dialog) {
             $scope.dialog.show();
         } else {
              console.log($scope.galleries);
             ons.createDialog('fullScreenGallery.html', { parentScope: $scope,cancelable :true })
             .then(function(dialog) {
                 $scope.dialog = dialog;
                 dialog.show();
             }.bind(this));
         }
     }.bind(this);

})

