//AJAX call using JQuery
function getOrder(){
    var users=$('#users');
    var config={
        //response contains data in JSON string format
        success:function(response){
            //parsing response string to JSON object
            var tracks=JSON.parse(response);
            var resultCount=tracks.resultCount;
            for(var i=0;i<resultCount;i++)
            {
                var row=$('<li>');
                row.text(tracks.results[i].trackName);
                users.append(row);
            }
        },
        method:'POST'
    }
    $.ajax('https://itunes.apple.com/search?term=enrique+iglesias',config);
}