const submitBtn=document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const conpassError = document.getElementById('conpassError');
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName() && validateEmail())
{
    alert("Form Submitted Successfully");  
}
});

function validateName(){
    let name=document.getElementById('name').value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        //nameError.previousElementSibling.classList.add('fa-xmark');
        document.getElementById("1").classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name";
        document.getElementById("1").classList.add('fa-xmark');
        //nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML="";
    document.getElementById("1").classList.add('fa-check');
    //nameError.previousElementSibling.classList.add('fa-check');
        return true;
}
function validateEmail(){
    let email=document.getElementById('email').value;
    if(email.length==0){
        emailError.innerHTML="Email is required";
        //emailError.previousElementSibling.classList.add('fa-xmark');
        document.getElementById("2").classList.add('fa-xmark');
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Enter a Valid email";
        document.getElementById("2").classList.add('fa-xmark');
        //emailError.previousElementSibling.classList.add('fa-xmark');
        //emailError.parentNode.getElementsByTagName("i")[0].classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML="";
    document.getElementById("2").classList.add('fa-check');
    //emailError.previousElementSibling.classList.add('fa-check');
        return true;
}