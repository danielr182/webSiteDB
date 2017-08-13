(function(){
  'use strict';
  angular.module('drivingBehaviorApp')
    .controller('mainController', ['$location', '$scope', 'CONSTANT', 'MESSAGE', 'comunServices',
      function($location, $scope, CONSTANT, MESSAGE, comunServices) {
          var vm = this;

          /*  Start Variables declaration  */
          vm.CONSTANT = CONSTANT;
          /*  End Variables declaration  */

          /*  Start Functions declaration  */


          /*  End Functions declaration  */
          vm.ingresar = function (loginPageForm) {
            var content = comunServices.fieldsConcatenate(loginPageForm, CONSTANT.requiredHTML, MESSAGE.main.required_fields);
            if (content != '') {
              $.alert({
                theme: 'material',
                title: 'Alert!',
                closeIcon: true,
                type: 'blue',
                typeAnimated: true,
                buttons: {
                  aceptar: {
                    text: 'Aceptar',
                    btnClass: 'btn-red'
                  }
                },
                content: content,
              });
            }
          };
          /*  Start Initial Code Controller  */


          /*  End Initial Code Controller  */
      }])
})();