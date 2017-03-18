 angular.module('myapp')
 .controller('gallery', function($scope,$location) {
     
 })
.controller('galleryDetail', function($scope,$location) { 
     
     
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
             ons.createDialog('fullScreenGallery.html', { parentScope: $scope,cancelable :true })
             .then(function(dialog) {
                 $scope.dialog = dialog;
                 dialog.show();
             }.bind(this));
         }
     }.bind(this);

})

