const messageIn= document.getElementById("messageIn")

function  getMessage (){
    document.getElementById("messageOut").innerHTML = messageIn.value
    messageIn.value=""
}
