const init=function(){
    document.getElementById("submit").addEventListener(click,addto_table);// this will call in the send function
    document.getElementById("submit").addEventListener(click,reset)}//this funtion should make it so that clicking the button will preform two operations . one is tio reset the input boxes while the other will add data to the table. Im not sure will reset rest the table though.
    
    
    
    const reset=function(ev){
        
        
        ev.preventDefault()// this will stop it from submitting the form or running validation built into the browser.
        document.getElementById('form_user').reset();// this function will be utilzied to reseet my form after adding a table . I might make it time based so it happens a coupels seconds later.
        
        // this will put everything in the form back to the intail state of when the page loaded s it shouldnt effect the datatable.
        
    }//his acaull works




    let name=document.getElementById("input-name")
    console.log(name)
     
     let name_input=name.value





    