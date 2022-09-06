console.log('The JavaScript Basic')

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let filter =arr.filter(num => num >=5 )
// console.log(filter);

let arr = [
    {name: 'Quang', age : 29},
    {name: 'Toan', age : 23},
    {name: 'Minh', age : 24},
    {name: 'Luan', age : 33},
    {name: 'An', age : 29},   
]

// let filter = arr.filter((obj)=>{
//     return obj && obj.age === 29;
// });
// console.log(filter)

let find = arr.find((obj)=>{
    return obj && obj.age === 29;
})
console.log(find)