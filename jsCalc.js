const buttons = document.querySelectorAll(".btns input");
const inputText = document.getElementById("inputBox");
const del = document.getElementById("del");

buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        if(button.value === "="){
            if(inputText.value == ""){
                alert("You have to enter some number to perform calculations");
            }else{
                inputText.value = eval(inputText.value);
            }
        }
        else if(button.value === "AC"){
            inputText.value = "";
        }
        else if(button.value ==="DEL"){
            let deleteOne = inputText.value.toString().slice(0,-1);
            inputText.value = deleteOne;
        }
        else{
            inputText.value += button.value
        }
    })
})

document.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        if(inputText.value == ""){
            alert("You have to enter some number to perform calculations");
        }else{
            console.log(inputText.value)
            inputText.value = eval(inputText.value);
        }
    }
});