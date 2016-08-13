angular.module('actionOnClickOutside', [])
    .directive('actionOnClickOutside', function ($document) {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                function listener(e) {
                    var curElement = e.target;
                    while (curElement) {
                        if (curElement === el[0]) {
                            return;
                        }
                        curElement = curElement.parentNode
                    }
                    scope.$eval(attrs.actionOnClickOutside);
                    scope.$applyAsync();
                }

                $document[0].addEventListener('click', listener, true);
                el.on('$destroy', function() {
                    $document[0].removeEventListener('click', listener, true)
                })
            }
        }
    });