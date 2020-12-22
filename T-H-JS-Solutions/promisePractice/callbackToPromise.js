const userLeft = false
const userWatchingCatMeme = true

function watchTutorialPromise(){
    return new Promise((resolves, reject) =>{
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme lmao! ',
                message: 'WebDevSimplified < Cat'
            })
        } else{
            resolve('Thumbs up and Subscribe')
        }

    })
 
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})