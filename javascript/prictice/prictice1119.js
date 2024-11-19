
let arr1 = [10, '20', 30];
let arr2 = [10, '20', 30];
let arr3 = [10, 20, 30];
let arr4 = ['10', '20', '30'];


const compareArr = (arr1, arr2)=> {
    for(let i = 0; i<arr1.length; i++){
        console.log(arr1[i] == arr2[i]);
    }
}

console.log('비교 1');
compareArr(arr1, arr2);
console.log('비교 2');
compareArr(arr3, arr4);
console.log('비교 3');
compareArr(arr2, arr4);



const personInfo = {
name:"홍길동",
age:25,
phone:"010-1234-5678",
engName:"John Smith",
nickname:" 복습마왕 "
}
console.log('변경 전');
console.log(personInfo);

const personInfo1 = {
    name:"홍길동",
    age:25,
    phone : ["010","1234","5678"],
    engName : 'JOHN SMITH',
    nickname : "복습마왕"
    }
    console.log('변경 후 1');
    console.log(personInfo1);
//2.

const personInfo2 = {
    name:"홍길동",
    age:25,
    phone : "010-1234-5678".split('-'),     //split() 특정구분으로 배열화 
    engName : 'john Smith'.toUpperCase(),   //toUpperCase() 대문자화
    nickname : " 복습마왕 ".trim()          //trim 공백제거
    }
    console.log('변경 후 2');
    console.log(personInfo2);
    /*
    console.log(personInfo1.name);
    console.log(personInfo1.age);
    console.log(personInfo1.phone);
    console.log(personInfo1.engName.toUpperCase());
    console.log(personInfo1.nickname.trim());
    */
0
    //function 함수
    //const , let 변수타입
    
    personInfo.phone = personInfo.phone.split('-'); //메소드
    //personInfo.phone = [s.substring(0,3),s.substring(4,8),s.substring(9,13)];  //함수
    personInfo.engName = personInfo.engName.toUpperCase();
    personInfo.nickname = personInfo.nickname.trim();
/*
    let s = "010-1234-5678";

    s.substring() //substring(시작위치, 끝나는위치(포함x)) 시작위치<= 범위 < 끝위치
    
    console.log(s.substring(0,3));

    let ss = [s.substring(0,3),s.substring(4,8),s.substring(9,13)];
    console.log(ss);
*/


