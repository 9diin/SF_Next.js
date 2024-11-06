/** 동기(Synchronous)와 비동기(Asynchronous)
 * 동기: 순차적으로 코드 실행 O
 * 비동기: 순차적으로 코드 실행 X
 */

console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 1000);
console.log(4);

/** ---------------------------------------------------------------------------------------------------- */

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
    console.log("clicked!!");
});
console.log("Hello World!!");

/** ---------------------------------------------------------------------------------------------------- */

/** 콜백 패턴
 * 코드가 점점 들여쓰기 방식으로 작성하게 되는데 이를 '콜백 지옥'이라고 한다.
 */
const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000);
};
const b = (callback) => {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000);
};
const c = (callback) => {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000);
};
const d = () => console.log(4);

a(() => {
    b(() => {
        c(() => {
            d();
        });
    });
});
