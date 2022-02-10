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

### 핵심 기능

#### 무한 슬라이드 만들기

좌, 우를 클릭해도 끝없이 이어지는 슬라이드 만들기

```js
// 랜덤한 숫자를 current라는 state로 저장
const [current, setCurrent] = useState(initialSlide);

// 왼쪽 오른쪽을 클림함에 따라 current에 해당하는 수를 낮추고 높이는 방식
const prevSlide = () => {
  setCurrent(current - 1);
};
const nextSlide = () => {
  setCurrent(current + 1);
};
```

```js
// 버튼들을 통해 슬라이드의 상태값이 바뀔 때마다 화면 이동
useEffect(() => {
  // 2번 슬라이드에 도착하면 20번 슬라이드로 현재 슬라이드를 변경
  if (current === 2) {
    setTimeout(() => {
      setMotion(false);
      setCurrent(20);
    }, 500);
    setTimeout(() => {
      setMotion(true);
    }, 600);
  }
  // 25번 슬라이드에 도착하면 7번 슬라이드로 현재 슬라이드를 변경
  if (current === 25) {
    setTimeout(() => {
      setMotion(false);
      setCurrent(7);
    }, 500);
    setTimeout(() => {
      setMotion(true);
    }, 600);
  }

  // current(현재 slide의 위치 번호)에 따라서 화면에 위치시키는 슬라이드들을 좌우로 움직여 보이게 함
  slickTrack.current.style.transform = `translateX(${
    -(slideWidth + slidePadding) * current
  }px)`;
}, [current, slideWidth, slidePadding]);
```

&nbsp;제가 구현한 무한 슬라이드의 핵심은 간단합니다. 슬라이드 정보들이 담긴 배열을 만들고 그 배열을 앞, 뒤로 세배로 만듭니다. 그리고 슬라이드를 넘기다가 **특정 위치 (위에서 슬라이드 2번 혹은 25번)에 도달하면 현재 슬라이드를 같은 이미지의 슬라이드로 이동**시켜줍니다. 2번 슬라이드인 경우 20번으로 25번 슬라이드의 겨우 7번 슬라이드로 이동시켜주는 방식으로 슬라이드가 무한으로 이어지게 만들었습니다.

### Trouble Shooting

#### Global Navigation Bar

<details>
<summary><b>창 크기 조절 시 catergories의 상태 변경 문제</b></summary>
<div markdown="1">

#### 원하던 동작

창 크기가 줄어들면 내비게이션 바 안에 메뉴의 개수가 줄어들었다가 다시 커지면 원래대로 돌아오기

#### 문제

- 스크린 사이즈 조절시 `categories`의 상태를 어떻게 변경해줘야 할지 알지 못했다.
- if 문을 사용해서 해결하려고 했지만, 무한 렌더링이 발생했고, 카테고리의 개수는 줄어들었지만 개수가 변경되버려서 원하는 대로 돌아오지 않았다.
- catergories.slice()를 통해 돌아올 때 기존 카테고리의 복사본으로 돌아오게 하고 싶었는데, 카테고리가 너무 많아지는 현상 발생

#### 해결

- 가져온 dataCategories를 initialState란 초깃값으로 저장해주고, categories를 초깃값을 넣어서 선언해줌으로 해결

```js
const initialState = dataCategories;

const [categories, setCategories] = useState(initialState);
const [screenSize, setScreenSize] = useState(window.innerWidth);

// 화면 사이즈가 바뀌면 screenSize 업데이트
const handleResize = () => {
  setScreenSize(window.innerWidth);
};

// 화면 사이즈를 관찰
useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

// 화면 사이즈에 따라 보여줄 nav 카테고리를 설정
useEffect(() => {
  // 화면사이즈가 767px보다 작아지면 카테고리 개수를 3개로 줄임
  if (screenSize <= 767) {
    setCategories(
      categories.filter((category) => {
        return category.id < 3;
      })
    );
  } else {
    // 767px 보다 화면 크기가 크다면 초깃값으로 돌아온다!
    setCategories(initialState);
  }
}, [screenSize, categories, initialState]);
```

</div>
</details>

<details>
<summary><b>컴포넌트명 동적으로 넘겨서 컴포넌트 생성하기</b></summary>
<div markdown="2">

#### 원하던 코드

버튼 컴포넌트들을 깔끔하게 컴포넌트명을 동적으로 넣어서 생성함으로 코드를 보기 편하게 만들고 싶었습니다.

#### 기존 코드

```js
function AsideList (props) {
  return (
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
  )
}
```

기존 코드는 **리액트를 쓰는 의미가 없다고 혼자 생각**했습니다. 이걸 어떻게 바꿀 수 있을까 생각했지만, svg값을 제가 건드릴 수는 없었습니다. 그래서 생각한게 컴포넌트의 목적이 html코드를 자바스크립트로 쉽게 사용하고 가독성 좋게 만드는 것이니 **버튼들을 컴포넌트로 만들자**고 생각했습니다.
그래서 복잡한 버튼코드들을 따로 빼내어 `SearchButton.js`, `NoticeButton.js` 파일을 생성해 집어넣고 `export` 해줬습니다. 그리고 작성한 코드가 다음과 같습니다.

#### 1차 개선 코드

```js
function AsideList (props) {
  return (
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
  )
}
```

정말 깔끔해졌습니다! 하지만 제 눈엔 아직 더 간편하게 만들 수 있을 것 같았습니다. 컴포넌트의 이름만 반복문안에서 바꿔 집어넣을 수만 있다면, 저 버튼들을 반복문을 통해서 간단하게 코드를 작성할 수 있을 것 같았습니다.

처음에는 배열 안에 버튼 컴포넌트들의 이름을 넣어서 만들려고 했지만, 그렇게 만드니까 **컴포넌트의 이름은 대문자로 시작해야 한다는 오류가 발생**했습니다. 분명히 대문자로 썻는데... 하지만 그 덕분에 더 좋은 코드를 작성할 수 있던 것 같습니다!

```js
import SearchButton from "./SearchButton.js";
import NoticeButton from "./NoticeButton.js";
import ProfileButton from "./ProfileButton.js";

const dataBtns = [
  {
    id: 0,
    btn: SearchButton,
    badge: false,
  },
  {
    id: 1,
    btn: NoticeButton,
    badge: true,
  },
  { id: 2, btn: ProfileButton, badge: true },
];

export default dataBtns;
```

그래서 위와 같은 **버튼의 이름**들과 **id번호**, 그리고 **badge의 유무**를 알 수 있는 정보를 담은 파일을 만들었습니다. 그리고 이 파일을 `Aside.js`에서 `import`해주고 다음과 같은 코드를 작성했습니다.

#### 2차 개선 코드

```js
function AsideList(props) {
  const items = props.btn.map((item) => {
    return (
      <li key={item.id}>
        <item.btn />
        {item.badge === true ? <span className="aside-badge">N</span> : null}
      </li>
    );
  });

  return items;
}
```

`item.btn` 부분에 `dataBtn.js`에서 설정한 버튼들의 이름이 들어가지고, 이를 통해 컴포넌트가 불러와집니다. 드디어 깔끔하게 만드는데 성공했습니다!

그리고 다음 뱃지의 유무에 따라 뱃지 생성 여부를 위해서 삼항 연산자를 사용했습니다. 가져온 데이터에서 뱃지의 유무를 확인한 후에 `true`를 반환하면 뱃지를 생성하게 만들었습니다.

</div>
</details>

#### Slider

<details>
<summary><b>float 속성을 사용해 화면에 슬라이드 나열 시키기</b></summary>
<div markdown="3">

#### 해결 방법

**슬라이드 크기**를 **부모 요소인 slide-track의 width / 슬라이드의 개수**로 설정해서 해결

#### 해결 과정

```js
<div className="slick-track">
  <Slide />
</div>
```

컴포넌트로 생성된 여러개의 `Slide`들을 `slick-track`이란 슬라이드가 담길 `div`에 슬라이드의 크기를 유지하면서 화면이 넘어가더라도 슬라이드를 가로로 나열시키고 싶었습니다.

flex를 이용해서 만들려고 했는데,(잠깐 되긴 했었는데 방법을 잊어버렸습니다...) 원티드 사이트에서 `float` 속성으로 만들어져 있어서 `float` 속성을 이용해서 만들기에 도전하기로 했습니다.

그러나 float을 사용한다고 가로로 나열되는 것이 아니라 일정 개수 이상이되면 결국 화면 사이즈를 넘어가지 못하고 아래로 나열되었습니다.

그래서 하다가 발견한 것이 float 속성을 사용해서 슬라이드를 동일한 간격으로 나열시키려면 아래와 같은 방식이 필요했습니다.

1. **float** 속성을 이용해서 슬라이드를 띄워 붙여주기
2. **width**값을 **부모 요소의 width/n(갯수)** 만큼 부여하기

```js
const [slideWidth, setSlideWidth] = useState(1060);
const [slidePadding, setSlidePadding] = useState(24);
const [trackWidth, setTrackWidth] = useState(slideWidth + slidePadding);

useEffect(() => {
  // 창의 크기가 1200px 보다 작으면 크기 변경 시작
  if (window.innerWidth < 1200) {
    setSlideWidth(window.innerWidth - 120);
    setSlidePadding(20);
    // 창의 크기가 1200px 이상이면 슬라이드와 크기 고정
  } else {
    setSlidePadding(24);
    setSlideWidth(1060);
  }
}, [screenSize]);
```

화면 크기에 따라 슬라이드의 크기와 패딩의 크기가 변경될 것이기 때문에 슬라이드의 크기와 `padding`의 크기를 `state`로 설정해주었습니다. 그리고 슬라이드가 담길 트랙의 `width`값을 `trackWidth`라는 `state`로 설정해서 **트랙의 크기가 슬라이드 크기와 패딩의 크기가 변경될 때마다 업데이트 되도록 설정**했습니다.

##### 슬라이드가 담길 트랙의 크기

```js
<div style={{width: trackWidth + 'px'}} className="slick-track">
```

##### 슬라이드의 크기

```js
<div style={{width: slideWidth + 'px'}} key={index} className="slick-slide">
```

그리고 위의 `state`들을 슬라이드의 `style`에 직접 적용해서 바로바로 변경될 수 있게 만들었습니다!

</div>
</details>

<details>
<summary><b>CSS calc() 함수 적용 안됨 오류</b></summary>
<div markdown="4">

#### 해결 방법

연산자 양 옆에 공백을 넣어서 해결

#### 해결 과정

```css
.prev-btn {
  left: calc((100% - 1210px) / 2);
}

.next-btn {
  right: calc((100% - 1200px) / 2);
}
```

</div>
</details>

<details>
<summary><b>슬라이드 이동 오류 문제</b></summary>
<div markdown="2">

#### 원하던 동작

버튼을 클릭하면 슬라이드의 크기만큼 좌우로 슬라이드가 이동하기

#### 문제

버튼을 클릭할 때마다 `current`(슬라이드 번호)가 변경되게 했는데, 화면이 움직이지 않았습니다.

사실 당연한 문제였습니다. 나는 **슬라이드의 번호만을 바꿔주었고, 아무런 화면의 변화가 일어나게 하는 코드를 작성한 적이 없었습니다**... 그래 놓고 왜 안움직여!! 이러다니 ㅎ.

가장 큰 문제는 애초에 생각을 잘못했었습니다. 원티드 사이트의 구조를 보고 만들고 있었지만, 슬라이드를 담을 div들의 존재 이유를 잘 몰랐던 것 같습니다.

하나는 슬라이드 리스트를 담을 거, 하나는 슬라이드를 어디까지 보이게 할지 결정하는 거, 하나는 슬라이드를 담을 리스트 등등... **슬라이드가 어떻게 동작해서 움직이는 지 몰랐기 때문**인 것 같습니다.

저는 슬라이드가 피피티처럼 넘어가는 거라고 생각을 하고 만들었던 것 같습니다. 하지만 다시 생각해보니 슬라이드의 이미지가 바뀌는 것이 아니라 **슬라이드가 좌우로 움직이고 화면에 그 과정이 그대로 보이려면 슬라이드를 담고 있는 상자가 움직여야 한단** 것을 알게 되었습니다.. 즉, `slick-track`이 움직여야 했습니다.

#### 해결

```js
const slickTrack = useRef();

return (
  ...
  <div className="slick-track" ref={slickTrack}>
  ...
)
```

useRef()를 통해서 슬라이드가 움직일 트랙을 가져왔습니다.

</div>
</details>

<details>
<summary><b></b></summary>
<div markdown="2">

#### 해결 방법

#### 해결 과정

</div>
</details>

<!--
- 슬라이드가 넘어갈 때마다 중심 슬라이드 이동 구현하기
버튼을 클릭할 때마다 state를 +-1씩 변경하게 했다 .
index와 current가 같으면 밝기를 100으로 해서 강조되게 했다.
문제는 아무리 버튼을 클릭해도 슬라이드가 이동하지 않았다.
flex로 설정했던 slide-track을 float: left로 설정했다.
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

- 마우스 클릭 시 요소가 작게 끌려오는 현상
user-select: none으로 해도 소용없었다.
슬라이드에 pointer-events: none을 통해 해결
````
