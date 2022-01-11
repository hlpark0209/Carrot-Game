'use strict';

const field = document.querySelector('.gameField');
const fieldRect = field.getBoundingClientRect();

const playBtn = document.querySelector('.play');
const timerBtn = document.querySelector('.timer');
const counterBtn = document.querySelector('.counter');
const carrotSize = 80;
const carrotCount = 10;
const bugCount = 5;

//게임이 시작되었는지 알고있는 변수
let started = false;
//최종스코어
let score = 0;
//남은 시간
let time = undefined;





// playBtn을 클릭했을때 실행
playBtn.addEventListener('click', () => {
    if (started){
        stopGame();
    }else{
        startGame();
    }
    
});


function stopGame(){
    
}

function startGame(){
    gamePlay();
    showStopBtn();
    showTimerAndCounter();
}




    function showStopBtn() {
        const icon = playBtn.querySelector('.fa-play');
        icon.classList.add('fa-stop');
        icon.style.color = '#fff';
        icon.classList.remove('fa-play');
    }

    function showTimerAndCounter() {
        timerBtn.style.visibility = 'visible';
        counterBtn.style.visibility = 'visible';
    }

    function gamePlay (e) {
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



