
    

    var input=document.getElementById("input");
    var btn=document.getElementById("btn");
    var format=document.getElementById("format")

    btn.addEventListener("click",function(){
        if(input.value.length>0){
        var todo=document.createElement("div");
        todo.appendChild(document.createTextNode(input.value));
        todo.style.border="2px solid blue";
        todo.style.color="green"
        todo.style.backgroundColor="3B3C80"
        todo.style.textAlign="center"
        todo.style.borderRadius="20px"
        todo.style.textStyle="italics"
        todo.style.fontFamily="poppings"
       
        format.appendChild(todo);
        input.value="";
    }})
    
    input.addEventListener("keypress",function(e){
        
        if(input.value.length>0 && e.keyCode===13){
            var todo=document.createElement("div");
            todo.appendChild(document.createTextNode(input.value));
            todo.style.border="2px solid blue";
             todo.style.color="red"
             todo.style.backgroundColor="3B3C80"
             todo.style.textAlign="center"
             todo.style.borderRadius="20px"
             todo.style.textStyle="italics"
            format.appendChild(todo);
            input.value="";
        }})



        