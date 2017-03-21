 angular.module('myapp')
 .controller('indexController', function($timeout) { 
      
 })
  .controller('pageone', function($scope,$http,$sce,$timeout){
    
      $scope.swiperSliderOne = {};
      $scope.onReadySwiper = function (swiper) {
         $scope.swiperSliderOne = swiper;
     };
     $scope.swiperSlidertwo = {};
      $scope.onReadySwiper2 = function (swiper) {
         $scope.swiperSlidertwo = swiper;
     };
       $scope.loading.show();
       $scope.show_content = false;
       $http({
                method: 'GET',
                url: base_url+'home/jananTEstYESSYwds',  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                   $scope.loading.hide();
                   $scope.show_content = true;
                   $scope.img = base_img; 
                   $scope.sliders = response.data.slider; 
                   $scope.about = response.data.about;
                   $scope.short_des = $sce.trustAsHtml($scope.about[0].short_des);
                   $scope.services = response.data.services;
                   $timeout(function(){
                        $scope.swiperSliderOne.update();
                        $scope.swiperSlidertwo.update();
                         
                    });
                   
            }, function errorCallback(response) {
                         $scope.loading.hide();
                        ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                    }); 
        });
  })
  .controller('ServiceDetail', function($scope,$sce) { 
     $scope.img = base_img; 
     $scope.title =  showService.topPage.data.title; 
     $scope.image =  showService.topPage.data.picname; 
     $scope.date =  showService.topPage.data.date;
     $scope.text =  $sce.trustAsHtml(showService.topPage.data.text); 

 });
 