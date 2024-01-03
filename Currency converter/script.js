// import countryList from code;
const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for(let select of dropdown){
    for (currCode in countryList ){
       let newOption=document.createElement("option");
       newOption.innerText=currCode;
       newOption.value=currCode;
       
       select.append(newOption);
   }
   select.addEventListener("change",(e)=>{
    updateFlag(e.target);
   });
}

const updateFlag=(element)=>{
   let currCode=element.value;
   let countryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img=element.parentElement.querySelector("img");
   img.src=newSrc;
};

btn.addEventListener("click", async(e)=>{
    e.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }

    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    console.log(rate);
    msg.innerText=`${amtVal} ${fromCurr.value} = ${amtVal*rate} ${toCurr.value}`;
});