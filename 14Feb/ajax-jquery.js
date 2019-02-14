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

var borderColor='border-color';
var redColor='red';
var greenColor='green';
//Changin textfield border color on tab press
function validate(event){
    var textField=$(event.target);
    if(textField.val()==''){
        textField.css(borderColor,redColor);    
    }
    else{
        textField.css(borderColor,greenColor);
    }
}

//Animate box
function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 175) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = 2*pos + "px"; 
      }
    }
  }