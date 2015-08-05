var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
    
    this.addNewGame = function(gameObject){
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
        
        if(Number(gameObject.homeTeamScore) > Number(gameObject.opponentScore)){
            var won = true;
        }else{
            var won = false;
        }
        
        return $http.post(url, gameObject);
    }
    
    this.getTeamData = function(team){
    
        var dfd = $q.defer();
        var url = 'https://api.parse.com/1/classes/' + team;
        
        $http.get(url).then(function(data){
        
            var results = data.data.results;
            var wins = 0, losses = 0;
            
            for(var i in results){
                if(results[i].won){
                    wins++;
                }else{
                    losses++;
                }
            }
            
            results.wins = wins;
            results.losses = losses;
            
            dfd.resolve(results);
        })
        
        return dfd.promise;
    }
});