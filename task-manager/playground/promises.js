// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([21, 3, 12, 3])
//         reject("things not working")
//     }, 2000);
// })
// doWorkPromise.then((result) => {
//     console.log("sucess: ", result)
// }).catch((error) => {
//     console.log("error", error)
// })


//advance promise syntax

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(23, 34).then((sum) => {
    console.log(sum)
    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((error) => {
    console.log(error)
})