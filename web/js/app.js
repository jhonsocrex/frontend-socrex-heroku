'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('socrex', [
  'ngRoute',
  'socrex.filters',
  'socrex.services',
  'socrex.directives',
  'socrex.controllers',
  'checklist-model'
]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/preferencesForm', {templateUrl: 'partials/preferencesForm.html'});

  $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'initialFormCtrl'});
  $routeProvider.when('/listings', {templateUrl: 'partials/listingsList.html', controller: 'listingsListCtrl'});
  $routeProvider.when('/listings/preference/:preferenceId/page/:pageNumber', {templateUrl: 'partials/listingsList.html', controller: 'listingsListCtrl'});
  //$routeProvider.when('/listingDetails', {templateUrl: 'partials/listingDetails.html'});
  $routeProvider.when('/listingDetails/:listingId', {templateUrl: 'partials/listingDetails.html', controller: 'detailsCtrl'});
  $routeProvider.when('/listings/filter/:filterId', { templateUrl: 'partials/listingsList.html', controller: 'listingsListCtrl'})

  //$routeProvider.when('/listings', {templateUrl: 'partials/listings.html'});

  $routeProvider.when('/landingQuestions', {templateUrl: 'partials/landingQuestions.html', controller: 'landingQuestionsController'});
  
  $routeProvider.when('/listing/:listingId', {templateUrl: 'partials/partial1.html', controller: 'listCtrl'});
  
  //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'listCtrl2'});
  
  //$routeProvider.when('/listings/filter/:filterId', { templateUrl: 'partials/partial2.html', controller: 'listCtrl2'})
  
  //$routeProvider.otherwise({redirectTo: '/view2'});
  
}]);
