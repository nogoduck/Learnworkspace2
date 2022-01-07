// --- shadowCopy and deepCopy ---
const originObject = { aa: { bb: { cc: 4000 }}}
const objectCopy = {...originObject}
// const _ = require('lodash');
// const objectCopy = _.cloneDeep(originObject);

console.log(originObject, "\n",objectCopy);
// originObject.aa.bb = 4000;
console.log(originObject, "\n",objectCopy);
console.log(originObject === objectCopy); //false(shadowCopy) 내용은 같지만 서로 다른 메모리에 저장되있음
console.log(originObject.aa === objectCopy.aa); //true(shadowCopy) 원시 값을 할당한 변수는 원시 값 자체를 가짐


let originVal = 43100;
let copyVal = originVal;
console.log(originVal, copyVal)
// originVal = 5005;
console.log(originVal, copyVal)
console.log(originVal === copyVal)

const newMinusFunc = new Function("x", "y", "return x - y");
console.log(newMinusFunc(50, 100))
console.log(newMinusFunc);
console.dir(newMinusFunc); // dir은 함수 객체의 프로퍼티까지 같이 출력되지만 Node 환경에서는 log와 같은 결과가 출력됌

console.log(add(10, 20)) //함수 선언문으로 정의한 함수는 이전에 호출할 수 있지만
// console.log(sub(10, 20)) //함수 표현식으로 정의한 함수는 이전에 호출할 수 없지 생성 시점이 각각 다르기 떄문 (p165)
//생성 시점: 모든 선언문이 그렇듯 함수 선언문도 코드가 한 줄씩 순차적으로 실행되는 시점인 런타임 이전에 자바스크립트 엔진에 의해 실행됨
//런타임 이전에 함수 객체가 먼저 생성 그리고 자바스크립트 엔진은 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성 후 함수 객체 할당
//함수 표현식 권장(함수를 선언하기 전에 사용하는 문제를 막기 위함)
function add(x, y){
    return x + y
}
//Function 생성자 함수는 클로저를 생성하지 않는 등, 다른 함수 생성 방법고 다르게 동작한다.
//또한 화살표 함수는 생성자 함수로 사용할 수 없으며, 기존 함수와 this 바인딩 방식이 다르고
//prototype 프로퍼티도 없고 arguments 객체를 생성하지 않는다
const sub = (x, y) => { return x / y; }

