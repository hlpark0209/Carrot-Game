'use strict';

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const carrotSize = 80;

export default class Field{
    constructor(carrotCount, bugCount){
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.gameField');
        this.fieldRect = this.field.getBoundingClientRect();   
        // this.onClick = this.onClick.bind(this); 
        this.field.addEventListener('click', (e) => this.onClick(e));
    }
    
    play(){
        field.innerHTML = '';
        // 벌레와 당근을 생성한 뒤 field에 랜덤으로 추가
        this._addiItem('carrot', this.carrotCount, 'imgs/carrot.png');
        this._addiItem('bug', this.bugCount, 'imgs/bug.png');        
    }

    


    _addiItem(name, count, img){
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - carrotSize;
        const y2 = this.fieldRect.height - carrotSize;
        for(let i = 0; i < count; i++){
            const item = document.createElement('img');
            item.setAttribute('class', name );
            item.setAttribute('src', img);
            item.style.position = 'absolute';
            
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
            // console.log(item);
        }
    }
    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }

    onClick = e => {
        const target = e.target;
        if(target.matches('.carrot')){
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick('carrot');
        } else if(target.matches('.bug')){
            this.onItemClick && this.onItemClick('bug');
        }
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

    // 사운드 재생
    function playSound(sound){
        sound.play();
    }
