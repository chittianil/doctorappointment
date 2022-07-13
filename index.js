let buttonElement = document.getElementById("submitBtn");
let inputEl = document.getElementById("inputEL");
let listEl = document.getElementById("list");
let dateEl = document.getElementById("dateEL");
let problemEl = document.getElementById("problemEl");
let errorparaEl = document.getElementById("errorpara");
let errordateEl = document.getElementById("errordate");
let textareaEl = document.getElementById("textarea");

buttonElement.onclick = () => {
    let listItem = document.createElement("li");
    listItem.classList.add("listitem")
    listEl.appendChild(listItem);
    
    
    
    if (inputEl.value===""){
        errorparaEl.textContent="Enter your name"
       
    }else{
        errorparaEl.textContent=""
        let namePara = document.createElement("p")
        namePara.textContent = "Name:" + inputEl.value
        inputEl.value = ""
        listItem.appendChild(namePara)
    }
    
    if (dateEl.value===""){
        errordateEl.textContent="Enter your slot"
       
    }else{
        errordateEl.textContent=""
        let para = document.createElement("p");
        para.textContent = "Date:" + dateEl.value;
        dateEl.value = ""
        listItem.appendChild(para);
    }   
    

    if (problemEl.value===""){
        textareaEl.textContent="Enter your problem"
       
    }else{
        textareaEl.textContent=""
        let problemPara = document.createElement("p")
        problemPara.textContent = "Problem :" + problemEl.value
        problemEl.value = ""
        listItem.appendChild(problemPara)
       
    }   



}