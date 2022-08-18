//funtion
let sum = (a,b) => {
    return a + b
}

console.log('sum a + b =',sum(9,6))

let obj = {
    name: 'Quang',
    age : 28,
    getName: function (){   
        return this.name;
    }
}
console.log('my name is:',obj.getName()) //funtion trong obj nen phari dung obj.funtion de goi