let sum = (a,b,callback) =>{
    let tong= a +b;
    // setTimeout(()=>{
    //     callback (tong)
    // },5000)
    let i=0;
    let time= setInterval(()=>{
        callback (tong)
        i++;
        if (i===5){
            clearInterval(time)
        }
    },1000)
    
}

let print = (tong) =>{
    console.log('tong cua a+b :',tong)
}
sum(6,9,print)