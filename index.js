
let bgContainerEl=document.createElement("div");
bgContainerEl.classList.add("bg-container")
document.body.appendChild(bgContainerEl)

let headingEl=document.createElement("h1")

headingEl.classList.add("heading");
headingEl.textContent="Grocery List";
bgContainerEl.appendChild(headingEl);

let listContainerEl=document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);


let groceryItems= ["Milk","chocohips","Tomoto sauce","peanut butter","Noodles",
"cup cakes"];


for (let groceryItem of groceryItems){
let listEl=document.createElement("li");
listEl.textContent=groceryItem;
listContainerEl.appendChild(listEl);
}

let inputEl=document.createElement("input");
inputEl.type="checkbox"
inputEl.id="myCheckbox"
bgContainerEl.appendChild(inputEl)

let labelEl=document.createElement("label");
labelEl.classList.add("delivery-text")
labelEl.textContent="Need Home Delievery";
labelEl.setAttribute("for","myCheckbox");
bgContainerEl.appendChild(labelEl);

let breakEl=document.createElement("br")
bgContainerEl.appendChild(breakEl)

let buttonEl=document.createElement("button");
buttonEl.classList.add("btn","btn-primary");
buttonEl.textContent="Proceed to Pay";
bgContainerEl.appendChild(buttonEl);
