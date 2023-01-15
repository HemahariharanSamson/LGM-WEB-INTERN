let outputScreen = document.getElementById("display-unit");

function display(num){
    outputScreen.value += num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid Input!");
    }
}

function cl(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);/*removes number one by one from backwards */
}