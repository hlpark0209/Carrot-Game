'use strict';

// 사운드 정의
const bugSound = new Audio('./sound/bug_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const winSound = new Audio('./sound/game_win.mp3');
const bgSound = new Audio('./sound/bg.mp3');
const carrotSound = new Audio('./sound/carrot_pull.mp3');


export function playCarrot(){
    playSound(carrotSound);
}

export function playBug(){
    playSound(bugSound);
}

export function playAlert(){
    playSound(alertSound);
}


export function win(){
    playSound(winSound);
}

export function bg(){
    playSound(bgSound);
}
export function bgStop(){
    stopSound(bgSound);
}


// 사운드 재생
function playSound(sound){
    sound.play();
    sound.currentTime = 0;
}

// 사운드 중지
function stopSound(sound){
    sound.pause();
}