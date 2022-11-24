import checkComplete from "./components/checkComplete.js";
import deleteAll from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]"); //con document.querySelector("") se llama un elemento del html 

//Arrow functions o funciones anonimas
const createTask = (evento)=>{ //para no tener que utilizar la palabra function se utiliza =>
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");// y con "data-xx-xx" se hace llamado al objeto que previamente se utiliza en el html
  const value = input.value;// .value es para poder sacar la informacion del objeto en este caso es de la etiqueta input
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card")
  input.value = "";
  const taskContent = document.createElement("div");
  taskContent.appendChild(checkComplete());
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
 
    task.appendChild(taskContent)
    task.appendChild(deleteAll());
    list.appendChild(task); //con appendChild se agrega un hijo a una etiqueta en el html.
}
// aqui se declara que hacer cuando el boton se acciona
btn.addEventListener("click",createTask);