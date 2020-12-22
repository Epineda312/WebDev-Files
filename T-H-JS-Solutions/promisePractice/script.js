console.log('bink');

let p = new Promise( (resolve, reject) =>{
    let a = 1 + 2
    if(a == 2){
        resolve('success');
    }else{
        reject('failed');
    }
})

p.then( (message) => {
    console.log('This is the then message. It was a ' + message)
}).catch( (message) => {
    console.log('This is the catch message. It has ' + message)
})