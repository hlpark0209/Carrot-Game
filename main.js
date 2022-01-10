'use strict';

const field = document.querySelector('.gameField');
const fieldRect = field.getBoundingClientRect();
const carrotSize = 80;
const playBtn = document.querySelector('.play');
const timerBtn = document.querySelector('.timer');

// const counterBtn = document.querySelector('.counter');




// 
// 3. 남은 당근갯수 10부터 시작

// playBtn을 클릭했을때 실행
playBtn.addEventListener('click', function() {

    function gamePlay (e) {
        // 1. 벌레와 당근을 생성한 뒤 field에 랜덤으로 추가
        addiItem('carrot', 5, 'imgs/carrot.png');
        addiItem('bug', 5, 'imgs/bug.png');
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

    gamePlay();

    //2. 타이머 시작
    const count = 10;
    


}, { once : true} );
