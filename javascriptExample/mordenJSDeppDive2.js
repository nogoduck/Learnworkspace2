//콜백 함수
function repeat(n, f){
    for(let i = 0; i < n; i++){
        f(i);
    }
}

const logAll = (i) => {
    console.log(i)
}

const logOdds = (i) => {
    if(i % 2) console.log(i);
}

repeat(5, logAll)
repeat(5, logOdds)

//스코프
//렉시컬 환경: 주변에 어떤 코드가 있는지 살피며 모든 코드는 실행 컨텍스트에서 평가되고 실행된다
//스코프 체인: 스코프가 계층적 구조로 연결되어 있는 형태, 참조하는 스코프를 기준으로 값이 없으면 상위 스코프 방향으로 살펴나간다.
function foo(){
    console.log("global foo")
}

function bar(){
    function foo(){
        console.log("local foo")
    }
    foo();
}

bar()

//렉시컬 스코프 예제
var x = 1;

function fooX(){
    var x = 10;
    barX();
}

function barX(){
    console.log(x);
}

fooX();
barX();

//전역 변수의 무분별한 사용은 위험하며 최적화 측면에서도 좋지 않다. 그래서 지역 변수는 생명 주기를 가지고 있다(함수 생명 주기와 일치함)
//전역 변수의 문제점 --
//암묵적 결합(코드 어디서든 참조하고 할당 가능)
//전역 변수는 생명 주기가 길다 이 말은 메모리 리소스를 오랜 기간 소비한다는 말이다. 또한 파일이 달라고 하나의 전역 스코프를 공유하기 때문에
//네임스페이스가 오염될 수 있다.
//변수의 스코프는 좁을수록 좋다.
//전역 변수 사용 억제 방법
//1. 즉시 실행 함수 사용
//2. 네임스페이스 객체(그닥 유용하지 않음)
let nameSpace = {};
nameSpace.test = "Object";
console.log(nameSpace.test);
//3. 모듈 패턴(접근 제한자를 지원하지 않기 떄문에)
const Conter = (function(){
    let num = 0;
    return {
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    };
}());

console.log(Conter.num); //undefined (private 처럼 동작한다)
console.log(Conter.increase());
console.log(Conter.increase());
console.log(Conter.increase());
console.log(Conter.decrease());

//Object 생성자 함수
const person = new Object();
person.name = "Oh";
person.printName = () => { //화살표 함수는 this가 다르기 떄문에 undifined 출력
    console.log("person name >> ", this.name);
}

console.log(person);
console.log(person.printName())

//인스턴스: 생성자 함수에 의해 생성된 객체
