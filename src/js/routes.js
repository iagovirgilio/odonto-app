angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/Principal',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('orientaODeHigieneBucal', {
    url: '/Higiene',
    templateUrl: 'templates/orientaODeHigieneBucal.html',
    controller: 'orientaODeHigieneBucalCtrl'
  })

  .state('signup', {
    url: '/Singup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('page', {
    url: '/doencas',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/Login')


});