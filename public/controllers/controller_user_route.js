var myApp = angular.module('myApp',[]);

myApp.controller('appCtrl',['$scope','$http',
	function($scope,$http){
		console.log("it's a search js");

		
		//var absUrl = $location.absUrl();  //acquire url
	
		
		function GetQueryString(name)
		{
     		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     		var r = window.location.search.substr(1).match(reg);
     		if(r!=null)return  unescape(r[2]); return null;
		}

		var getstart=GetQueryString("start");
		var getend=GetQueryString("end");

		$http.get('/search/'+getstart+'/'+getend).success(
				function (response){
					console.log("i get the routes i requested");
					console.log(response);
					$scope.routes=response;
					//此处的routes与结果页面对应
				});

	}]);

		
