/** 원시형 데이터 타입 */

/** 문자열, String */
const str1 = "Hello, World!"; // 큰 따옴표, 작은 따옴표 둘 중 아무거나 사용해도 무관
const str2 = "World!";
const str3 = `Hello, ${str2}`;

console.log(str3); // Hello, World!

/** 숫자, Number */
/** 주의할 점
 * 숫자 데이터와 다른 타입의 값을 연산할 경우 -> 2-1
 */
const num1 = 123;
const num2 = -123; // 음수
const num3 = -123.5678;
const pi = 3.14; // 부동소수점

console.log(num3 + undefined); // 2-1: NaN
console.log(typeof (num3 + undefined)); // number
console.log(typeof pi); // number

/** NaN이라는 Not a number라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으로 표시하여 반환한다.
 * 그래서 NaN 값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 있다는 것을 의미한다.
 */

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004 -> 컴퓨터에서 부동소수점을 연산할 때, 오류가 생길 수 있다.
console.log(typeof (a + b).toFixed(1)); // string
console.log(typeof Number((a + b).toFixed(1))); // number
console.log(Number((a + b).toFixed(1))); // 0.3

/** Boolean(불린)
 * true와 false라는 두 가지의 값만 사용하는 논리 데이터
 * true: 긍정의 의미를 가지고 있다.
 * false: 부정의 의미를 가지고 있다.
 */

const truthy = true;
const falsy = false;

if (truthy) {
    console.log("참 입니다.");
}

/** null과 undefined */
/**
 * null: 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적으로 표현
 * 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용됩니다.
 *
 * undefined: 변수가 선언되었지만 값이 할당되지 않았음을 나타냅니다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 때도 undefined가 반환됩니다.
 */
let value1 = null;
console.log(value1); // null
console.log(typeof value1); // object

setTimeout(function () {
    value1 = 30;
    console.log(value1);
}, 1000);

let value2;
console.log(value2); // undefined

/** ---------------------------------------------------------------------------------------------------- */

const user = {
    name: "daffy3",
    age: 32,
};
console.log(user.name); // daffy3
console.log(user.age); // 32
console.log(user.email); // undefined
console.log(user.password); // undefined
