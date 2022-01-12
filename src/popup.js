'use strict';

//외부에서도  class를 확인할수 잇음
export default class PopUp {
    // 필요한 것들 초기화
    constructor () {
    // 멤버변수 3개 생성
        this.popupField = document.querySelector('.popup__wrap');
        this.popupText = document.querySelector('.statusText');
        this.replayBtn = document.querySelector('.replay');
        this.replayBtn.addEventListener('click', () => {
        this.onClick && this.onClick();
        this.hide();
        });
    }
    // 팝업이 클릭될 때마다 그 등록된 콜백함수를 호출
    setClickListener(onClick){
        this.onClick = onClick;
    }

    showTextReply(text){
        this.popupText.innerHTML = text;
        this.popupField.classList.remove('popup-hide');
    }

    hide(){
        this.popupField.classList.add('popup-hide');
    }

} 

