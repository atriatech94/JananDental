 angular.module('myapp')
.directive('serviceSlider' , function ($timeout){
    return {
        link: function(scope) {
             
            $timeout(function(){
                var swiper2 = new Swiper('.service-slide', {
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: true,
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 15,
                });
            });

        }
}})