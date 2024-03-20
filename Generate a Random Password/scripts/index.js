const generatePass=document.getElementsByClassName("generate")[0];
const passwordBox=document.getElementById("input-pass");
const copyButton=document.getElementsByClassName("copy")[0];
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol=`~!@#$%^&*()-_=+[{]}\|;:'",<.>/?`;

const allChar=upperCase+lowerCase+number+symbol;

generatePass.onclick=()=>{
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value=password;
}

copyButton.onclick=()=>{
    passwordBox.select();
    document.execCommand("copy");
    alert("Copied");
}