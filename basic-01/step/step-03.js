const app = document.querySelector("#app");

const ajax = new XMLHttpRequest();
const NEWS_URL = `https://api.hnpwa.com/v0/news/1.json`;
const CONTENT_URL = `https://api.hnpwa.com/v0/item/@id.json`;

function getData(url) {
    ajax.open("GET", url, false);
    ajax.send();

    return JSON.parse(ajax.response);
}
const newsFeed = getData(NEWS_URL);

const content = document.createElement("div");
const ul = document.createElement("ul"); // ul 태그 생성

/** hash change를 활용하기 */
window.addEventListener("hashchange", function () {
    const id = this.location.hash.substring(1);
    const newsContent = getData(CONTENT_URL.replace("@id", id));
    const title = this.document.createElement("h1");

    title.innerHTML = newsContent.title;
    content.appendChild(title);
});

/** 하단의 코드만 보아서는 HTML 영역의 구조가 명확하게 보이지 않는다.
 * DOM API 제거하기 -> 문자열만 가지고 UI를 만들기
 */

// for (let i = 0; i < newsFeed.length; i++) {
//     /** 중괄호 안에 작성된 코드 실행이 끝나면 i값이 변화 */
//     /** over write를 어떻게 방지할까? */
//     const li = document.createElement("li");
//     const a = document.createElement("a");

//     a.href = `#${newsFeed[i].id}`;
//     a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
//     // a.addEventListener("click", function () {});

//     ul.appendChild(li);
//     li.appendChild(a);
// }

for (let i = 0; i < newsFeed.length; i++) {
    const div = document.createElement("div");

    div.innerHTML = `
        <li>
            <a href="#${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>    
        </li>    
    `;
    /** firstElementChild는 DOM(문서 객체 모델)에서 사용되는 프로퍼티로,
     * 특정 요소의 첫 번째 자식 요소를 반환합니다.
     * 이 프로퍼티는 해당 요소가 자식 요소를 가지고 있지 않으면 null을 반환합니다.
     * 여기서는 div 태그는 필요없기 때문에
     * */
    ul.appendChild(div.firstElementChild);
}

/** 중복코드 제거 */
app.appendChild(ul);
app.appendChild(content);
