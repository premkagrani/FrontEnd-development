//AJAX call using XHR(core JS)
function getOrder() {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        console.log(this.readyState,this.responseText,this.status);
        if (this.readyState == 4 && this.status==200){
            document.getElementById("payload").innerHTML=this.responseText;
            console.log(this.responseText);
        }
    }
    //If web services are used,only file is to be replaced by path of web service
    XHR.open("GET", "orders.json");//async behaviour
    XHR.send();//async call
    for(var i=0;i<10;i++)
    console.log('logic');
}   

