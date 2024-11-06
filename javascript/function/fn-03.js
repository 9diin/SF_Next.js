function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(7)); // NaN

/** 매개변수 패턴(Parameter Pattern) */
/** 기본값(Default Value) */
function sum1(a, b = 1) {}
console.log(sum(1, 2)); // 3
console.log(sum(7)); // 8

/** 구조 분해 할당 */
const user = {
    name: "9Diin",
    age: 32,
};

function getName(user) {
    const { name } = user;
    return name;
    // return user.name;
}
function getName2({ name }) {
    return name;
}
function getEmail({ email = "이메일이 없습니다." }) {
    return email;
}
console.log(getName(user)); // 9Diin
console.log(getName2(user)); // 9Diin
console.log(getEmail(user)); // undefined

const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];

function getSecondItem([a, b, c]) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}
console.log(getSecondItem(fruits));

/** 나머지 매개변수 */
function add(...rest) {
    console.log(rest);
    console.log(arguments); // 유사 배열(Array-Like) 배열 데이터는 아니기 때문에 활용도가 많이 떨어진다.
    /**
     * acc: 누적 값
     * cur: 현재 값
     */
    return rest.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4)); // 10
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
