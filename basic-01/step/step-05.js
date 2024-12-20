const app = document.querySelector("#app");

const ajax = new XMLHttpRequest();
const NEWS_URL = `https://api.hnpwa.com/v0/news/1.json`;
const CONTENT_URL = `https://api.hnpwa.com/v0/item/@id.json`;

const store = {
    currentPage: 1,
    totalPages: 1,
};

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
    store.totalPages = Math.ceil(newsFeed.length / 10); // 총 페이지 수 계산

    newsList.push("<ul>");

    for (let i = 10 * (store.currentPage - 1); i < store.currentPage * 10; i++) {
        newsList.push(`
        <li>
            <a href="#/show/${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
            </a>
        </li>
    `);
    }

    newsList.push("</ul>");

    /** 네비게이션 UI */
    /** 글 내용을 보는 해시인지 or 글 페이징을 하는 해시인기 구분해야한다.
     * page라는 단어를 추가
     * 기존 페이징 라우터에는 show라는 단어 추가
     */
    newsList.push(`
        <div>
            <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
            <a href="#/page/${store.currentPage >= store.totalPages ? store.currentPage : store.currentPage + 1}">다음 페이지</a>
        </div>
    `);

    app.innerHTML = newsList.join("");
}

/** 글 상세 내용 호출 함수 */
function getNewsDetail() {
    const id = location.hash.substring(7);
    const newsContent = getData(CONTENT_URL.replace("@id", id));

    /** 화면 초기화 */
    /** 라우터, 화면 처리기 만들기 */
    app.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href="#/page/${store.currentPage}">목록으로</a>
        </div>
    `;
}

function router() {
    const routePath = location.hash;

    /** this.location.hash에 #만 반환할 경우에는 빈 값을 반환하기 때문에 아래 조건이 참이다. */
    if (routePath === "") {
        /** 첫 진입일 때 */
        getNewsFeed();
    } else if (routePath.indexOf("#/page/") >= 0) {
        store.currentPage = Number(routePath.substring(7));
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
