(function(){
    'use strict';
    angular.module('drivingBehaviorApp')
      .factory('comunServices', function (CONSTANT) {
        
        var fieldsConcatenate = function (array, property, message) {
            var content = '';
            if (((array || {})[property] || {}).length > 0) {
              var field = '';
              content = message;
              array[property].forEach(function(element) {
                if (field != '') {
                  field += ', ';
                } 
                field += element.$name;
              });
              content = content.replace(CONSTANT.fieldReplace, field);
            };
            return content;
        };

        return {
            fieldsConcatenate: fieldsConcatenate
        }
      });
})();