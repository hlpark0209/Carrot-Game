'use strict';

const field = document.querySelector('.gameField');
const fieldRect = field.getBoundingClientRect();

const playBtn = document.querySelector('.play');
const timerBtn = document.querySelector('.timer');
const counterBtn = document.querySelector('.counter');

const popupField = document.querySelector('.popup__wrap');
const popupText = document.querySelector('.statusText');
const replayBtn = document.querySelector('.replay');


const carrotSize = 80;
const carrotCount = 10;
const bugCount = 5;
const gameDuration = 5;

//게임이 시작되었는지 알고있는 변수
let started = false;
//최종스코어
let score = 0;
//남은 시간
let time = undefined;



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
        updateScore();
        if( carrotCount - score === 0 ){
            stopGameTimer();
            showTextReply("You Win🎉");
        }
    } else if(target.matches('.bug')){
        // 벌래
        stopGameTimer();
        showTextReply("Try Aagin😥");
    }
}
function updateScore(){
    counterBtn.innerHTML = carrotCount - score;
};


// playBtn을 클릭했을때 실행
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
}

//게임 중지
function stopGame(){
    started = false;
    stopGameTimer();
    hideGameButton();
    showTextReply("Try Aagin😥");
}

    function showStopBtn() {
        const icon = playBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.style.color = '#fff';
        icon.classList.remove('fa-play');
    }

    function hideGameButton(){
        playBtn.style.visibility = 'hidden';
    }

// 게임 재실행
        replayBtn.addEventListener('click', () => {
            startGame();
            popupField.classList.add('popup-hide');
        });


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

    function showTextReply(text){
        popupText.innerHTML = text;
        popupField.classList.remove('popup-hide');
    }


    






    function gamePlay () {
        // 클릭할 때마다 item이 계속 추가되는것을 방지
        field.innerHTML = "";
        counterBtn.innerHTML = carrotCount;

        // 1. 벌레와 당근을 생성한 뒤 field에 랜덤으로 추가
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

    



