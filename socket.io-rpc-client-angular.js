var angular = require('angular');
/**
 * factory which returns a connect function
 */
angular.module('RPC', []).factory('$RPC', ['$rootScope', '$log', '$q', require('./client')])
/**
 * @ngdoc directive
 * @name RPC.directive:rpcController
 * @restrict AC
 *
 * @description
 * Will instantiate angular controller when socket.io-rpc channel is established. This way it is possible to work with
 * it instantly without waiting on promises to resolve inside the controller itself.
 * @param {string} rpcChannel name of the channel to load
 * @param {string=} rpcBackend rpc object on scope
 * @param {string=} rpcAuth function on scope which serves as authorization token getter for this channel
 *
 */
	.directive('rpcController', function($controller, $q, $RPC, $log) {
		return {
			scope: true,
			compile: function compile(tEl, tAttrs) {
				return {
					pre: function(scope, iElement, attr, controller) {
						if (!attr.rpcChannel) {
							throw new Error("No channel name defined on rpc-controller element: " + iElement[0].outerHTML);
						}
						var ctrlName = attr.rpcController;
						var backend;
						if (attr.rpcBackend) {
							backend = scope.$eval(attr.rpcBackend);
							if (!backend) {
								throw new Error('Your backend is not on scope');
							}
						} else {
							backend = $RPC.defaultBackend;
						}

						var instantiate = function(promise) {
							promise.then(function(channel) {
								var localInj = {
									$scope: scope
								};
								localInj[attr.rpcChannel] = channel;
								var ctrl = $controller(ctrlName, localInj);
								iElement.children().data('$ngControllerController', ctrl);
							}, function(err) {
								$log.error("Cannot instantiate rpc-controller - channel failed to load");
								throw err;
							});
						};

						var promise = backend.loadChannel(attr.rpcChannel);
						instantiate(promise);

					}
				};
			}
		}

	});
