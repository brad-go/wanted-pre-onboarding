# 원티드 프리온보딩 코스 [프론트엔드 코스]

- 배포링크: https://bradgo-wanted.netlify.app/

## 목표

> 원티드 페이지 상단 영역 React 기반 클론 코딩하기

- React를 얼마나 잘 알고 잘 활용하는지 보여주기

![상단 캡쳐 영역](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F869a0685-508c-4507-9acb-450f44ffa0b5%2FUntitled.png?table=block&id=fe51fbc2-762d-4606-9f49-fa391cd13b9e&spaceId=4b97eaca-7938-4c43-b27c-a0c55795a841&width=2000&userId=13d5f1d1-9943-4b72-bcfc-6bcdb668b248&cache=v2)

##### 유의 사항

- 상단 캡쳐 영역 그대로 구현
- 개발자도구를 활용하여 원티드의 리소스(사진 등)를 그대로 사용

### 필수 구현사항

#### 1. 상단 GNB(Global Navigation Bar)

메뉴 클릭, hover 등 이벤트 구현 필요 x

- [x] 마크업 작업(HTML, CSS) **(필수)**
  - [x] 사이즈가 줄어들면 상단 GNB를 두 줄로 구현하기
  - [x] 로고 만들기
    - [x] 햄버거 버튼
    - [x] watned 로고
  - [x] 내비게이션 메뉴 카테고리 만들기
    - [x] 홈버튼은 모바일 환경에서 보이게
    - [x] 커뮤니티, AI 합격예측 오른쪽 상단에 update 표시
    - [x] 사이즈가 줄어들면 메뉴 카테고리 3개까지만 보여주기
  - [x] 부가 버튼 만들기
    - [x] 사이즈가 줄어들면 프로필 이미지, 기업 서비스 버튼 없애기

#### 2. 슬라이드(or 캐러셀) 영역

원티드 사이트와 똑같이 구현하기 / 라이브러리 사용 x

- [ ] 스와이프 이벤트 **(필수)**
  - [ ] 일정 길이 이하로 움직일 시 이미지 제자리로
  - [ ] 일정 길이 이상으로 움직일 시 이미지 넘기기
- [x] 왼/오 버튼 클릭 이벤트 **(필수)**
  - [x] 슬라이드 이동 시 0.5초 정도 소요
- [x] focus 이미지가 중심에 오게 하기(미완)
- [x] focus되는 이미지를 제외하고는 색이 어둡게 보이기
- [x] 이미지가 슬라이드해서 정중앙으로 오게되면 정보창이 나타나게 하기
- [x] 새로 고침 시마다 이미지 다르게 렌더링
- [ ] 3초 마다 이미지 자동으로 슬라이드하기
- [ ] hover 시에 이미지 슬라이드 멈추기

#### 3. 반응형(Responsive Web) 구현

- [x] GNB, 슬라이드 모두 반응형으로 구현 **(필수)** (미완)
- [x] 화면 사이즈에 따라 슬라이드의 크기가 반응형으로 조절

#### 4. GitHub Repository 주소와 배포 링크 제출

- [x] README.md에 배포 링크 작성하기 **(필수)**
- [x] Netlify로 배포하기 **(필수)**
<!--
- css calc 사용시 연산 양 옆에 공백이 반드시 필요! calc(100% - 1200px)
- css float으로 동일한 간격으로 나열하기 https://www.biew.co.kr/entry/%EC%9B%B9%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%85%94%EA%B0%80-%EC%95%8C%EA%B3%A0%EC%9E%88%EC%96%B4%EC%95%BC-%ED%95%A0-display-table-%EC%86%8D%EC%84%B1
- 사이즈 조절 시 categories의 상태 변경하기
  trouble
  사이즈 조절 시 categories의 상태를 어떻게 변경해야 할지 몰랐었다.
  스크린 크기가 변경될 때마다 변경되게 하고 싶었다.
  if 문을 밖에 쓰니 무한 렌더링이 발생했고, 카테고리의 개수는 줄어들어서
  원하는 대로 출력되도 원래대로 돌아오지 않았다.
  useEffect를 사용해서 screenSize를 감시하게 하고 다시 한 번 해봤다.
  무한 렌더링은 멈췄지만, 원래 카테고리 개수대로 돌아오지 않았다.
  categories.slice()로 복사해서 해보려고 했지만 이번에는 카테고리가 너무
  많아지는 현상이 있었다.
  갑자기 번뜩 초기값을 설정하면 되지! 라고 떠올랐다.
  저 카테고리들을 애초에 useState로 선언했었는데, 초깃값으로 선언해주고
  useState의 초깃값으로 가져왔다.

- 컴포넌트 명을 동적으로 넘겨서 컴포넌트 생성하기

기존 코드

```
<button type="button" className="search-button" >
  <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
    <defs>
      <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a"></use>
    </g>
  </svg>
</button>
  ...
<button className="mobile-hamburger">
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z" id="a"></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a"></use>
      </mask>
      <use fill="#333" xlinkHref="#a"></use>
      <g mask="url(#b)" fill="#333">
        <path d="M0 0h18v18H0z"></path>
      </g>
    </g>
  </svg>
</button>
```

1차 개선 코드

```
<li>
  <SearchButton />
</li>
<li>
  <NoticeButton />
  <span className="aside-badge">N</span>
</li>
<li>
  <ProfileButton />
  <span className="aside-badge">N</span>
</li>
```

2차 개선 코드

````
<AsideList btn={btns} />
```

- 슬라이드가 넘어갈 때마다 중심 슬라이드 이동 구현하기
버튼을 클릭할 때마다 state를 +-1씩 변경하게 했다 .
index와 current가 같으면 밝기를 100으로 해서 강조되게 했다.
문제는 아무리 버튼을 클릭해도 슬라이드가 이동하지 않았다.
flex로 설정했던 slide-track을 float: left로 설정했다.
slide-track의 넓이와 slide-track안에 있는 slide들의 총 넓이가 같으면
flex처럼 정렬되는 것을 알게 되었다.
useRef로 slide-track을 가져왔다.
버튼을 클릭할 때마다 tanslateX를 이용해서 slide-track을 좌우로 움직이게 하려고 했다.
처음 누를 때만 움직였고, 생각한 길이와 다르게 움직였다.
useEffect를 사용하려고 했는데, current가 배열이 아니라고 안된다고 했다. 그래서 인자로 [current]를 넣어주었더니 동작했다.
움직이는 길이는 -(slide의 넓이 + slide 패딩) * current값을 설정했더니 동작했다.


- 무한 슬라이드 구현
정말 쉽지 않았다. 인터넷을 참고하려고 해도 잘 나오지도 않고 어떻게 해야할 지 모르겠었다.
한참을 이리저리 클릭만 하다가 cloneNode로 작업을 하는 javascript영상을 보았다. 하지만 리액트에서 클론노드를 어떻게 사용해야 할지 모르겠었다.
그래서 가져오는 sliderData를 spread 문법을 통해서 한 배열에 세 개로 담아버렸다.
그러나 끝은 여전히 존재했다. 그래서 또 클릭만하다가 setState를 통해서 끝에 다 달으면(특정 슬라이드가 되면) 다시 중간으로 가게 만들었다. 성공이었다. 그러나 아까 만든 이동 동작 때문에 무한처럼 보이지 않았다.
그래서 동작을 없애기 위해 state를 boolean값으로 설정했다. 그리고 true가 되면 동작을 키고 false면 끄게 만들었고, sliderData에 on, off로 css문자열을 넣었다가 너무 반복되고 낭비인 것 같았다. 그래서 slick-track의 style에 삼항 연산자를 통해 바로 넘겨버렸다.
하지만 useEffect로 동작을 꺼버리니 슬라이드가 중간으로 다시 돌아가면 motion이 실행되지 않았다. 그래서 뒤에 다시 모션을 키는 setter함수를 넣었다.
이제는 한 번 돌고 중간으로 가면 동작이 꺼졌다가, 다시 돌고 중간으로 가면 동작이 켜지는 상황이 되었다. 중간으로 돌아가는 슬라이드가 되면 바로 모션이 꺼졌다 돌아간 후에 켜지기를 원했다. 그러다가 생각난게 setTimeout()이다.
모션이 움직는 시간이 0.5초이니까 0.6초 후에는 motion이 바로 켜지게 하기 위해 setTimeout을 사용했다. 그리고 모션이 0.5초간 진행되니까 0.5초동안은 setTimeout을 통해 motion을 끄고 중간으로 슬라이드를 움직였다. 성공이었다!!
이번에는 banner 안의 텍스트 카드가 문제였다 그래서 hasMotion을 이용해서 같은 방식으로 적용했더니 성공했다!
````
