/** 재귀
 * 재귀 호출은 개념적으로 함수 내부에서 자기 자신을 다시 호출한다는 것
 * 주의사항은 재귀 호출은 무한으로 반복 실행되기 때문에 멈출 수 있는 조건식을 반드시 작성해주어야 한다.
 */

let i = 0;
const a = () => {
    console.log("A");
    i += 1;

    if (i < 4) {
        a();
    }
};
a();

/** ---------------------------------------------------------------------------------------------------- */

const userA = {
    name: "A",
    parent: null,
};
const userB = {
    name: "B",
    parent: userA,
};
const userC = {
    name: "C",
    parent: userB,
};
const userD = {
    name: "D",
    parent: userC,
};

const getRootUser = (user) => {
    if (user.parent) {
        return getRootUser(user.parent);
    }
    return user;
};
console.log(getRootUser(userC));
