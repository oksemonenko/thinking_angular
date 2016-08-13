angular.module('actionOnClickOutside', [])
    .directive('actionOnClickOutside', function ($document) {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                function listener(e) {
                    if (e.target !== el[0]) {
                        scope.$eval(attrs.actionOnClickOutside);
                        scope.$applyAsync();
                    }
                }

                $document[0].addEventListener('click', listener, true);
                el.$on('$destroy', function() {
                    $document[0].removeEventListener('click', listener, true)
                })
            }
        }
    });