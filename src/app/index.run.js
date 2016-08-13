(function() {
  'use strict';

  angular
    .module('thinkingAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $rootScope.$on('$stateChangeError', function() {
      $log.debug(arguments[5]);
    });
    $log.debug('runBlock end');
  }

})();
