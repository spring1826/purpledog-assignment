# purpledog-assignment

| 기술 스텍

- next.js
- typescript
- axios
- styled-components

| 사용한 라이브러리

- react-query
- swiper

## 실행 설명

1. package.json 파일의 의존성 패키지들을 일괄적으로 설치

```
$ npm install
```

2. 프로젝트 실행

```
$ npm run dev
```

## 파일구조

```bash
└── src
    ├── apis
    ├── assets
    ├── components
    ├── hooks
    ├── models
    ├── pages
    ├── styles
    └── templates

```

1. apis

   axios tnstance 생성

   fetch => 도메인이나 기능별로 구분해서 폴더를 생성한 후 각각의 fetch코드를 작성하는 것이 프로젝트가 커지는 경우 더 용이할 것으로 예상됩니다. 이번 프로젝트에서는 하나의 페이지에서만 사용하여 따로 폴더를 생성하지 않았습니다.

   hooks => useHook도 도메인이나 기능별로 구분해 프로젝트가 확장되는 경우 더 용이할 것으로 예상됩니다.

2. assets

   icon => SVGR은 svg 파일을 React 컴포넌트로 변환시켜주는 라이브러리를 적용해 컴포넌트로 사용하면 색상이나 사이즈를 더 쉽게 수정가능할 수 있어서 작업에 유용할 것으로 보입니다. 업무로 인해 완성에 목적으로 두어 적용하지 못했지만 추후에 적용해 볼 예정입니다.

   image => next에서 제공하는 Image컴포넌트를 사용했습니다. WebP와 같은 최신 이미지 형식으로 이미지를 자동으로 제공하고 캐싱 및 레이징 로딩 기능이 자동 탑재되어 빠른 페이지를 구현할 수 있습니다. 다만 아직 사용방법에 익숙하지 않아 레이아웃 과정에서 충돌이 일어났고 상위 컴포넌트의 position등을 확인하며 해결하는 과정이 필요했습니다.

3. components

   공통적을 사용되는 컴포넌트를 구현했습니다.

   고객추천section과 인기와인section에서 wine의 type이 달라 wine data를 그대로 넘기지 않고 필요한 데이터를 외부에서 받아서 렌더링하는 방법으로 타입이 다른 데이터를 하나의 컴포넌트에서 받아 렌더링하였습니다.

4. hooks

   count down 시간을 구하는 로직을 hook으로 분리 했습니다.

   day도 시간으로 수정 후 렌더링해주었습니다.

5. models

   데이터를 전달받아 내부의 데이터를 자동완성으로 받기 쉽도록 데이터의 타입을 지정했습니다.

6. pages

   파일 이름을 기반으로 하는 경로와 연결됩니다.

7. styles

   global => 기본적인 css를 reset하고 font를 적용합니다.

   theme => Colors, FontStyles 디자인시스템을 적용합니다.

8. templates

   유지 보수를 용이하게 하기 위해 비즈니스 로직(pages)과 레이아웃을 분리했습니다.
