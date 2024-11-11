const app = document.querySelector("#app");

const ajax = new XMLHttpRequest();
const NEWS_URL = `https://api.hnpwa.com/v0/news/1.json`;
const CONTENT_URL = `https://api.hnpwa.com/v0/item/@id.json`;

const store = {
    currentPage: 1,
    totalPages: 1,
    feeds: [],
};

/** API 호출 함수 */
function getData(url) {
    ajax.open("GET", url, false);
    ajax.send();

    return JSON.parse(ajax.response);
}

function makeFeeds(feeds) {
    for (let i = 0; i < feeds.length; i++) {
        feeds[i].read = false;
    }
    return feeds;
}

/** 글 목록 페이지 호출 함수 */
function getNewsFeed() {
    let newsFeed = store.feeds;
    const newsList = [];
    store.totalPages = Math.ceil(newsFeed.length / 10); // 총 페이지 수 계산

    let template = `
        <div class="bg-gray-200 max-w-2xl min-h-screen">
            <div class="bg-white text-xl">
                <div class="mx-auto px-4">
                    <div class="flex justify-between items-center py-6">
                        <div class="flex justify-start">
                            <h1 class="text-2xl font-semibold">Hacker News</h1>
                        </div>
                        <div class="items-center justify-end text-base">
                            <a href="#/page/{{__prev_page__}}" class="text-gray-500">
                                이전 페이지
                            </a>
                            <a href="#/page/{{__next_page__}}" class="text-gray-500 ml-4">
                                다음 페이지
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="p-4 text-2xl text-gray-700">
                {{__news_feed__}}        
            </div>
        </div>
    `;

    if (newsFeed.length === 0) {
        newsFeed = store.feeds = makeFeeds(getData(NEWS_URL));
    }

    for (let i = 10 * (store.currentPage - 1); i < store.currentPage * 10; i++) {
        newsList.push(`
            <div class="p-6 ${newsFeed[i].read ? "bg-red-100" : "bg-white"} flex flex-col gap-3 mt-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
                <div class="flex items-center gap-2 text-base">
                    <span class="w-10">제목 :</span>
                    <a href="#/show/${newsFeed[i].id}" class="truncate">${newsFeed[i].title}</a>
                </div>
                <div class="w-full flex items-center gap-4">
                    <div class="grid grid-cols-4 gap-4 text-sm text-gray-500">
                        <div class="w-full flex items-center justify-start gap-2">
                            <i class="fas fa-user"></i>
                            ${newsFeed[i].user}
                        </div>
                        <div class="w-full flex items-center justify-start gap-2">
                            <i class="fas fa-heart"></i>
                            ${newsFeed[i].points}
                        </div>
                        <div class="w-full flex items-center justify-start gap-2">
                            <i class="fa fa-comment"></i>
                            ${newsFeed[i].comments_count}개
                        </div>
                        <div class="w-full flex items-center justify-start gap-2">
                            <i class="far fa-clock"></i>
                            ${newsFeed[i].time_ago}
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    template = template.replace("{{__news_feed__}}", newsList.join(""));
    template = template.replace("{{__prev_page__}}", `${store.currentPage > 1 ? store.currentPage - 1 : 1}`);
    template = template.replace("{{__next_page__}}", `${store.currentPage >= store.totalPages ? store.currentPage : store.currentPage + 1}`);

    app.innerHTML = template;
}

/** 글 상세 내용 호출 함수 */
function getNewsDetail() {
    const id = location.hash.substring(7);
    const newsContent = getData(CONTENT_URL.replace("@id", id));

    let template = `
        <div class="bg-gray-200 min-h-screen pb-8">
            <div class="bg-white text-xl">
                <div class="mx-auto px-4">
                    <div class="flex justify-between items-center py-6">
                        <div class="flex justify-start">
                            <h1 class="font-extrabold">Hacker News</h1>
                        </div>
                        <div class="items-center justify-end">
                            <a href="#/page/${store.currentPage}" class="text-gray-500">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-full border rounded-xl bg-white m-6 p-4">
                <h2>
                    ${newsContent.title}
                </h2>
                <div class="text-gray-400 h-20">
                    ${newsContent.content}
                </div>
                {{__comments__}}
            </div>
        </div>
    `;

    for (let i = 0; i < store.feeds.length; i++) {
        if (store.feeds[i].id === Number(id)) {
            store.feeds[i].read = true;
            break;
        }
    }

    function makeComment(comments, called = 0) {
        const commentString = [];

        for (let i = 0; i < comments.length; i++) {
            commentString.push(`
                <div style="padding-left: ${called * 40}px;" class="mt-4">
                    <div class="text-gray-400">
                        <i class="fa fa-sort-up mr-2"></i>
                        <strong>${comments[i].user}</strong> ${comments[i].time_ago}
                    </div>
                    <p class="text-gray-700">${comments[i].content}</p>
                </div>  
            `);

            /** 대댓글 */
            if (comments[i].comments.length > 0) {
                commentString.push(makeComment(comments[i].comments, called + 1));
            }
        }
        return commentString.join("");
    }
    app.innerHTML = template.replace("{{__comments__}}", makeComment(newsContent.comments));
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
window.addEventListener("hashchange", router);

/** 실행 */
router();
