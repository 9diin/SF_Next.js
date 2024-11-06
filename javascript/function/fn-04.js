/** 화살표 함수 */

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2)); // 3
// console.log(sum(10, 20)); // 30

/** 화살표 함수
 * function 키워드를 사용하지 않음
 * return 키워드로 로직이 시작하는 경우에는 return 키워드와 중괄호를 제거하여 사용할 수 있다.
 * 매개변수를 가질 수 있는데, 만약 매개변수가 단 한 개만 있다고 하면 매개변수를 감싸고 있는 소괄호를 생략할 수 있다.
 */
const sum = (a, b) => {
    return a + b;
};
const sum2 = (a, b) => a + b;
console.log(sum(1, 2)); // 3
console.log(sum(10, 20)); // 30

const a = () => {};
const b = (a) => {};
const c = (x) => x * x;
const d = (x) => {
    console.log(x); // 로직이 return으로 바로 시작하지 않기 때문에, 해당 코드는 생략 불가
    return x * x;
};
const e = () => {
    return { value: 1 };
};
const f = () => {
    value: 1;
}; // 중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에, 자바스크립트 문법적으로 이해할 수 없는 코드가 들어있기 때문에 오류가 난다.
const g = () => ({ value: 1 }); // 위 문제를 해결하기 위해 객체 데이터는 소괄호 묶어준다.
const h = () => {
    return [1, 2, 3];
};
const i = () => [1, 2, 3];
