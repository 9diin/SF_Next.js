/** 함수
 * 1. 함수 선언문(Declaration)
 * 2. 함수 표현식(Expression)
 */

/** 1. 함수 선언문(Declaration) */
// function fn() {}

/** 2. 함수 표현식(Expression) */
// const fn = function () {};

/** ---------------------------------------------------------------------------------------------------- */

/** 호이스팅(Hoisting)
 * 자바스크립트에서 함수 호이스팅(function hoisting)은 함수 선언이 해당 함수의 호출보다 먼저 평가되는 개념입니다.
 * 즉, 자바스크립트 엔진은 함수 선언을 코드의 실행 전에 끌어올려서 처리하기 때문에, 함수가 선언되기 전에 호출해도 에러가 발생하지 않습니다.
 * 따라서, 하단의 hello() 함수 호출의 코드가 함수 선언 이전에 작성되어도 작동하는 것이 바로 이 이유에서 입니다.
 *
 * 단, 함수 호이스팅 현상은 함수 선언문에서만 발생하고, 함수 표현문에서는 발생하지 않습니다.
 */

hello(); // hello, world!!
// fn(); // Cannot access 'fn' before initialization

function hello() {
    console.log("Hello, World!");
}

const fn = function () {
    console.log("Hello, World!");
};
