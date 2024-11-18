// 

function arrForEach( func ){
    let arr= [10,20,30,40];

    for(let i in arr){
        //i         :index 배열기준에서 접근 key
        //arr[i]    :내부에 있는 데이터 (value)
        func(arr[i],i)
    }
}


const innerFunc =(item, index)=>{
    console.log(item + " " + index);
}

//innerFunc(10,10);
arrForEach(innerFunc);

arrForEach((a,b)=>{
    console.log(a + "----" + b);
});

