angular.module('myPopup', [])
    .service('myPopup', function(
        $q,
        $injector,
        $templateCache,
        $templateRequest,
        $rootScope,
        $compile,
        $controller,
        $document
    ) {
        this.open = function(config) {
            var defer = $q.defer();
            config.resolve = config.resolve || {};
            var resolvePromises = $q.all(_.mapValues(config.resolve, function(item) {
                return $injector.invoke(item)
            })).catch(function(e) {
                defer.reject(e)
            });

            if (!config.template && !config.templateUrl) {
                throw new Error('Missing template')
            }

            resolvePromises.then(function(resolvedData) {
                var templatePromise = $q.when(config.template ||
                    $templateCache.get(config.template) ||
                    $templateRequest(config.templateUrl));

                templatePromise.then(function(realTemplate) {
                    var scope = $rootScope.$new();
                    $controller(config.controller, _.assign({
                        $scope: scope
                    }, resolvedData));
                    
                    var element = angular.element(realTemplate);
                    $compile(element)(scope);

                    scope.close = function(data) {
                        defer.resolve(data);
                        scope.$destroy();
                        element.remove()
                    };

                    angular.element($document[0].body).append(element);
                })
            });
            return defer.promise;
        }
    });