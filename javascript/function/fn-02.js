/** 함수의 반환 및 종료 */
function hello() {
    return "Hello, World!";

    /** return 키워드 이후에 작성된 코드는 동작하지 않는다. */
}

function plusOne(num) {
    /** 방어 코드 작성 */
    if (typeof num === "number") {
        console.log("숫자를 입력해주세요.");
        return 0;
    }
    return num + 1;
}
console.log(plusOne(10)); // 11
console.log(plusOne()); // undefined + 1 -> NaN
