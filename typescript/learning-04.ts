/** 객체 */

/** 4.1 객체 타입
 * { ... } 구문을 사용해서 객체 리터럴을 생성하면, 타입스크립트는 해당 속성을 기반으로 새로운 객체 타입 또는 타입 형태를 고려합니다.
 * 해당 객체 타입은 객체의 값과 동일한 속성명과 원시 타입을 갖습니다.
 * 자바스크립트 객체 타입에 대해 공부할 때, 객체의 값에 접근하려면 value.멤버 또는 value['멤버'] 구문을 사용한다고 배웠습니다.
 *
 * 다음 poet 변수의 타입은 number 타입인 born과 string 타입인 name으로 이루어진 두 개으 속성을 갖는 객체입니다.
 * 이 두 개의 속성에 접근하는 것은 허용되지만, 다른 속성 이름으로 접근하려고 하면 해당 이름이 존재하지 않는다는 타입 오류가 발생합니다.
 * */

const poet = {
    born: 1935,
    name: "Mary Oliver",
};
poet["born"]; // 타입: number
poet["name"]; // 타입: string
poet["age"]; // Error: Property 'age' does not exist on type '{ born: number; name: string; }'

/** 객체 타입은 타입스크립트가 자바스크립트 코드를 이해하는 방법에 대한 핵심 개념입니다.
 * null과 undefined를 제외한 모든 값은 그 값에 대한 실제 타입의 멤버 집합을 가지므로
 * 타입스크립트는 모든 값의 타입을 확인하기 위해 겍체 타입을 이해해야 합니다.
 */

/** 4.1.1 객체 타입 선언
 * 기존 객체에서 직접 타입을 유추하는 방법도 굉장히 좋지만, 결국에는 객체 자체의 타입을 명시적으로 선언하고 싶을 경우가 많습니다.
 * 예를 들어볼게요!
 */

let poetLater: {
    born: number;
    name: string;
};

// OK
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};

poetLater = "Sappho"; // Error: 'string' 형식은 '{ born: number; name: string; }' 형식에 할당할 수 없습니다.

/** 4.1.2 별칭 객체 타입
 * { born: number, name: string }과 같은 객체 타입을 매번 작성하는 일은 매우 귀찮잖아요?
 * 각 객체 타입에서 타입 별칭을 할당해 사용하는 방법이 더 일반적입니다.
 */

type Poet = {
    born: number;
    name: string;
};

let poetLater2: Poet;

// OK
poetLater2 = {
    born: 1935,
    name: "Sara Teasdale",
};

poetLater2 = "Emily Dickinson"; // Error: 'string' 형식은 'Poet' 형식에 할당할 수 없습니다.

/** 4.2 구조적 타이핑
 * 타입스크립트의 타입 시스템은 구조적으로 타입화 되어 있다 말합니다. 즉, 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있는데요.
 * 다시 말하면, 매개변수나 변수가 특정 객체 타입으로 선언되면 타입스크립트에 어떤 객체를 사용하든 해당 속성이 있어야 한다고 말해야 합니다.
 */

type FirstAndLastName = {
    first: string;
    last: string;
};

/** 둘 사이에 일치하지 않는 타입도 허용되지 않아요. 객체 타입은 필수 속성 이름과 해당 속성이 예상되는 타입을 모두 지정합니다.
 * 객체의 속성이 일치하지 않으면 타입스크립트는 타입 오류를 발생시킵니다.
 */

// OK
const hasBoth: FirstAndLastName = {
    first: "Sarojini",
    last: "Naidu",
};

// Error: 'last' 속성이 '{ first: string; }' 형식에 없지만 'FirstAndLastName' 형식에서 필수입니다.
const hasOnlyOne: FirstAndLastName = {
    first: "Sappho",
};

type TimeRange = {
    start: Date;
};

// Error: 'string' 형식은 'Date' 형식에 할당할 수 없습니다.
const hasStartString: TimeRange = {
    start: "1879-02-13",
};

/** 4.2.2 초과 속성 검사
 * 변수가 객체 타입으로 선언되고, 초깃값에 객체 타입에서 정의된 것보다 많은 필드가 있다면 타입스크립트에서 타입 오류가 발생합니다.
 * 따라서 변수를 객체 타입으로 선언하는 것은 타입 검사기가 해당 타입에 예상되는 필드만 있는지 확인하는 방법이기도 합니다.
 */

type Poet2 = {
    born: number;
    name: string;
};

const poetMatch: Poet2 = {
    born: 1928,
    name: "Maya Angelou",
};

// Error: 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Poet2' 형식에 'activity'이(가) 없습니다.
const extraProperty: Poet2 = {
    born: 1928,
    name: "Maya Angelou",
    activity: "walking",
};

/** 중첩된 객체 타입
 * 자바스크립트 객체는 다른 객체의 멤버로 중첩될 수 있으므로
 * 타입스크립트의 객체 타입도 타입 시스템에서 중첩된 객체 타입을 나타낼 수 있어야 합니다.
 * 이를 구현하는 구문은 이전과 동일하지만 기본 이름 대신에 { ... } 객체 타입을 사용합니다.
 */

type Poem = {
    author: {
        firstName: string;
        lastName: string;
    };
    title: string;
};

// OK
const poemMatch: Poem = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath",
    },
    title: "Lady Lazarus",
};

// Error: 개체 리터럴은 알려진 속성만 지정할 수 있으며 '{ firstName: string; lastName: string; }' 형식에 'name'이(가) 없습니다.
const poemMismatch: Poem = {
    author: {
        name: "Sylvia Plath",
    },
    title: "Tulips",
};

type Author = {
    firstName: string;
    lastName: string;
};

type Poem2 = {
    author: Author;
    title: string;
};

/** Error: 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Author' 형식에 'name'이(가) 없습니다.
 * 이처럼 중첩된 객체 타입을 고유한 타입 이름으로 바꿔서 사용하면 코드와 오류 메시지가 더 읽기 쉬어집니다.
 */
const poemMismatch2: Poem2 = {
    author: {
        name: "Sylvia Plath",
    },
    title: "Tulips",
};

/** 선택적 속성
 * 모든 객체에 객체 타입 속성이 필요한 건 아닙니다. 타입의 속성 애너테이션에서 : 앞에 ?(물음표)를 추가하면 선택적 속성임을 나타낼 수 있답니다.
 * 다음 Book 타입은 pages 속성만 필요하고 author 속성은 선택적으로 허용합니다.
 * 객체가 pages 속성을 제공하기만 하면 author 속성은 제공하거나 생략할 수 있습니다.
 */

type Book = { author?: string; pages: number };

// OK
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};

// Error: 'pages' 속성이 '{ author: string; }' 형식에 없지만 'Book' 형식에서 필수입니다.
const missing: Book = {
    author: "Rita Dove",
};

/** 선택적 속성과 undefined를 포함한 유니언 타입의 속성 사이에는 차이가 있음을 명심하세요!
 * ?를 사용해 선택적으로 선언된 속성은 존재하지 않아도 됩니다.
 * 필수로 선언된 속성과 | undefined는 그 값이 undefined 일지라도 반드시 존재해야 합니다.
 */

type Writers = {
    author: string | undefined;
    editor?: string;
};

// OK: author는 undefined으로 제공됨
const hasRequired: Writers = {
    author: undefined,
};

// Error: 'author' 속성이 '{}' 형식에 없지만 'Writers' 형식에서 필수입니다.
const missingRequired: Writers = {};
