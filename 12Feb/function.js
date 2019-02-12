//inner functions
function outer() {
    var company='sapient';//variable
    this.company='IBM';//property
    console.log('outer',this);
    //Inner function being created
    function inner(){
        console.log(company);
        console.log('inner',this);
        console.log(this.company);
    }
    inner();
}
outer();