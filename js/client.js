const socket =io('https://localhost:8001');

const form =document.getElementById('send-container');

const messageInput =document.getElementById('messageImp');

const messageContainer=document.querySelector(".container");

var audio= new Audio("15953_download_mesg_ting_ringtone_apple_sms_ringtones.mp3");


const append =(message,position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerText('message');
    messageElement.classList.add(positiom);
    messageContainer.append(messageElement);
    if(position =='left'){
        audio.play;
    }
    
}


form.addEventListener('submit',(e) =>{

    e.preventDefault();
    const message = messageInput.value;
    append('you:${message}','right');

    socket.emit('send',message);
    messageInput.value='';


});

let name= prompt("enter your name to join");

socket.emit('new-user-joined', name);

socket.on('user-joined',name  =>{
    append('${name} joined the chat','right')
});


socket.on('receive',data  =>{
    append('${data.name}:${data.message}','left')
});


socket.on('left',name  =>{
    append('${data.name}left the chat','left')
});

