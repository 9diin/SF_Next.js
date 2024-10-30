/** 산술 연산자 */
console.log(10 + 20); // 30
console.log(20 - 10); // 10
console.log(10 * 20); // 200
console.log(20 / 10); // 2

/** 나머지 연산자를 통해 짝수/홀수 구분지을 수 있다.*/
console.log(20 % 3); // 2 -> 나머지 연산자

function isEven(num) {
    return num % 2 === 0; // 짝수면 true 반환
}
console.log(isEven(5)); // false
console.log(isEven(10)); // true

const a = 10;
// a = a + 10;
console.log(a); // 상수는 재할당이 불가하다. 따라서 키워드를 let으로 변경한다.

let b = 20;
b += 20;
console.log(b); // 40

/**
 * 더하기 연산자 (+=)
 * 빼기 연산자 (-=)
 * 곱하기 연산자 (*=)
 * 나누기 연산자 (/=)
 * 나머지 연산자 (%=)
 */

/** ---------------------------------------------------------------------------------------------------- */

/** 증감(Increment & Decrement) 연산자 */

let c = 30;
console.log(c++); // 30
console.log(c); // 31

let d = 30;
console.log(++d); // 31
console.log(d); // 31

let e = 30;
console.log(e--); // 30
console.log(e); // 29

let f = 30;
console.log(--f); // 29
console.log(f); // 29
