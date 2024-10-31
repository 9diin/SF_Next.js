/** 유니언과 리터럴
 *
 * 유니언: 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
 * 내로잉: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것
 *
 * 종합하자면 유니언과 내로잉은 다른 주요 프로그래밍 언어에서는 불가능하지만,
 * 타입 스크립트에서는 가능한 '코드 정보에 입각한 추론'을 해내는 강력한 개념입니다.
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
 * 명시적으로 string | null 타입 애너테이셔은 타입 스크립트가 thinker의 값으로 string 타입의 값을 할당할 수 있음을 의미합니다.
 * 유니언 타입의 순서는 중요하지 않습니다. string | null 이나 null | string 모두 동일하게 취급합니다.
 */

let thinker: string | null = null;

if (Math.random() > 0.5) {
    thinker = "Susanne Langer"; // OK
}

/** 유니언 속성
 * 값이 유니언 타입일 때, 타입 스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있습니다.
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
 * 타입 스크립트가 값의 타입이 이전에 알려진 것보다 더 좁혀졌다는 것을 알게 되면 값을 더 구체적인 타입으로 취급합니다.
 * 타입을 좁히는 데 사용할 수 있는 논리적 검사를 '타입 가드(Type Guard)'라고 합니다.
 *
 * 1. 값 할당을 통한 내로잉
 * 변수에 값을 직접 할당하면 타입 스크립트는 변수의 타입을 할당된 값의 타입으로 좁힙니다.
 * 다음 admiral 변수는 초기에 number | string으로 선언했지만 "Grace Hopper" 값이 할당된 이후 타입 스크립트는 admiral 변수가 string 타입이라는 것을 알게 됩니다.
 *
 * 2. 조건 검사를 통한 내로잉
 * 일반적으로 타입 스크립트에서는 변수가 알려진 값과 같은지 확인하는 if 문을 통해 변수의 값을 좁히는 방법을 사용합니다.
 * 타입 스크립트는 if문 내에서 변수가 알려진 값과 동일한 타입인지 확인합니다.
 *
 * 3. typeof 검사를 통한 내로잉
 * 타입 스크립트는 직접 값을 확인해 타입을 좁히기도 하지만, typeof 연산자를 사용할 수도 있답니다.
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
 */

/** ---------------------------------------------------------------------------------------------------- */

/** 리터럴 타입
 * superStar는 어떤 타입인가요? 얼핏 봐도 string 타입이라고 말할 수 있고, 실제로도 string 타입입니다.
 * 하지만 superStar는 단지 string 타입이 아닌 'G-Dragon'이라는 특별한 값입니다.
 * 따라서, 변수 superStar의 타입은 기술적으로 더 구체적인 'G-Dragon'입니다.
 *
 * 이것이 바로 리터럴 타입의 개념입니다. 원시 타입 값 중 어떤 것이 아닌 특정 원싯값으로 알려진 타입이 리터럴 타입입니다.
 * 원시 타입 string은 존재할 수 있는 모든 가능한 문자열의 집합을 나타냅니다. 하지만 리터럴 타입인 "G-Dragon"은 하나의 문자열만 나타냅니다.
 *
 * 만약 변수를 const로 선언하고 직접 리터럴 값을 할당하면, 타입 스크립트는 해당 변수를 할당된 리터럴 값으로 유추합니다.
 */

const superStar = "G-Dragon";

/** ---------------------------------------------------------------------------------------------------- */

/** 초깃값이 없는 변수
 * 자바스크립트에서 초깃값이 없는 변수는 기본적으로 undefined가 됩니다. 이는 타입 시스템에서 극단적인 경우를 나타내기도 하는데요.
 * 만일 undefined를 포함하지 않는 타입으로 변수를 선언한 다음, 값을 할당하기 전에 사용하려고 시도하면 어떻게 될까요?
 * 타입 스크립트는 값이 할당될 때까지 undefined임을 이해할 만큼 충분히 영리합니다.
 *
 * 값이 할당되기 전에 속성 중 하나에 접근하려는 것처럼 해당 변수를 사용하려고 시도하면 다음과 같은 오류 메시지가 나타납니다.
 */

let chemist: string;
chemist?.length; // Error: 'chemist' 변수가 할당되기 전에 사용되었습니다. ts(2454)

chemist = "BIGBANG";
chemist.length; // OK

/** 변수 타입에 만약 undefined가 포함되어 있는 경우에는 오류가 보고되지 않습니다.
 * 변수 타입에 | undefined을 추가하면, undefined는 유효한 타입이기 때문에 사용 전에는 정의할 필요가 없음을 타입 스크립트에 나타냅니다.
 */

let biologist: string | undefined;
biologist?.length; // OK

biologist = "BTS";
biologist.length; // OK

/** 타입 별칭
 * 타입 스크립트에는 재사용하는 타입에 더 쉬운 이름을 할당하는 '타입 별칭(type alias)'이 있습니다.
 * 타입 별칭은 'type 새로운 이름 = 타입'의 형태를 갖습니다. 편의상 타입 별칭은 파스칼 케이스로 이름을 지정합니다.
 * 타입 별칭은 타입 시스템의 '복사해서 붙여넣기'처럼 작동합니다. 타입 스크립트가 타입 별칭을 발견하면 해당 별칭이 참조하는 실제 타입을 입력한 것처럼 작동합니다.
 *
 * 타입 별칭은 자바스크립트가 아닙니다.
 * 타입 별칭은 타입 애너테이션처럼 자바스크립트로 컴파일되지 않습니다.
 * 순전히 타입스크립트 타입 시스템에만 존재합니다. 타입 별칭은 순전히 타입 시스템에만 존재하므로 런타임 코드에서는 참조할 수 없습니다.
 * 타입 스크립트는 런타임에 존재하지 않는 항목에 접근하려고 하면 타입 오류로 알려줍니다.
 */

type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

/** 타입 별칭 결합
 * 타입 별칭은 다른 타입 별칭을 참조할 수 있습니다.
 * 유니언 타입인 타입 별칭 내에 또 다른 유니언 타입인 타입 별칭을 포함하고 있다면 다른 타입 별칭을 참조하는 것이 유용합니다.
 * 사용 순서대로 타입 별칭을 선언할 필요는 없습니다. 파일 내에서 타입 별칭을 먼저 선언하고 참조할 타입 별칭을 나중에 선언해도 됩니다.
 */

type Id = number | string;
type IdMaybe = Id | undefined | null; // IdMaybe 타입은 다음과 같다. : number | string | undefined | null
