'use strict';

import PopUp from './popup.js';

// 요소 정의
const field = document.querySelector('.gameField');
const fieldRect = field.getBoundingClientRect();

const playBtn = document.querySelector('.play');
const timerBtn = document.querySelector('.timer');
const counterBtn = document.querySelector('.counter');


// 값 초기화
const carrotSize = 80;
const carrotCount = 6;
const bugCount = 6;
const gameDuration = 20;

// 사운드 정의
const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const winSound = new Audio('./sound/game_win.mp3');
const bgSound = new Audio('./sound/bg.mp3');


//게임이 시작되었는지 알고있는 변수
let started = false;
//최종스코어
let score = 0;
//남은 시간
let time = undefined;


//class 생성
const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener( () => {
    startGame();
});

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
    playSound(bgSound);
}





//게임 중지
function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showTextReply("Try Aagin😥");
    // showTextReply("Try Aagin😥");
    playSound(alertSound);
    stopSound(bgSound);
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




// 게임 재실행
    // replayBtn.addEventListener('click', () => {
    //     startGame();
    // });

    // function showTextReply(text){
    //     popupText.innerHTML = text;
    //     popupField.classList.remove('popup-hide');
    // }


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
                playSound(alertSound);
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



    

// 당근과 벌레 제거하기
field.addEventListener('click', onFiledClick);
function onFiledClick(e){
    if(!started){
        return;
    } 
    const target = e.target;
    if(target.matches('.carrot')){
        // 당근
        target.remove();
        score ++;
        playSound(carrotSound);
        updateScore();
        if( score === carrotCount ){
            stopGameTimer();
            showTextReply("You Win🎉");
            playSound(winSound);
            stopSound(bgSound);
            hideGameButton();
        }
    } else if(target.matches('.bug')){
        // 벌레
        stopGameTimer();
        playSound(bugSound);
        showTextReply("Try Aagin😥");
        playSound(alertSound);
        stopSound(bgSound);
        hideGameButton();
    }
}
function updateScore(){
    counterBtn.innerHTML = carrotCount - score;
};



    function gamePlay () {
        // 클릭할 때마다 당근과 벌레들이 계속 추가되는것을 방지
        score = 0;  
        counterBtn.innerHTML = carrotCount;
        field.innerHTML = "";

        // 벌레와 당근을 생성한 뒤 field에 랜덤으로 추가
        addiItem('carrot', carrotCount, 'imgs/carrot.png');
        addiItem('bug', bugCount, 'imgs/bug.png');
    }
    
    function addiItem(name, count, img){
        const x1 = 0;
        const y1 = 0;
        const x2 = fieldRect.width - carrotSize;
        const y2 = fieldRect.height - carrotSize;
        for(let i = 0; i < count; i++){
            const item = document.createElement('img');
            item.setAttribute('class', name );
            item.setAttribute('src', img);
            item.style.position = 'absolute';
            
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            field.appendChild(item);
            // console.log(item);
        }
    }

    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    

    // 사운드 재생
    function playSound(sound){
        sound.play();
    }

    // 사운드 중지
    function stopSound(sound){
        sound.pause();
        sound.currentTime = 0;
    }





