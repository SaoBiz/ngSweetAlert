(function () {
    'use strict';

    angular
        .module('ngSweetAlert', [])
        .factory('SweetAlert', SweetAlert);

    SweetAlert.$inject = ['$window', '$q'];

    function SweetAlert($window, $q) {
        var _swal = $window.swal || angular.noop;
        var service = {
            show: show,
            prompt: prompt,
            input: input,
            success: success,
            error: error,
            warning: warning,
            info: info,
            close: close,
            showInputError: showInputError
        };

        return service;

        //////////

        function show() {
            var args = [].slice.call(arguments, 0);
            if (typeof(args[0]) === 'string') {
                _swal.apply(undefined, args);
            } else if (typeof(args[0]) === 'object') {
                var defered = $q.defer();
                var callback = function (result) {
                    defered.resolve(result);
                };

                _swal(args[0], callback);

                return defered.promise;
            }
        }

        function prompt(title, message) {
            return show({
                title: title,
                text: message,
                type: 'warning',
                showCancelButton: true
            });
        }

        function input(title, message, inputType) {
            return show({
                title: title,
                text: message,
                type: 'input',
                showCancelButton: true,
                inputType: inputType || 'text'
            });
        }

        function success(title, message) {
            show(title, message, 'success');
        }

        function error(title, message) {
            show(title, message, 'error');
        }

        function warning(title, message) {
            show(title, message, 'warning');
        }

        function info(title, message) {
            show(title, message, 'info');
        }

        function close() {
            _swal.close();
        }

        function showInputError(message) {
            _swal.showInputError(message);
        }
    }
})();