document.addEventListener("DOMContentLoaded", () => {

 function attachEvent(item) {
  const addButton = item.querySelector(".buttoncontainer2");

  addButton.addEventListener("click", () => {
    additem();
  
  });

    function additem() {
    const container = document.querySelector("main"); 
    const newItem = document.createElement("div");
    const lastItem = container.lastElementChild;
    newItem.classList.add("grid");
    newItem.innerHTML = `
     <img src="https://w7.pngwing.com/pngs/179/588/png-transparent-leaf-text-tree-yellow-new-yellow-and-white-new-logo-leaf-text-orange.png" alt="logo" class="imagecontainer"> 
     <h3 class="titlecontainer new">NEW CONTAINER</h3>
     <h4 class="textcontainer newparagraph">N ew container that has a lot <br> of potentiel </h4>
     <button class="buttoncontainer  newbutton">Remove</button>
     <button class="buttoncontainer2  newbutton">add</button>
     <button class="buttoncontainer3 newbutton">edit</button>
     <label class="switch  newbutton2">
     <input type="checkbox">
     <span class="slider round"></span>
     </label>
    `;
    lastItem.insertAdjacentElement("afterEnd",newItem);
    attachEvent(newItem);
    attachEvent2(newItem);
    };

    const deletebtn = item.querySelector(".buttoncontainer");
    

    deletebtn.addEventListener("click", () =>{
        item.remove();
    });
 };

 function attachEvent2(item) {
 const editbtn = item.querySelector(".buttoncontainer3");

    editbtn.addEventListener( "click",()=>{
        const newtext = prompt( "Edit task:", item.querySelector(".textcontainer").textContent);
        if (newtext){
            item.querySelector(".textcontainer").textContent= newtext;
        }
    });
 };

  const ALL = document.querySelector(".strawberry1");
  const Active = document.querySelector(".strawberry2");
  const Inactive = document.querySelector(".strawberry3");

  Active.addEventListener("click", () => {
    const items = document.querySelectorAll(".grid");
    items.forEach((item) => {
        if (item.querySelector("input").checked) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
  });

  Inactive.addEventListener("click", () => {
    const items = document.querySelectorAll(".grid");
    items.forEach((item) => {
        if (item.querySelector("input").checked) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
  });
    ALL.addEventListener("click", () => {
        const items = document.querySelectorAll(".grid");
        items.forEach((item) => {
            item.style.display = "block";
        });
    });

   document
    .querySelectorAll(".grid")
    .forEach((item) => attachEvent(item));


   document
   .querySelectorAll(".grid")
   .forEach((item) => attachEvent2(item));
});