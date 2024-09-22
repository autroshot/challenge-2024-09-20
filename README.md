# 과제

## 환경 변수

Unplash의 클라이언트 아이디가 필요하다.

```
VITE_UNSPLASH_CLIENT_ID=your-client-id
```

`.env.local` 파일을 만들어 환경 변수를 작성하면 된다.

## 실행하기

```bash
npm install
npm run dev
```

## 주요 스택

- React
- Typescript
- Vite
- Tailwind CSS
- ESLint, Prettier

## 주요 사항

- 프로필 카드는 페이지를 열 때마다 랜덤으로 배치된다.
- 이메일 구독의 랜덤 이미지는 브라우저의 `localstorage`를 사용하여 구현되었다. 처음으로 방문했을 때만 Unplash API를 통해 랜덤한 이미지의 url를 가져와서 `localstorage`에 저장한다. 이후에는 해당 url를 이용하여 이미지를 불러온다.
- 랜드마크에 대한 지역, 연도 필터 기능을 구현했다. 연도 필터에서는 임의로 2개의 연도를 선택해야 랜드마크가 표시되게 만들었다.

## 개선 사항

급하게 개발하다 보니 연도 필터 부분에서는 컴포넌트 분리를 못했고 재사용성이 매우 떨어진다. 기능에는 문제가 없지만 코드 리팩터링이 필요하며 CSS에도 개선의 여지가 있다.
