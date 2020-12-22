const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve('Video 3 Recorded')
})

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo, 
//     recordVideoThree
// ]).then((messages) =>{
//     console.log(messages)
// })

//Difference between .all it will return as soon as the first one is completed
//as opposed to waiting untill everything completes. So there is
//1 return value (single message vs all the messages.) output = Video 1 Recorded
Promise.race([
    recordVideoOne,
    recordVideoTwo, 
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})