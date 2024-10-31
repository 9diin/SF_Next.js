/** 유니언과 리터럴
 *
 * 유니언: 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
 * 내로잉: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것
 *
 * 종합하자면 유니언과 내로이은 다른 주요 프로그래밍 언어에서는 불가능하지만,
 * 타입스크립트에서는 가능한 '코드 정보에 입각한 추론'을 해내는 강력한 개념입니다.
 */

let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

/** mathematician은 어떤 타입일까요?
 * 둘 다 잠재적인 타입이긴 하지만 무조건 undefined 이거나 혹은 string인 것도 아닙니다.
 * 즉, mathematician은 undefined 이거나 string일 수 있다는 말입니다.
 * 이렇게 '이거 혹은 저거'와 같은 타입을 '유니언 타입'이라고 부릅니다.
 * 유니언 타입은 값이 정확히 어떤 타입인지 모르지만 두개 이상의 옵션 중 하나라는 것을 알고 있는 경우에 코드를 처리하는 훌륭한 개념입니다.
 *
 * let mathematician: string | undefined
 */

/** ---------------------------------------------------------------------------------------------------- */

/** 유니언 타입 선언
 * 다음 예제에서 thinker의 초깃값은 null이지만 잠재적으로 null 대신 string이 될 수 있음을 알려줍니다.
 * 명시적으로 string | null 타입 애너테이셔은 타입스크립트가 thinker의 값으로 string 타입의 값을 할당할 수 있음을 의미합니다.
 * 유니언 타입의 순서는 중요하지 않습니다. string | null 이나 null | string 모두 동일하게 취급합니다.
 */

let thinker: string | null = null;

if (Math.random() > 0.5) {
    thinker = "Susanne Langer"; // OK
}

/** 유니언 속성
 * 값이 유니언 타입일 때, 타입스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있습니다.
 * 유니언 외의 타입에 접근하려고 하면 타입 검사 오류가 발생합니다.
 *
 * 다음 스니펫에서 physicist는 number | string 타입으로 두 개의 타입에 모두 존재하는 toString()은 사용할 수 있지만,
 * toUpperCase()와 toFixed()는 사용할 수 없습니다. toUpperCase()는 number 타입에는 없고, toFixed()는 string 타입에는 없기 때문이에요.
 */

let physicist = Math.random() > 0.5 ? "Marie Cuire" : 100;
physicist.toString(); // OK
physicist.toUpperCase(); // Error: 'number' 형식에 'toUpperCase' 속성이 없습니다.ts(2339)
physicist.toFixed(); // Error: 'string' 형식에 'toFixed' 속성이 없습니다.ts(2339)

/** 내로잉
 * 내로잉은 값이 정의, 선언 혹은 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것입니다.
 * 타입스크립트가 값의 타입이 이전에 알려진 것보다 더 좁혀졌다는 것을 알게 되면값을 더 구체적인 타입으로 취급합니다.
 * 타입을 좁히는 데 사용할 수 있는 논리적 검사를 '타입 가드(Type Guard)'라고 합니다.
 *
 * 1. 값 할당을 통한 내로잉
 * 변수에 값을 직접 할당하면 타입스크립트는 변수의 타입을 할당된 값의 타입으로 좁힙니다.
 * 다음 admiral 변수는 초기에 number | string으로 선언했지만 "Grace Hopper" 값이 할당된 이후 타입스크립트는 admiral 변수가 string 타입이라는 것을 알게 됩니다.
 *
 * 2. 조건 검사를 통한 내로잉
 * 일반적으로 타입스크립트에서는 변수가 알려진 값과 같은지 확인하는 if 문을 통해 변수의 값을 좁히는 방법을 사용합니다.
 * 타입스크립트는 if 문 내에서 변수가 알려진 값과 동일한 타입인지 확인합니다.
 *
 * 3. typeof 검사를 통한 내로잉
 * 타입스크립트는 직접 값을 확인해 타입을 좁히기도 하지만, typeof 연산자를 사용할 수도 있답니다.
 */

let admiral: number | string;
admiral = "Grace Hopper"; // 초깃값으로 문자열이 할당되었기 때문에 타입스크리트는 즉시 string 타입으로 바로 좁혀졌다는 것을 알 수 있어요.
admiral.toUpperCase();
admiral.toFixed(); // 'toFixed' 속성이 'string' 형식에 없습니다.

let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (scientist === "Rosalind Franklin") {
    scientist.toUpperCase(); // OK
}
scientist.toUpperCase(); // 'number' 형식에 'toUpperCase' 속성이 없습니다.

if (typeof researcher === "string") {
    researcher.toUpperCase(); // OK
}
if (!(typeof researcher === "string")) {
    researcher.toFixed(); // OK: number
} else {
    researcher.toUpperCase(); // OK: string
}
/** 삼항연산자 사용 가능
 * typeof researcher === "string" ? researcher.toUpperCase() : researcher.toFixed();
 * */

/** ---------------------------------------------------------------------------------------------------- */
