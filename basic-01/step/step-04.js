const app = document.querySelector("#app");

const ajax = new XMLHttpRequest();
const NEWS_URL = `https://api.hnpwa.com/v0/news/1.json`;
const CONTENT_URL = `https://api.hnpwa.com/v0/item/@id.json`;

/** API 호출 함수 */
function getData(url) {
    ajax.open("GET", url, false);
    ajax.send();

    return JSON.parse(ajax.response);
}

/** 글 목록 페이지 호출 함수 */
function getNewsFeed() {
    const newsFeed = getData(NEWS_URL);
    const newsList = [];

    newsList.push("<ul>");

    for (let i = 0; i < newsFeed.length; i++) {
        newsList.push(`
        <li>
            <a href="#${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
    `);
    }

    newsList.push("</ul>");
    app.innerHTML = newsList.join("");
}

/** 글 상세 내용 호출 함수 */
function getNewsDetail() {
    const id = location.hash.substring(1);
    const newsContent = getData(CONTENT_URL.replace("@id", id));

    /** 화면 초기화 */
    /** 라우터, 화면 처리기 만들기 */
    app.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href="#">목록으로</a>
        </div>
    `;
}

function router() {
    const routePath = location.hash;

    /** this.location.hash에 #만 반환할 경우에는 빈 값을 반환하기 때문에 아래 조건이 참이다. */
    if (routePath === "") {
        /** 첫 진입일 때 */
        getNewsFeed();
    } else {
        getNewsDetail();
    }
}

/** hash change를 활용하기 */
// window.addEventListener("hashchange", getNewsDetail);
window.addEventListener("hashchange", router);

/** 실행 */
router();
