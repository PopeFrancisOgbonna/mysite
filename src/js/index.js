const hire=document.querySelector('#hire');
const name=document.querySelector('#name');
const mail=document.querySelector('#mail');
const term=document.querySelector('#input-term');
const signUp=document.querySelector('#sign-up');
const error=document.querySelector('.error');
const employ=document.querySelector('#send-hire');
const employerName=document.querySelector('#hire-name');
const employerEmail=document.querySelector('#hire-email');
const message=document.querySelector('#hire-message');

const pattern=/\S+/;
const mailPattern=/\S+@\S+\.\S+/;

signUp.addEventListener('click',(e)=>{
    e.preventDefault();

    if(name.value.match(pattern)&& mail.value.match(mailPattern)){
        if(term.checked){
            error.innerHTML='';
            setTimeout(() => {
                window.location.assign('/thankyou.html');//Navigates the window to thank you page
                name.value='';
                mail.value='';
                term.checked=false; 
            }, 2000);
    
        }else{
            //$('.error').innerHTML='please accept terms before continuing';
            error.innerHTML='Please accept the terms befor continuing';
        }
       
    }else{
        error.innerHTML='Wrong input format.';
    }
    
})

employ.addEventListener('click',(e)=>{
    e.preventDefault();
    //console.log(employerName.value);
    if(employerName.value!=''&& message.value!='' && employerEmail.value.match(mailPattern)){
      //  $('.modal').close();
        employerEmail.value='';
        employerName.value='';
        message.value='';
        
    }else{
        alert('Please fill all fields please.');
    }
})