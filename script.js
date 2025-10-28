let t1score = 0;
let t2score = 0;

const team1scoreEl = document.getElementById('team1score')
const team2scoreEl = document.getElementById('team2score')

const team1nameBoxEl = document.getElementById('team1name-box')
const team2nameBoxEl = document.getElementById('team2name-box')

const team1inputBoxEl = document.getElementById('team1input-box')
const team2inputBoxEl = document.getElementById('team2input-box')

function addScore(score, team){
    if (team === 'team1score'){
        t1score += score;
        team1scoreEl.textContent = t1score;
        return;
    }
    t2score += score;
    team2scoreEl.textContent = t2score;
}

function resetScore(){
    t1score = 0;
    t2score = 0;
    team1scoreEl.textContent = t1score;
    team2scoreEl.textContent = t2score;
}

function editTeam(team){
    if (team === 'team1'){
        team1nameBoxEl.style.display = 'none';
        team1inputBoxEl.style.display = 'flex';
        return;
    }
    team2nameBoxEl.style.display = 'none';
    team2inputBoxEl.style.display = 'flex';
}

function saveTeam(teamNumber) {
    let tName = document.getElementById(`team${teamNumber}name-input`).value;
    document.getElementById(`team${teamNumber}name`).textContent = tName || `TEAM ${teamNumber}`;
    if (teamNumber === 1){
        team1nameBoxEl.style.display = 'flex';
        team1inputBoxEl.style.display = 'none';
        return;
    }
    team2nameBoxEl.style.display = 'flex';
    team2inputBoxEl.style.display = 'none';
}
