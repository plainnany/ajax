app.get('/loadMore',function(request,response){
    var currentIndex = request.query.index
    var len = request.query.length
    var data = []
    for(var i = 0; i<len; i++){
        data.push('新闻' + (parseInt(currentIndex) + i))
    }
    setTimeout(function(){
        response.send(data)
    },3000)
    
})