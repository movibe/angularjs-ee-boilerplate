require({

  // libraries dependencies (fallback support)
  paths: {

    jquery: [
      'vendor/jquery/1.11.0/jquery.min'
    ],

    bootstrap: [
      'vendor/bootstrap/3.1.1/js/bootstrap.min'
    ],


    angular: [
      'vendor/angular.js/1.2.15/angular.min'
    ],

    angularRoute: [
      'vendor/angular.js/1.2.15/angular-route.min'
    ],

    angularResource: [
      'vendor/angular.js/1.2.15/angular-resource.min'
    ],

    angularAnimate: [
      'vendor/angular.js/1.2.15/angular-animate.min'
    ],

    toaster: [
      'vendor/toaster/0.3.0/toaster'
    ],

    ngProgress: [
      'vendor/ngProgress/1.0.3/ngProgress.min'
    ],


    // @begin: mock libs
    angularMocks: [
      'vendor/angular.js/1.2.15/angular-mocks'
    ],

    angularMocksBackend: [
      'vendor/angular-mocks-backend/0.1.4/angular-mocks-backend'
    ],
    // @end: mock libs


    lokijs: [
      'vendor/lokijs/0.0.1/lokijs.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'bootstrap': {
      deps: ['jquery']
    },

    'angular': {
      deps: ['bootstrap'],
      exports: 'angular'
    },

    'angularRoute': {
      deps: ['angular']
    },

    'angularResource': {
      deps: ['angular']
    },

    'angularAnimate': {
      deps: ['angular']
    },

    'ngProgress': {
      deps: ['angular']
    },

    'toaster': {
      deps:['angularAnimate']
    },


    // @begin: mock js shim/deps
    'angularMocks': {
      deps: ['angular']
    },

    'angularMocksBackend': {
      deps: ['angularMocks']
    }
    // @end: mock js shim/deps

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
