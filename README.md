# Next.js 공부용 프로젝트

## CSS

- 전역 CSS 적용
  - 전역 CSS 는 생성 후 `_app.tsx` 에 적용하면 적용됨
- 모듈 CSS 적용
  - 모듈 CSS 는 생성 후 맞는 페이지에 적용하면 적용됨

## 폴더 구조

## Router

Next.js 는 파일 시스템 라우팅을 사용한다.

- 파일 시스템 라우팅은 파일 시스템 구조에 따라 라우팅을 결정하는 방식

### Link

- Link 는 페이지 이동을 위한 컴포넌트
- 페이지 이동 시 페이지 이동 애니메이션이 적용됨
- 페이지 전체를 불러오는 것이 아닌, 필요한 데이터만 렌더링 해오기 때문에 초기 로딩 속도가 빠름

### useRouter

- useRouter 는 현재 라우터 정보를 가져오기 위한 훅
- 현재 라우터 정보를 가져오기 위해서는 현재 라우터 정보를 가져오기 위한 훅을 사용해야 함

```
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter(); // 현재 라우터 정보를 가져오기 위한 훅
  const { q } = router.query; // 라우터 쿼리 이름 지정

  return <div>Search: {q}</div>;
}
```

## Axios

- Axios 는 HTTP 요청을 보내기 위한 라이브러리
- 라이브러리 설치
  - `npm install axios`
- 라이브러리 사용
  - `import axios from 'axios';`
- Instance 생성
  - `const instance = axios.create({ baseURL: 'https://learn.codeit.kr/api/codeitmall' });`
  - baseURL 은 기본 요청 URL

## Redirects

- 리다이렉트 설정

  - `redirects` 에 설정
  - `redirects` 는 배열로 설정
  - 배열 안에 객체로 설정
  - 객체 안에 `source` 와 `destination` 을 설정

- 페이지의 주소를 변경하고 싶을 때 사용

[문서 참고](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects)

## Image

- Image 는 이미지를 표시하기 위한 컴포넌트
- 이미지 표시 시 이미지 크기를 지정할 수 있음
- Lazy Loading 이 적용되어 이미지 로딩 시 초기 로딩 속도가 빠름
- Next.js의 Image 컴포넌트에서 외부 이미지를 사용할 때 보안상의 이유로 해당 이미지 도메인을 미리 설정이 필요하다.

```
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
```
