console.log('Welcome to Dinh Quang Js')

let array = ['Arsenal', 'Liverpool','Chealse','ManCity'];

let i=0;
while (i<array.length) {
    if (array[i].match('Man')) {
        console.log('Top',i+1, array[i])
    }
    else if (array[i].match('Ars')){
        console.log('Top', i+1, array[i])
    }
    else {
        console.log('Nothing to show')
    }
    i++
}