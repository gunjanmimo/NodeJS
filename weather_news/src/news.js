const request = require('request')
const moment = require('moment')
const currentDate = moment().utc().format('Y-M-D')
exports.getNews=(callback)=>{
    
    const url= 'http://newsapi.org/v2/everything?q=bitcoin&from='+encodeURIComponent(currentDate)+'&sortBy=publishedAt&apiKey=fe0771a2c1a6435f9cc27bd41bf2109f'
    setTimeout(() => {
        request({url: url, json:true},(err,res)=>{
            if(err){
                callback(err)
            }
            else {
                callback(res.body.articles[3])
            }
        })
        
    }, 200);
}

// getNews(function (data){
//     console.log(data)
// })

