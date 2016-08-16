angular.module('thinkingAngular')
    .directive('myTabs', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: [
                '<ul>',
                    '<li ng-click="show(item)" ng-repeat="item in items">',
                        '{{item.name}}',
                    '</li>',
                '</ul>',
                '<div ng-transclude></div>'
            ].join(''),
            controller: function($scope) {
                $scope.items = [];
                $scope.show = function(item) {
                    $scope.items.forEach(function (item) {
                        item.element[0].style.display = 'none'
                    });
                    item.element[0].style.display = ''
                };
                this.addTab = function (name, el) {
                    $scope.items.push({
                        name: name,
                        element: el
                    })
                }
            }
        }
    });