/** 파스칼케이스로 함수를 만들어준다. */
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const user = new User("9Diin", "Park");
console.log(user);

const user2 = new User("Neo", "Kim");
console.log(user2);

/** 객체 리터럴 방식을 통해서 만든 객체나 함수 내부에서 this라는 키워드로 각각의 속성을 만들고, new라는 키워드를 함께 호출해서 생성하는 객체 데이터는 같다고 볼 수 있겠죠?
 * 방금 새롭게 작성한 내용보다는 객체 리터럴 방식을 사용해서 객체를 만드는 것이 훨씬 편하기 때문에 객체 리터럴 방식을 많이 사용하는 겁니다.
 *
 * 그러나 두 번째 방식의 장점이라고 하면
 * getFullName이라는 메서드를 보다 효율적으로 사용하기 위함인데요.
 *
 * prototype을 통해 일반 함수를 할당해주면 되는데요. 주의할 점은 여기서 화살표 함수를 작성하면 안됩니다.
 * 왜냐하면, this라는 키워드의 정의가 달라지기 때문이에요.
 */

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

/** getFullName을 쓸 수 있는 구조가 되었다. */

console.log(user.getFullName()); // 9Diin Park
console.log(user2.getFullName()); // Neo Kim
