function getOrder(){
    var orders=$('#orders');
    var config={
        success:(response)=>{
            var order=JSON.parse(response);
            var row=$('<li>');
            row.text(order);
            orders.append(order);
        },
        error:(response)=>{
            console.log("Some error occured");
        },
        method:'GET'
    }
    $.ajax('http://localhost:8080/orders',config);
}