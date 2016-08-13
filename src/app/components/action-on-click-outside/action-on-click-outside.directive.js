angular.module('actionOnClickOutside', [])
    .directive('actionOnClickOutside', function ($document, $timeout) {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                function listener(e) {
                    if (e.target !== el) {
                        scope.$eval(attrs.actionOnClickOutside);
                        scope.$applyAsync();
                    }
                }
                $timeout(function() {
                    $document[0].addEventListener('click', listener);
                    scope.$on('$destroy', function() {
                        $document[0].removeEventListener('click', listener)
                    })
                });
            }
        }
    });