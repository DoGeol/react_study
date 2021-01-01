# React Study - Shop

## 1. React Router

* 페이지를 추가하고 싶으면 React Router Dom을 사용
* react-router-dom
    1. BrowserRouter vs HashRouter
        * BrowserRouter : 기본 설정 *(서버 설정하여 잘못된 접근 페이지 설정등 필요)
        * HashRouter    : 서버에 잘못된 정보를 요청하지 않도록 하기 위해 사용

    2. index.js에서 App을 BrowserRouter등의 태그를 감싸고
    3. Apps.js에서 Route Tag를 사용하여 URL을 라우팅하여 사용
    4. useHistory 훅을 사용하여 뒤로가기 구현 가능
    5. Link 훅을 사용하여 href 대신에 사용 가능  
       `<div><Link to="/">Home</Link></div>`
    6. Switch 훅을 사용하여 Switch 태그를 감싸면 하나의 Router만 보여줌 (중복 방지)
        * 다만 중복 될 경우 제일 위의 라우터가 보여짐