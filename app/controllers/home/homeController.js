(function(){
  'use strict';
  angular.module('drivingBehaviorApp')
    .controller('homeController', ['$location', '$scope', 'CONSTANT',
      function($location, $scope, CONSTANT) {
        var vm = this;
        
        /*  Start Variables declaration  */
        vm.CONSTANT = CONSTANT;
        /*  End Variables declaration  */

        /*  Start Functions declaration  */

        vm.goMain = function () {
            $location.path('/main');
        };

        /*  End Functions declaration  */
        
        /*  Start Initial Code Controller  */

        $(document).ready(function(){
            $('.parallax').parallax();
            });

        /*  End Initial Code Controller  */

      }])
})();