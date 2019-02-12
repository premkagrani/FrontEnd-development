//Caching the DOM element(anonymous function)
$(function () {
    var button=$('#btn');
    button.on('click',disable);//similar to onclick in html
    var jqelement = $('#firstName');

    function save(event) {
        console.log(event);
        //Jquery Way
        /*var jqelement=$('#firstName');//equivalent to document.getElementById()*/
        console.log(jqelement.val());

        //JS way
        var rawElement = document.getElementById('firstName');
        console.log(rawElement.value);
    }

    /*#-getElementById()
    nothing-getElementByTagName()
    */

    //Toggling text field clickable state
    function disable() {
        $('#firstName').attr("disabled", !($('#firstName').attr("disabled")));
    }
});