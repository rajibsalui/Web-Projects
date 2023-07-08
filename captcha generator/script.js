const captchaTextBox=document.querySelector(".input_field_captcha_box input");
const refreshButton=document.querySelector(".refresh_button");
const captchaInputBox=document.querySelector(".input_field_captcha_input input");
const message=document.querySelector(".message");
const submitButton=document.querySelector(".Submitbtn button");
let captchaText=null;
const generateCaptcha=()=>{
    const randomString=Math.random().toString(36).substring(2,7);
    const randomStringArray=randomString.split("");
    const changeString=randomStringArray.map((char)=>(Math.random()>0.5? char.toUpperCase():char));
    captchaText=changeString.join("  ");
    captchaTextBox.value=captchaText;
    console.log(captchaText);
};
const refreshBtnClick=()=>{
    generateCaptcha();
    captchaInputBox.value="";
    captchaKeyUpValidate();
    message.innerText="";
};
const captchaKeyUpValidate=()=>{
    submitButton.classList.toggle("disabled", !captchaInputBox.value);
    if(!captchaInputBox.value)message.classList.remove("active");
};
const SubmitbtnClick=()=>{
    captchaText=captchaText.split("").filter((char)=> char!==" ").join("");
    message.classList.add("active");
    if(captchaInputBox.value === captchaText)
    {
        alert("You have passed the captcha test");
       // message.innerText="Entered captcha is correct";
       // message.style.color="#826afb";
    }
    else{
         message.innerText="Entered captcha is incorrect";
        message.style.color="#FF2525";
        generateCaptcha();
    }
};
refreshButton.addEventListener("click",refreshBtnClick);
captchaInputBox.addEventListener("keyup",captchaKeyUpValidate);
submitButton.addEventListener("click",SubmitbtnClick);
generateCaptcha();
message.innerText="";