/** resolve, reject 그리고 에러 핸들링 */

const delayAdd = (index, callback, error) => {
    setTimeout(() => {
        if (index > 10) {
            error(`${index}는 10보다 클 수 없습니다.`);
            return;
        }
        console.log("index:", index);
        callback(index + 1);
    }, 1000);
};

delayAdd(
    4,
    (res) => console.log(res),
    (err) => console.error(err)
);

delayAdd(
    13,
    (res) => console.log(res),
    (err) => console.error(err)
);

/** 에러 핸들링
 * 정상적으로 로직이 동작하게 되면, 두 번째 인수 부분의 콜백이 실행되는 것이고
 * 정상적으로 로직이 동작하지 않으면, 세 번째 인수 부분의 콜백이 실행되는 구조
 */

const newDelayAdd = (idx, cb, err) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idx > 10) {
                reject(`${idx}는 10보다 클 수 없습니다.`);
                return;
            }
            console.log("index:", idx);
            resolve(idx + 1);
        }, 1000);
    });
};

/** Promise 인스턴스를 반환하기 때문에 then 메서드를 사용할 수 있겠죠? */
newDelayAdd(9)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    /** finally 메서드나 구문 같은 경우에는
     * 비동기 코드 내부의 resolve, reject이 실행되는 것과 상관없이
     * 항상 실행되는 구조입니다.
     */
    .finally(() => console.log("완료"));

const wrap = async () => {
    // const res = await newDelayAdd(5);
    // console.log(res);

    try {
        const res = await newDelayAdd(13);
        console.log(res);
    } catch (err) {
        console.error(err);
    } finally {
        /** finally 메서드나 구문 같은 경우에는
         * 비동기 코드 내부의 resolve, reject이 실행되는 것과 상관없이
         * 항상 실행되는 구조입니다.
         */
        console.log("완료!");
    }
};
wrap();
