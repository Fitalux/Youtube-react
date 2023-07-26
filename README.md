# Youtube-react

 <img src="https://github.com/Fitalux/Youtube-react/blob/main/src/styles/display.png" />

# VIEW SITE

https://fitalux-apisite-youtube.netlify.app

# DESC

react에 youtube API를 사용하여 제작한 유튜브 API 사이트입니다. <br>
useState와 useEffect, useParams를 사용하여 유튜브 API 데이터와 서치 기능을 구현하였으며, react player 기능을 사용하여 섬네일 클릭 시 영상이 재생될 수 있도록 제작하였습니다.<br><br><br>

# 사용 스택

React <br>
: React는 페이스북에서 개발한 사용자 인터페이스(UI) 라이브러리로, 웹 애플리케이션의 UI를 구축하기 위해 사용됩니다. <br>
React는 컴포넌트 기반으로 동작하며, 각 컴포넌트는 독립적이고 재사용 가능한 코드 조각입니다. React는 가상 DOM을 활용하여 효율적으로 UI를 업데이트하고, 단방향 데이터 흐름을 따르는 컴포넌트 기반 아키텍처를 제공합니다.<br><br><br>

react-router-dom<br>
: React 기반의 웹 애플리케이션에서 브라우저의 주소를 기반으로 페이지 간의 라우팅을 처리하기 위한 라이브러리입니다. React로 작성된 SPA(Single Page Application)에서 브라우저 주소에 따라 다른 페이지를 표시하고 관리할 수 있도록 도와줍니다.<br><br><br>

useEffect<br>
: React의 훅(Hook) 중 하나로, 컴포넌트의 렌더링과 관련하여 특정 작업을 수행하기 위해 사용됩니다. useEffect는 컴포넌트가 렌더링된 이후에 실행되며, 주로 데이터 가져오기, 구독 설정, 이벤트 리스너 등의 작업을 처리할 때 사용됩니다.<br><br><br>

useState<br>
: React의 훅 중 하나로, 함수형 컴포넌트에서 상태(state)를 관리하기 위해 사용됩니다. useState를 사용하여 상태를 정의하고, 해당 상태 값을 변경하는 함수를 제공받아 상태를 업데이트할 수 있습니다.<br><br><br>

useNavigate<br>
: react-router-dom에서 제공하는 훅으로, 라우터를 사용하여 페이지 간 이동을 수행할 때 사용됩니다. useNavigate를 호출하면 페이지 이동을 위한 함수를 제공받고, 이 함수를 호출하여 원하는 경로로 페이지를 이동시킬 수 있습니다.<br><br><br>

useParams<br>
: react-router-dom에서 제공하는 훅으로, 동적 라우팅을 사용하여 URL의 파라미터 값을 추출하기 위해 사용됩니다. 예를 들어, /users/:id와 같은 경로에서 :id 부분에 해당하는 값을 추출할 때 useParams를 사용할 수 있습니다.<br><br><br>

fetch<br>
: 웹 브라우저에서 제공하는 API로, 네트워크를 통해 리소스를 가져오기 위해 사용됩니다. fetch 함수를 사용하면 서버로 HTTP 요청을 보내고, 응답을 받아올 수 있습니다. 일반적으로 JSON 데이터를 가져오거나 서버와 통신할 때 fetch를 사용합니다.<br><br><br>

onKeyPress<br>
: React에서 사용되는 이벤트 핸들러 함수 중 하나로, 키보드의 키를 눌렀을 때 발생하는 이벤트를 처리하기 위해 사용됩니다. 주로 입력 필드에서 사용자의 키 입력을 감지하고 특정 동작을 수행하는 데 사용됩니다. 여기에서는 input box에 검색어를 입력하고 엔터 키를 눌렀을 때 검색 이벤트를 실행 시키는 데에 사용 됩니다.<br><br><br>

아이콘 라이브러리 <br>
: react-icons에서 제공하는 아이콘으로 npm i react-icons로 설치 후, import로 연동하여 사용할 수 있습니다. (https://react-icons.github.io/react-icons/)<br><br>
