
## 📖 Project Name : Carrot-Game
* html/css/vanilla javascript로 만든 당근캐치 게임 입니다.

<br/>

## 📅 Working Period
* 2022.01.10. ~ 2022.01.12.
 
<br/>

## 📱 Preview
- **게임실행** 화면
<img src="https://user-images.githubusercontent.com/39701029/148992463-aad377b3-bec6-4bfd-8df8-ef2547a70c4d.jpg" width="70%">
<br/>

- '**You Win🎉'** 화면
<img src="https://user-images.githubusercontent.com/39701029/148992433-91057264-b44e-4935-a7b0-25cc2d925253.jpg" width="70%">
<br/>

- '**Try Aagin😥'** 화면
<img src="https://user-images.githubusercontent.com/39701029/148990930-2094f67d-da31-40e3-b6cf-36e1918be642.jpg" width="70%">
<br/>



## 🕹️ Play the Game!
- [ Play the Game!▶](https://hlpark0209.github.io/Carrot-Bug-Game/)

<br/>

## 🎨 UI Design Concept
* bg, bug, carrot 아이콘 사용
* 전체화면으로 게임 진행
* 재생/정지 버튼, 타이머, 카운트다운은 html, css로 구현
<br/>


## ⌨️ Using Skills
* HTML
* CSS
* JAVASCRIPT
<br/>


## ☑️ How to Play
1.  재생 버튼 클릭하세요.
2.  20초 내에 6개의 모든 **carrot 제거**해 주세요.
3.  주어진 시간안에 모두 제거했다면 **승리!**
4.  bug를 제거하거나 시간이 초과되었을 경우 **실패!**

<br/>


## 📑 Functional List
```
1. Play
  ✔️ Play 버튼 클릭시, bug와 carrot 아이콘이 랜덤으로 배치
  ✔️ bg 음악이 재생됨
  ✔️ 타이머가 20초부터 카운트다운 되기 시작
  ✔️ carrot은 6개부터 시작하며, carrot 클릭시 해당 carrot이 제거되면서 갯수가 -1씩 감소 및 효과음 재생
  ✔️ bug 클릭시, 'Try Aagin😥' 문구 및 Replay버튼이 포함된 팝업창과 효과음 재생
  ✔️ carrot과 bug가 제가되면서 효과음 재생
 
2. Stop
  ✔️ Play 버튼 클릭시, bg 음악이 중지되면서 화면이 일시정지됨 ( 타이머와 갯수 정지 )
  ✔️ 'Try Aagin😥'문구와 Replay버튼이 포함된 팝업창 실행

3. Replay
  ✔️ 모든요소 초기화 ( 게임 실행화면과 동일)
  ✔️ 해당 버튼은 팝업창 안에서만 존재
  ✔️ Replay 버튼 클릭시, 팝업창이 사라지면서 bug와 carrot이 랜덤으로 재배치
  ✔️ 'You Win🎉' 팝업창 : 지정된 시간 내에 모든 carrot을 제거했을 경우, 효과음 재생
  ✔️ 'Try Aagin😥' 팝업창 : 지정된 시간 내에 bug를 제거했거나 시간을 초과했을 경우, 효과음 재생
```
<br/>

## ☑️ Improvements

 * 게임 레벨에 따른 난이도를 상이하게 재구성
 * 코드 리팩토링 필요 ( class 별로 )
 * 기타 버그 수정
<br/>

