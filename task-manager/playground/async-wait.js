const doWork = async () => {
    throw new Error("went wrong")
    // return "Gunjan"
}

doWork().then((result) => {
    console.log("result: " + result)
}).catch((e) => {
    console.log(e)
})