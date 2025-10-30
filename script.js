let miliseconds = 0;
let mins = 0;
let secs = 0;
let timer = '00 : 00';
let isTimerRunning = false;
let setTimer;
let t1score = 0;
let t2score = 0;

function editTimer(){
    document.getElementById('edit-time').style.visibility = 'hidden';
    document.getElementById('save-time').style.visibility = 'visible';

    document.getElementById('time').style.visibility = 'hidden';
    document.getElementById('min-input').style.visibility = 'visible';
    document.getElementById('sec-input').style.visibility = 'visible';

     if (isTimerRunning || miliseconds > 0) {
        document.getElementById('min-input').value = mins;
        document.getElementById('sec-input').value = secs;
    }
    else {
        document.getElementById('min-input').value = '';
        document.getElementById('sec-input').value = '';
    }

    pauseTimer()
}

function saveTimer(){
    mins = parseInt(document.getElementById('min-input').value) || 0;
    secs = parseInt(document.getElementById('sec-input').value) || 0;

    if (mins > 59) mins = 59;

    if (secs > 59) secs = 59;

    miliseconds = (mins*60*1000) + (secs*1000)

    timer = String(mins).padStart(2,'0') + ' : ' + String(secs).padStart(2,'0')

    console.log(miliseconds)

    document.getElementById('edit-time').style.visibility = 'visible';
    document.getElementById('save-time').style.visibility = 'hidden';

    document.getElementById('time').style.visibility = 'visible';
    document.getElementById('time').textContent = timer;

    document.getElementById('min-input').style.visibility = 'hidden';
    document.getElementById('sec-input').style.visibility = 'hidden';
}

function startTimer(){
    if (!isTimerRunning){
        setTimer = setInterval(updateTime, 1000);
        isTimerRunning = true;
    }
}

function updateTime(){
    if (miliseconds <= 0) {
        clearInterval(setTimer);
        isTimerRunning = false;
        document.getElementById('time').textContent = '00 : 00';
        return;
    }

    miliseconds -= 1000
    mins = Math.floor(miliseconds / (1000*60))
    secs = Math.floor((miliseconds % (1000*60))/1000)

    timer = String(mins).padStart(2,'0') + ' : ' + String(secs).padStart(2,'0')
    document.getElementById('time').textContent = timer;
    return;
}

function pauseTimer() {
    clearInterval(setTimer)
    isTimerRunning = false;
    if (miliseconds > 0) {
        document.getElementById('min-input').value = mins;
        document.getElementById('sec-input').value = secs;
    }
    else {
        document.getElementById('min-input').value = '';
        document.getElementById('sec-input').value = '';
    }
}

function resetTimer(){
    miliseconds = 0;
    mins = 0;
    secs = 0;
    timer = '00 : 00'
    isTimerRunning = false;

    document.getElementById('time').textContent = '00 : 00';

    const minInput = document.getElementById('min-input');
    const secInput = document.getElementById('sec-input');

    minInput.value = '';
    secInput.value = '';


    minInput.placeholder = '00';
    secInput.placeholder = '00';

}

document.querySelectorAll('.time-input').forEach(input => {
    input.addEventListener('input', () => {
        const cursorPos = input.selectionStart;
        input.value = input.value.replace(/[^0-9]/g, '').slice(0, 2);
        input.setSelectionRange(cursorPos, cursorPos);
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === "Enter") saveTimer();
    });
});


function editTeam(teamNo){
    document.getElementById(`edit-team${teamNo}`).style.visibility = 'hidden';
    document.getElementById(`save-team${teamNo}`).style.visibility = 'visible';

    document.getElementById(`team${teamNo}-name`).style.visibility = 'hidden'
    document.getElementById(`team${teamNo}name-input`).style.visibility = 'visible'
}

function saveTeam(teamNo){
    let teamName = document.getElementById(`team${teamNo}name-input`).value || `TEAM ${teamNo}`

    document.getElementById(`edit-team${teamNo}`).style.visibility = 'visible';
    document.getElementById(`save-team${teamNo}`).style.visibility = 'hidden';

    document.getElementById(`team${teamNo}-name`).textContent = teamName
    document.getElementById(`team${teamNo}-name`).style.visibility = 'visible'

    document.getElementById(`team${teamNo}name-input`).style.visibility = 'hidden'
}

document.querySelectorAll('.name-input').forEach(input =>{
    input.addEventListener('keydown', (event) =>{
        const value = parseInt(event.target.dataset.value);
        if (event.key === "Enter") saveTeam(value)
    })
})

function addScore(teamNo, point){
    if (teamNo === 1){
        t1score += point;
        document.getElementById('team1-score').textContent = String(t1score).padStart(2, '0');
        return;
    }
    else{
        t2score += point;
        document.getElementById('team2-score').textContent = String(t2score).padStart(2, '0');
        return;
    }
}

function resetScore(){
    t1score = 0;
    t2score = 0;
    document.getElementById('team1-score').textContent = '00';
    document.getElementById('team2-score').textContent = '00';
    return;
}