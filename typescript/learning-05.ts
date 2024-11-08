/** 함수 */

/** 다음 sing 함수는 song 매개변수를 받아 콘솔에 출력합니다.
 * sing 함수를 작성한 개발자가 song 매개변수를 제공하기 위해 의도한 값의 타입은 무엇일까요?
 * string일까요? 재정의된 toString() 메서드가 있는 객체일까요? 이 코드는 버그일까요? 누가 알 수 있을까요?
 * 명시적 타입 정보가 선언되지 않으면 절대 타입을 알 수 없답니다.
 * 타입스크립트가 이를 any 타입으로 간주하며 매개변수의 타입은 무엇이든 될 수 있습니다.
 */

function sing(song) {
    console.log(`Singing: ${song}`);
}

/** 변수와 마찬가지로 타입스크립트를 사용하면 타입 애너테이션으로 함수 매개변수의 타입을 선언할 수 있습니다.
 * 다음과 같이 : string을 사용해 song 매개변수가 string 타입임을 타입스크립트에게 알립니다.
 */

function sing(song: string) {
    console.log(`Singing: ${song}`);
}

/** 5.1.1 필수 매개변수
 * 자바스크립트에서는 인수의 수와 상관없이 함수를 호출할 수 있습니다. 하지만 타입스크립트는 함수에 선언된 모든 매개변수가 필수라고 가정합니다.
 * 함수가 잘못된 수의 인수로 호출되면, 타입스크립트는 타입 오류의 형태로 이의를 제기합니다.
 * 함수가 너무 적거나 많은 인수로 호출되면 타입스크립트는 인수의 개수를 계산합니다.
 */

function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`);
}

singTwo("Ball and Chain"); // 2개의 인수가 필요한데 1개를 가져왔습니다.
singTwo("I will Survive", "Higher Love"); // OK
singTwo("Go Your Own Way", "The Chain", "Dreams"); // 2개의 인수가 필요한데 3개를 가져왔습니다.

/** 함수에 필수 매개변수(required parameter)를 제공하도록 강제하면
 * 예상되는 모든 인숫값을 함수 내에 존재하도록 만들어 타입 안정성을 강화하는 데 도움이 됩니다. */

/** 5.1.2 선택적 매개변수
 * 자바스크립트에서 함수 매개변수가 제공되지 않으면 함수 내부의 인숫값은 undefined로 기본값이 설정된다는 것을 떠올려볼까요?
 * 때로는 함수 매개변수를 제공할 필요가 없을 때도 있고, undefined 값을 위해 의도적으로 사용할 수도 있습니다.
 * 우리는 타입스크립트가 이러한 선택적 매개변수에 인수를 제공하지 못하는 경우, 타입 오류를 보고하지 않았으면 합니다.
 * 타입스크립트에서는 선택적 객체 타입 속성과 유사하게 타입 애너테이션의 : 앞에 ?를 추가해 매개변수가 선택적이라고 표시합니다.
 *
 * 함수 호출에 선택적 매개변수를 제공할 필요는 없습니다. 선택적 매개변수에는 항상 | undefined가 유니언 타입으로 추가되어 있습니다.
 */

function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}
announceSong("Greensleeves"); // OK
announceSong("Greensleeves", undefined); // OK
announceSong("Greensleeves", "Sia"); // OK

/**
 * 이러한 선택적 매개변수는 항상 암묵적으로 undefined가 될 수 있습니다.
 * 이전 코드에서 singer는 string | undefined 타입으로 시작한 후 if문에 따라 string 타입으로 좁혀집니다.
 *
 * 선택적 매개변수는 | undefined를 포함하는 유니언 타입 매개변수와 다릅니다.
 * ?으로 표시된 선택적 매개변수가 아닌 매개변수는 값이 명시적으로 undefined일지라도 항상 제공되어야 합니다.
 *
 * announceSongBy 함수와 singer 매개변수는 명시적으로 제공되어야 합니다.
 * singer는 string 값이거나 undefined가 될 수 있습니다.
 */

function announceSongBy(song: string, singer: string | undefined) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}
announceSongBy("Greensleeves"); // Error: 2개의 인수가 필요한데 1개를 가져왔습니다. 'singer'의 인수가 제공되지 않았습니다.
announceSongBy("Greensleeves", undefined); // OK
announceSongBy("Greensleeves", "Sia"); // OK

/** 함수에서 사용되는 모든 선택적 매개변수는 마지막 매개변수여야 합니다.
 * 필수 매개변수 전에 선택적 매개변수를 위치시키면 다음과 같은 타입스크립트 구문 오류가 발생합니다.
 */

function announceSinger(singer?: string, song: string) {} // Error: 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다.
