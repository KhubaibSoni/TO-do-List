

const Inpt = document.getElementById("task-input");
const btn = document.getElementById("add-task")
const List = document.getElementById("task-list");
const btn2 = document.getElementById("Rmv-task")

btn.addEventListener("click",function(){
  if(Inpt.value === ''){
    alert("Insert a Value")
    SaveData()
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = Inpt.value;
    List.appendChild(li)
    SaveData()
    let Span = document.createElement("span");
    Span.innerHTML = "\u274C";
    li.appendChild(Span)
    SaveData()
    
  }
})

List.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData()
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
    }
})


function SaveData(){
    localStorage.setItem("data",List.innerHTML)
}


function ShowData(){
    List.innerHTML = localStorage.getItem("data")
}
ShowData()

function clearData(){
    List.innerHTML = `<p> </p>`
}

btn2.addEventListener("click",function(){
  clearData()
})