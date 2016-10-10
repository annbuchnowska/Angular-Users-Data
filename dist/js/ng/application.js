angular
  .module('app',[
    'ui.router',
    'controllerUsers',
    'controllerSingleUser',
    'navigationTop'
  ])
  .config( config );

function config( $stateProvider, $urlRouterProvider ) {
  $stateProvider
      .state( 'users', {
          url: '/users',
          templateUrl: 'partials/users.html',
          controller: 'users'
      } )
      .state( 'singleUser', {
          url: '/user/:id',
          templateUrl: 'partials/singleUser.html',
          controller: 'singleUser'
      } )
  $urlRouterProvider.otherwise( '/users' );
}
