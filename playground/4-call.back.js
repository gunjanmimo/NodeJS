// setTimeout(() => {
//     console.log("two second pause")
// }, 2000)
// const name = ["andrew", "mimo", "jack"]

// const short_name = name.filter(() => {
//     return name.length <= 4
// })


// const geoCode = (addess, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000);
// }
// geoCode("jaipur", (data) => {
//     console.log(data)
// })


const ADD=(a,b,callback)=>{
    setTimeout(() => {
        const result=a+b;
        callback(result)
    }, 2000);
}
ADD(2,3,(result)=>{
    console.log(result)
})