

$.getJSON("https://www.cricbuzz.com/match-api/livematches.json")

.done(function(data){
    var score = document.getElementById("score");
    var status = document.getElementById("status");
    var match = document.getElementById("match");
    var cseries = document.getElementById("series");
    var i;
    var keys;
    
    keys=Object.keys(data.matches);
    for(i=0;i<keys.length;i++){
        if((data.matches[keys[i]].match_index)==0){
            var cscore = data.matches[keys[i]].score.batting["score"];
            var cstatus = data.matches[keys[i]].status;
            var cmatch1 = data.matches[keys[i]].team1["name"];
            var cmatch2 = data.matches[keys[i]].team2["name"];
            var cseries = data.matches[keys[i]].series["name"];
            score.innerHTML += " "+cscore;
            status.innerHTML = " "+cstatus;
            match.innerHTML += cmatch1+" VS "+cmatch2;
            series.innerHTML += " - "+cseries;
//            console.log(data.matches[keys[i]].score.batsman[0])
            console.log(data.matches[keys[i]].players)
        }
    }
})