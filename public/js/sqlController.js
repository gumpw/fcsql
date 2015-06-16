
var fcSql = angular.module('fcSql',[]);

fcSql.controller('sqlController',
        function($scope){
            $scope.sql = {seqName: "FC_SEQ_NAME"};
        });

function sqlTest($scope){
    //$scope.sql = {tester: "hello"};
}
