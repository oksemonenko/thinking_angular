angular.module('thinkingAngular')
    .directive('myTab', function () {
        return {
            restrict: 'E',
            require: '^^myTabs',
            link: function (scope, el, attrs, myTabsCtrl) {
                myTabsCtrl.addTab(attrs.name, el)
            }
        }
    });