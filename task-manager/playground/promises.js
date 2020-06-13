const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([21, 3, 12, 3])
        reject("things not working")
    }, 2000);
})
doWorkPromise.then((result) => {
    console.log("sucess: ", result)
}).catch((error) => {
    console.log("error", error)
})