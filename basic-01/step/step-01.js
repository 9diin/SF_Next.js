const ajax = new XMLHttpRequest();
const API_URL = `https://api.hnpwa.com/v0/news/1.json`;

ajax.open("GET", API_URL, false); // 마지막 옵션은 비동기로 처리할 건지 아닌지 선택
ajax.send();

// console.log(ajax.response); // 개발자 도구에서 JSON 형태로 조회가 되는지 확인하기
// console.log(newsFeed);

/** 응답 값을 객체로 바꿔보기 (JSON 형태일 경우에만 가능) */
/** 학습 순서
 * 1. 백틱(``)을 활용하여 기본 문자열 출력해보고, ${} 사용하여 데이터 바인딩 해보기
 * 2. for문 활용하여 반복 UI 호출해보기
 * 3. document.createElement() 함수를 사용해서 JavaScript에서 새로운 HTML 요소를 생성하기
 * */

const newsFeed = JSON.parse(ajax.response); // 응답 값을 newsFeed 변수로 받기
const ul = document.createElement("ul"); // ul 태그 생성

for (let i = 0; i < newsFeed.length; i++) {
    /** 중괄호 안에 작성된 코드 실행이 끝나면 i값이 변화 */
    /** over write를 어떻게 방지할까? */
    const li = document.createElement("li");
    li.innerHTML = newsFeed[i].title;

    ul.appendChild(li);
}

document.querySelector("#app").appendChild(ul);
