 angular.module('myapp')
 .controller('blog', function($scope,$http) { 
        $scope.btn_hide = 1;
        $http({
                method: 'GET',
                url: base_url+'get_blog/jananTEstYESSYwds/0',  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                   $scope.posts = response.data.post;
             }, function errorCallback(response) {
                        ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                    }); 
           });

        $scope.more = function(){
           $scope.loading.show(); 
           let offset =  $scope.posts.length;
            $http({
                method: 'GET',
                url: base_url+'get_blog/jananTEstYESSYwds/'+offset,  
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function successCallback(response) {
                 $scope.loading.hide(); 
                 if(response.data.post.length < 8){
                     $scope.btn_hide = 0;
                 }
                 for(let i=0; i<response.data.post.length; i++)
                 {
                     $scope.posts.push(response.data.post[i]);
                 }  
                  
                
            
         }, function errorCallback(response) {
                        ons.notification.alert({
                        title: 'خطا',
                        buttonLabel:"بستن " ,
                        message: 'خطا در برقراری ارتباط با سرور'
                    }); 
           });
        };


       

}) 
.controller('blogMore', function($scope,$sce) { 
     $scope.title =  blognav.topPage.data.title; 
     $scope.image =  blognav.topPage.data.image;  
     $scope.date =  blognav.topPage.data.date;
     $scope.cat_name =  blognav.topPage.data.cat_name; 
     $scope.text =  $sce.trustAsHtml(blognav.topPage.data.text); 

 });