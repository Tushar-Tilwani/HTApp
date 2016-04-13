// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

(function () {
  var debug = document.getElementById("debug");
  debug.innerHTML = "yayayyayayay";
                var now = new Date().getTime(),
                    _1_sec_from_now = new Date(now + 1 * 1000);
                    
                //var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';
                debug.innerHTML = "FFF: "+cordova.plugins;

                cordova.plugins.notification.local.schedule({
                    id: 1,
                    title: 'Scheduled with delay',
                    text: 'Test Message 1',
                    at: _1_sec_from_now,
                    sound: 'file://beep.caf',
                    badge: 12
                });
            })();


    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.medicines', {
      url: '/medicines',
      views: {
        'tab-medicines': {
          templateUrl: 'templates/tab-medicines.html',
          controller: 'MedicinesCtrl'
        }
      }
    })
    .state('tab.medicine-detail', {
      url: '/medicines/:medicineId',
      views: {
        'tab-medicines': {
          templateUrl: 'templates/medicine-detail.html',
          controller: 'MedicineDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
