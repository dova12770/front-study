//obj02.js

let scores = [10, 30, 50, 40];

//for 반복문
for(let i=0; i<scores.length; i++){
    console.log(scores[i])
};

//for in

for(let i in scores){
    console.log(i + ' ' + scores[i]);
}

//for of
//item value score
for(let item of scores){    //for(String item :stringArr)
    console.log(item);
}

//forEach 함수에 매개변수 들어옴
//[10, 30, 50, 40]
                // (item, index)=>{ }
scores.forEach((item,index)=>{
    console.log(item + ' ' + index);
});

