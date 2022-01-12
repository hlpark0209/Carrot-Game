'use strict';

import PopUp from './popup.js';
import Game from './game.js';



//게임이 시작되었는지 알고있는 변수
let started = false;
//최종스코어
let score = 0;
//남은 시간
let time = undefined;


//popup class 생성
const gameFinishBanner = new PopUp();


const game = new Game(10, 20, 20);
game.setGameStopListener((reason) => {
    // console.log(reason);
    let meg ;
    switch(reason){
        case 'win':
            meg = "You Win🎉";
            break;  
        case 'lose':
            meg = "Try Aagin😥";
            break;  
        default :
            throw new Error('not valid reason');
    }
    gameFinishBanner.showTextReply(msg);
});

gameFinishBanner.setClickListener( () => {
    game.start();
});






