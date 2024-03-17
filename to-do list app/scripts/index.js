const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const btnAdd=document.getElementsByClassName("add")[0];
const btnSave=document.getElementsByClassName("save")[0];
const btnShow=document.getElementsByClassName("show")[0];

btnAdd.onclick=()=>{
    if(inputBox.value===''){
        alert("You must write something");
    }else{
        const li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputBox.value="";
    }
}

btnSave.addEventListener("click",saveData);
btnShow.addEventListener("click",showTask);

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}