const sendMessage=document.querySelector('.sendBtn');
const name=document.querySelector('#name');
const email=document.querySelector('#mail');
const message=document.querySelector('#message');
const error=document.querySelector('.error');



sendMessage.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const patterns=/^[a-z]+$/i;
    var mail= /\S+@\S+\.\S+/;

    if(email.value.match(mail)&&name.value.match(patterns)&&message.value!=''){
        setTimeout(() => {
            alert('Message Sent');
        }, 3000);
    }else{
        error.innerHTML='Invalid input';
        error.style.color='red';
        console.log(name.value);
    }

})