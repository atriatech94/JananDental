 angular.module('myapp')
 .controller('more', function($scope,$http) { 
    
     $scope.img = base_img; 
     $http({
                method: 'GET',
                url: base_url+'get_contact_us/jananTEstYESSYwds',  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                  
                    $scope.contact = response.data.contact;
                    $scope.team = response.data.team;
            });

         $scope.insta = function(){
            window.open($scope.contact.instagram,'_system');
         };   

     


 })
 .controller('team', function($scope,$sce,$http) { 
      $scope.img = base_img;
      $scope.description = $sce.trustAsHtml(morenav.topPage.data.description);
      $http({
                method: 'GET',
                url: base_url+'get_team/jananTEstYESSYwds/'+morenav.topPage.data.id,  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                  
                    $scope.images = response.data.images;
                    $scope.time_table = response.data.time_table;
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
                ons.createDialog('fullScreenSert.html', { parentScope: $scope,cancelable :true })
                .then(function(dialog) {
                    $scope.dialog = dialog;
                    dialog.show();
                }.bind(this));
            }
        }.bind(this);

 })
 .controller('contact', function($scope,$http,$httpParamSerializer) { 
     
     $scope.pm = {
         name : "",
         tell : "",
         text : ""
     }

     

     $scope.submit = function(){
         if($scope.pm.name == "" || $scope.pm.tell == "" || $scope.pm.text == ""){
               ons.notification.alert({
                      title: 'خطا',
                      buttonLabel:"بستن " ,
                      message: 'لطفا تمامی فیلد ها را پر کنید'
            }); 
            return false;
         }
          
          $scope.loading.show();
          $http({
                method: 'POST',
                url: base_url+'contact_us/jananTEstYESSYwds/',
                data: $httpParamSerializer({name : $scope.pm.name, tell : $scope.pm.tell , text : $scope.pm.text }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                 $scope.loading.hide();
                if(response.data.success == true){
                             ons.notification.alert({
                                    title: 'پیام',
                                    buttonLabel:"بستن " ,
                                    message: 'پیام شما با موفقیت ثبت شد'
                          }); 
                          morenav.popPage();
                }
                else
                {
                     ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در ثبت اطلاعات دوباره تلاش کنید'
                   }); 

                }
                
            }, function errorCallback(response) {
                     
                     $scope.loading.hide();
                       ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                   }); 
           });
     };

 })