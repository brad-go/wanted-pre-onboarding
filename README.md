# 원티드 프리온보딩 코스 [프론트엔드 코스]

## 목차

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
- [x] 사이즈가 줄어들면 프로필 이미지, 기업 서비스 버튼 없애기
- [x] 사이즈가 줄어들면 메뉴 카테고리 3개까지만 보여주기

#### 2. 슬라이드(or 캐러셀) 영역

원티드 사이트와 똑같이 구현하기 / 라이브러리 사용 x

- [ ] 스와이프 이벤트 **(필수)**
  - [ ] 일정 길이 이하로 움직일 시 이미지 제자리로
  - [ ] 일정 길이 이상으로 움직일 시 이미지 넘기기
  - [ ] 마우스 클릭을 떼기 전까지 이미지에 focus
    - [ ] 나머지 이미지가 가운데로 와도 어둡게 보이기
- [ ] 왼/오 버튼 클릭 이벤트 **(필수)**
  - [ ] 슬라이드 이동 시 0.5초 정도 소요
- [ ] focus 이미지가 중심에 오게 하기
- [ ] focus되는 이미지를 제외하고는 색이 어둡게 보이기
- [ ] 이미지가 슬라이드해서 정중앙으로 오게되면 정보창이 나타나게 하기
- [ ] 새로 고침 시마다 이미지 다르게 렌더링
- [ ] 3초 마다 이미지 자동으로 슬라이드하기
- [ ] hover 시에 이미지 슬라이드 멈추기

#### 3. 반응형(Responsive Web) 구현

- [ ] GNB, 슬라이드 모두 반응형으로 구현 **(필수)**
- [ ] 화면 사이즈에 따라 슬라이드의 크기가 반응형으로 조절

#### 4. GitHub Repository 주소와 배포 링크 제출

- [ ] README.md에 배포 링크 작성하기 **(필수)**
- [ ] Netlify로 배포하기 **(필수)**
<!--
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
-->

````
