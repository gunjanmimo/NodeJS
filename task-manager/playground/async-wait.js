const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("nuber must be non negative")
            }
            resolve(a + b)

        }, 20)
    })
}


const doWork = async () => {
    const sum1 = await add(-1, 100)
    const sum2 = await add(sum1, 100)
    const sum3 = await add(sum2, -100)
    return sum3
}

doWork().then((result) => {
    console.log("result: " + result)
}).catch((e) => {
    console.log(e)
})