const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".create-note");
let input=document.querySelector(".input-box");

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("i");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.className="fa-solid fa-trash delete-note-img";
    notesContainer.appendChild(inputBox).appendChild(img);
})