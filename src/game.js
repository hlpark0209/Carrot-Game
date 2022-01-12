'use strict';

import * as sound from './sound.js';
import Field from './field.js';

//builder pattern
export class GameBuilder{
    gameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    carrotCount (num){
        this.carrotCount = num;
        return this;
    }
    bugCount (num){
        this.bugCount = num;
        return this;
    }
    build(){}

}  


class Game{
    constructor(gameDuration, carrotCoun, bugCount){
        this.gameDuration = gameDuration;
        this.carrotCoun = carrotCoun;
        this.bugCount = bugCount;

        this.playBtn = document.querySelector('.play');
        this.timerBtn = document.querySelector('.timer');
        this.counterBtn = document.querySelector('.counter');

        // 게임 재생
        this.playBtn.addEventListener('click', () => {
            if (this.started){
                this.stop(); 
            }else{
                this.start();
            }
        });


        // field class 생성
        this.gameField = new Field(carrotCoun, bugCount);
        this.gameField.setClickListener(this.onItemClick);

        //게임이 시작되었는지 알고있는 변수
        this.started = false;
        //최종스코어
        this.score = 0;
        //남은 시간
        this.time = undefined;
    }
    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
    start(){
        this.started = true;
        this.gamePlay();
        this.showStopBtn();
        this.showTimerAndCounter();
        this.startGameTimer();
        this.sound.bgSound();
        }
    
    //게임 중지
    stop(){
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        this.sound.playAlert();
        this.sound.stopSound();
        this.onGameStop && this.onGameStop('cancel');
    }





    onItemClick = (item) => {
        if(!started){
            return;
        } 
        if(item === 'carrot'){
            this.score++;
            this.updateScore();
            if( this.score === this.carrotCount ){
                this.stopGameTimer();
                this.stopSound(bgSound);
                this.hideGameButton();
                this.sound.bgSound();
            }
        } else if(item === 'bug'){
            this.stopGameTimer();
            this.playSound(bugSound);
            this.playSound(alertSound);
            this.stopSound(bgSound);
            this.hideGameButton();
        }
    };
    

    
    showStopBtn() {
        const icon = this.playBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.style.color = '#fff';
        icon.classList.remove('fa-play');
    }

    hideGameButton(){
        this.playBtn.style.visibility = 'visible';
        const icon = playBtn.querySelector('.fas');
        icon.classList.add('fa-play');
        icon.classList.remove('fa-stop');
    }



    // timer 실행
    showTimerAndCounter() {
        this.timerBtn.style.visibility = 'visible';
        this.counterBtn.style.visibility = 'visible';
    }

    startGameTimer(){
        let remaininTimeSec = this.gameDuration;
        this.updateTimerText(remaininTimeSec);
        this.time = setInterval( () => {
            if( remaininTimeSec <= 0 ){
                this.clearInterval(this.time);
                this.stopGameTimer();
                sound.playAlert();
                this.stopSound(bgSound);
                return;
            }
            this.updateTimerText(--remaininTimeSec);
        }, 1000);
    }



    
    // timer 중지
    stopGameTimer(){
        clearInterval(this.time);
        
    }

    updateTimerText(times) {
        const min = Math.floor( times / 60 );
        const sec = times % 60;
        this.timerBtn.innerHTML = `${min}:${sec}`;
    }



    updateScore(){
        this.counterBtn.innerHTML = this.carrotCount - this.score;
    };



    gamePlay () {
        // 클릭할 때마다 당근과 벌레들이 계속 추가되는것을 방지
        this.score = 0;  
        this.counterBtn.innerHTML = this.carrotCount;
        this.gameField.play();

    }

}