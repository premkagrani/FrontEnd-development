//Event handler for button click
function save(event) {
    //var name = document.getElementById("name");
    //var nameDomElement=document.getElementsByTagName('input')[0];
    var nameDomElement=document.getElementsByName('firstName')[0];
    var name=document .getElementById('name');//selects first tag matching the criteria
    console.log(name.value)
    console.log('clicked',nameDomElement.value)
    //console.log('clicked', name.value);
    console.log(event);
    event.stopPropagation();//to stop event from bubbling up
}
function foo() {
    console.log('div click handler');
}