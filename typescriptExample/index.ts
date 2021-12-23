// 타입스크립트 예제
// 변수 예제
let userName : string = "KIM";
let userList : {name? : string} = {name : "PACK"};
type UserType = string | number;
let user : UserType = 123;

// 함수 예제
const func = (arg1 : number, arg2 : string) : number => {
    return 0;
}

// 배열 예제 (튜플 타입)
type Member = [number, boolean];
let dog:Member = [404, false];

// 객체 예제
type Member2 = {
    name : string
}
let cat:Member2 = {name : "happy"};

// 글자로 된 모든 object 속성의 타입은 string
type Member3 = {
    [key : string] : string
}
let bird:Member3 = {name : "happy"};

// Class 예제
class User {
    name : string
    constructor(name) {
        this.name = name;
    }
}