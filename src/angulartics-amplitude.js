/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Contributed by http://github.com/martijndejongh
 * License: MIT
 */

(function(angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.amplitude
   * Enables analytics support for amplitude (http://amplitude.com)
   */
  angular.module('angulartics.amplitude', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {


      $analyticsProvider.registerPageTrack(function (path) {
        //No separate track page functionality
      });

      $analyticsProvider.registerEventTrack(function (action, properties) {
		if (amplitude) {
          amplitude.logEvent(action, properties);
		}
      });

    }]);
})(angular);
