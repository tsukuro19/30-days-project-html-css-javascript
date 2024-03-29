const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".create-note");
let input=document.querySelector(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let icon=document.createElement("i");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    icon.className="fa-solid fa-trash delete-note-icon";
    notesContainer.appendChild(inputBox).appendChild(img);
    inputBox.appendChild(icon)
})


notesContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-note-icon")){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagname==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.array.forEach(element => {
            element.onkeyup=function(){
                updateStorage();
            }
        });
    }
})


