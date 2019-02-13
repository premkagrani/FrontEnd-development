//Caching the DOM element(anonymous function)
$(function () {
    var button=$('#btn');
    button.on('click',generateTags);//similar to onclick in html
    var jqelement = $('#firstName');
    var age=$('#age');
    var users=$('#users');
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

    //Generating new li tags and delete button with event handler to delete li tags
    function generateTags(){
        var row=$('<li>');//similar to document.createElement('li');
        var deleteBtn=$('<button>')
        deleteBtn.text('Delete');
        deleteBtn.click(function(event){
           //event.target.parentElement.remove();//removes li element(core JS way)
           console.log($(event.target));
           $(event.target).parent().remove();//Jquery way
        });
        var gender=$("[name='gender']:checked");
        row.text(jqelement.val()+","+age.val()+","+gender.val());
        row.append(deleteBtn);
        users.append(row);
    }
}); 