'use strict';

import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

// 요소 정의
const playBtn = document.querySelector('.play');
const timerBtn = document.querySelector('.timer');
const counterBtn = document.querySelector('.counter');

// 값 초기화
const carrotCount = 6;
const bugCount = 6;
const gameDuration = 20;


//게임이 시작되었는지 알고있는 변수
let started = false;
//최종스코어
let score = 0;
//남은 시간
let time = undefined;


//popup class 생성
const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener( () => {
    startGame();
});

// field class 생성
const gameField = new Field(carrotCount, bugCount);
gameField.setClickListener(onItemClick);

function onItemClick(item){
    if(!started){
        return;
    } 
    if(item === 'carrot'){
        score++;
        updateScore();
        if( score === carrotCount ){
            stopGameTimer();
            showTextReply("You Win🎉");
            stopSound(bgSound);
            hideGameButton();
            sound.bgSound();
        }
    } else if(item === 'bug'){
        stopGameTimer();
        playSound(bugSound);
        showTextReply("Try Aagin😥");
        playSound(alertSound);
        stopSound(bgSound);
        hideGameButton();
    }
}


// 게임 재생
playBtn.addEventListener('click', () => {
    if (started){
        stopGame(); 
    }else{
        startGame();
    }
});


function startGame(){
    started = true;
    gamePlay();
    showStopBtn();
    showTimerAndCounter();
    startGameTimer();
    sound.bgSound();
}





//게임 중지
function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    sound.playAlert();
    sound.stopSound();
}

    function showStopBtn() {
        const icon = playBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.style.color = '#fff';
        icon.classList.remove('fa-play');
    }

    function hideGameButton(){
        playBtn.style.visibility = 'visible';
        const icon = playBtn.querySelector('.fas');
        icon.classList.add('fa-play');
        icon.classList.remove('fa-stop');
    }


    // timer 실행
    function showTimerAndCounter() {
        timerBtn.style.visibility = 'visible';
        counterBtn.style.visibility = 'visible';
    }

    function startGameTimer(){
        let remaininTimeSec = gameDuration;
        updateTimerText(remaininTimeSec);
        time = setInterval( () => {
            if( remaininTimeSec <= 0 ){
                clearInterval(time);
                stopGameTimer();
                showTextReply("Try Aagin😥");
                sound.playAlert();
                stopSound(bgSound);
                return;
            }
            updateTimerText(--remaininTimeSec);
        }, 1000);
    }



    
    // timer 중지
    function stopGameTimer(){
        clearInterval(time);
        
    }

    function updateTimerText(times) {
        const min = Math.floor( times / 60 );
        const sec = times % 60;
        timerBtn.innerHTML = `${min}:${sec}`;
    }



function updateScore(){
    counterBtn.innerHTML = carrotCount - score;
};



    function gamePlay () {
        // 클릭할 때마다 당근과 벌레들이 계속 추가되는것을 방지
        score = 0;  
        counterBtn.innerHTML = carrotCount;
        gameField.play();

    }





