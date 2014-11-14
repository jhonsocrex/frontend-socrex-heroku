'use strict';

/* Directives */


angular.module('socrex.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive( 'jqueryuidialog', function() {
    var linkFn;
    linkFn = function( scope, element, attrs ) {
      var dialogConfig = {
        autoOpen: false,
        height: 350,
        width: 350,
        modal: true
      };
      
      element.dialog(dialogConfig);
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  }).directive( 'jrating', function() {
    var linkFn;
    linkFn = function( scope, element, attrs ) {
      // TODO: improve this, there must ve a better way to do this.
      element.attr('data-average', attrs.average);
      element.attr('data-id', attrs.id);
      element.jRating({isDisabled : true});
      
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  }).directive( 'bootstrapdatepicker', function() {
    var linkFn;
    linkFn = function( scope, element, attrs ) {
      element.datepicker({});
      
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  }).directive( 'bxslider', function() {
    var linkFn;
    linkFn = function( scope, element, attrs ) {
      var slider = element.bxSlider({adaptiveHeight: false, responsive:false});
      
      scope.$on('reload-slider', function() {
                slider.reloadSlider();
            });
    }
  
    return {
      restrict: 'A',
      //template: '<li><img src="http://images.craigslist.org/00V0V_7KrsygPW5pf_600x450.jpg" /></li>',
      template:   '<li ng-repeat="picture in pictures">' +
                     '<img ng-src="{{picture}}" alt="" />' +
                   '</li>',
      link: linkFn
    }
  }).directive('dynamic3', function ($compile, $parse) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, element, attr) {
      var slider = element.bxSlider({adaptiveHeight: true, responsive:false});
      
      attr.$observe('dynamic3', function(val) {
        element.html('');
        var directives = $parse(val)(scope);
        angular.forEach(directives, function(directive) {
          element.append($compile(directive)(scope));
          //slider.reloadSlider();
        });
        slider.reloadSlider();
      });
    }
  };
}).directive('dynamic4', function ($compile, $parse) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, element, attr) {
      //var slider = element.bxSlider({adaptiveHeight: true, responsive:false});
      
      attr.$observe('dynamic4', function(val) {
        
        var totalPages = $parse(val)(scope);
        console.log("totalPages");
        console.log(totalPages);
        console.log("typeof totalPages");
        console.log(typeof totalPages);
        var visiblePages = 10;
        if(totalPages !== undefined && totalPages > 0){
          // TOD: this only works once, if the totalpages changes ie. from 45 to 56 it wont be updated
          // ultil the user reload the page
          
          
          if(totalPages < visiblePages){
            visiblePages = totalPages;
            //visiblePages = 5;
          }
          
          console.log("totalPages");
          console.log(totalPages);
          console.log("visiblePages");
          console.log(visiblePages);
          
          element.twbsPagination({
            //totalPages: totalPages,
            totalPages: totalPages,
            //href : "javascript:void(0);",
            //visiblePages: visiblePages,
            visiblePages: visiblePages,
            //startPage: 1,
            /*
            onPageClick: function (event, page) {
              scope.$apply("clickedPaginationButton("+page+")");
            }*/
          });
        }
      });
    }
  };
}).directive( 'simplepaginator', function() {
    var linkFn;
    
    var customOnPageClick = function(pageNumber, event){
        console.log("pageNumber");
        console.log(pageNumber);
        console.log("event");
        console.log(event);
    }
    
    linkFn = function( scope, element, attrs ) {
      element.pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme',
        selectOnClick : false,
        hrefTextPrefix : "",
        onPageClick : customOnPageClick
      });
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  }).directive( 'twbspagination', function() {
    var linkFn;
    
    linkFn = function( scope, element, attrs ) {
      element.twbsPagination({
        totalPages: 35,
        visiblePages: 10,
        onPageClick: function (event, page) {
          scope.$apply("clickedPaginationButton("+page+")");
        }
      });
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  }).directive( 'map', function() {
    var linkFn;
    
    linkFn = function( scope, element, attrs ) {
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
      };
      new google.maps.Map(element,mapOptions);
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  }).directive( 'rank', function() {
    var linkFn;
    
    linkFn = function( scope, element, attrs ) {
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
      };
      new google.maps.Map(element,mapOptions);
    }
  
    return {
      restrict: 'A',
      link: linkFn
    }
  });
  