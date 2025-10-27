let t1score = 0;
let t2score = 0;

function addScore(score, team){
    if (team === 'team1score'){
        t1score += score;
        document.getElementById(team).textContent = t1score;
        return;
    }
    t2score += score;
    document.getElementById(team).textContent = t2score;
}

function resetScore(){
    t1score = 0;
    t2score = 0;
    document.getElementById('team1score').textContent = t1score;
    document.getElementById('team2score').textContent = t2score;
}