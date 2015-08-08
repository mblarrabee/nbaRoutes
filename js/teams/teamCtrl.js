var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, $route, teamService, teamData){
    
    $scope.teamData = teamData;
    $scope.newGame = {};
    $scope.showNewGameForm = false;
    $scope.homeTeam = "";
    $scope.logoPath = "";
    
    $scope.toggleNewGameForm = function(){
        if($scope.showNewGameForm){
            $scope.showNewGameForm = false;
        }else{
            $scope.showNewGameForm = true;
        }
    }
    
    if($route.current.params.team === "utahjazz"){
        $scope.homeTeam = "Utah Jazz";
        $scope.logoPath = "../../images/jazz-logo.png";
    }else if($route.current.params.team === "losangeleslakers"){
        $scope.homeTeam = "Los Angeles Lakers";
        $scope.logoPath = "../../images/lakers-logo.png";
    }else if($route.current.params.team === "miamiheat"){
        $scope.homeTeam = "Miami Heat";
        $scope.logoPath = "../../images/heat-logo.png";
    }
    
    $scope.submitGame = function(){
        $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
        
        teamService.addNewGame($scope.newGame).then(function(){
            teamService.getTeamData($scope.newGame.homeTeam).then(function(response){
                $scope.teamData = response;
                $scope.newGame = {};
                $scope.toggleNewGameForm();
            })
        
        })
    }
    
console.log($scope);
});