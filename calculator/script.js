let inp = document.querySelector('input');
let btn = document.querySelectorAll('button');

for(let buttons of btn){
    buttons.addEventListener('click', function(e){
        let btnText = e.target.innerHTML;
        if(btnText === "π"){
            btnText = 3.141592653;
        }
        if(btnText === "AC"){
            // inp.innerText = "";
            inp.value = "";
        }
        else if(btnText === "="){
            try{
                inp.value = eval(inp.value);
            }
            catch{
                inp.value = "pagal hai kya?";
            }
        }
        else{
            inp.value += btnText;
        }
    });
}