var myApp = angular.module('myApp',[]);

myApp.controller('appCtrl',['$scope','$http',
	function($scope,$http){
		console.log("it's a search js");

		$scope.login=function(user,pwd){
			$http.get('/login/'+user+'/'+pwd).success(
					function(response){
						console.log(JSON.stringify(response));
						if(JSON.stringify(response)=="[]"){	
							alert("Login Failed!");
							//alert("input wrong!");
						}else{
							location.href="route_admin.html";
							// location.href="campus.html";
						}
					});
		};


		// $scope.give=function(start,end){
		// 	location.href="route_user.html?start="+start+"&end="+end;
		// };

		$scope.give=function(start,end){
				if ( start==end) {alert("Please select different departure and destination stops!");}
				else
					{
						location.href="route_user.html?start="+start+"&end="+end;
					}
		};



		$scope.search=function(start,end){
			//location.href="route_user.html";
			console.log(start);
			console.log(end);
			$http.get('/search/'+start+'/'+end).success(
				function (response){
					console.log("i get the routes i requested");
					
					//location.href="route_user.html?$scope.route="+response;
					$scope.route=response;
					//$location.url("index.html");
					//window.location.replace=("index.html");
					//location.href="index.html?$scope.route="+response;
					//window.location.href='index.html';
				});
		};
		
	}]);

		
