(function() {
  'use strict';

  angular
    .module('thinkingAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
