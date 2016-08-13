(function() {
  'use strict';

  angular
    .module('thinkingAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, myPopup) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1471101527290;
    vm.showSidebar = false;
    vm.showToastr = showToastr;

    vm.showPopup = function () {
      myPopup.open({
        template: '<div>Hallo world' +
        '<button ng-click="close(1)">1</button>' +
        '<button ng-click="close(2)">2</button></div>',
        controller: function() {},
        resolve: {
          testResolve: function($q) {
            return $q.when(true)
          }
        }
      }).then(function (data) {
        alert(data);
      })
    };

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
