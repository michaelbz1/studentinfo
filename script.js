(function(angular) {
  'use strict';
angular.module('ngRepeat', ['ngAnimate']).controller('repeatController', function($scope) {
  $scope.friends = [
    {name:'Joan', period:1, count:0},
    {name:'Jessie', period:5, count:0},
    {name:'Johanna', period:6, count:0},
    {name:'Joy', period:7, count:0},
    {name:'Mary', period:8, count:0},
  ];
});
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/