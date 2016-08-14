angular.module('thinkingAngular')
    .directive('myInsert', function() {
        return {
            restrict: 'EAC',
            link: function($scope, $element, $attrs, controller, $transclude) {
                if (!$transclude) {
                    throw minErr('ngTransclude')('orphan',
                        'Illegal use of ngTransclude directive in the template! ' +
                        'No parent directive that requires a transclusion found. ' +
                        'Element: {0}',
                        startingTag($element));
                }

                $transclude($scope, function(clone) {
                    $element.empty();
                    $element.append(clone);
                });
            }
        };
    })
    .directive('addressList', function() {
        return {
            restrict: 'E',
            transclude: true,
            template: [
            '<ul>',
                '<li ng-repeat="item in items">',
                    '<div my-insert></div>',
                '</li>',
            '</ul>'
            ].join(''),
            scope: {
                items: '=',
                action: '&'
            },
            link: function (scope, el, attrs, ctrls, $transcludeFn) {
                
            }
        }
    });