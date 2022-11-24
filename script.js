( () => {

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
  /*taskContent.appendChild(deleteAll())*/

    task.appendChild(taskContent)
    list.appendChild(task); //con appendChild se agrega un hijo a una etiqueta en el html.
    console.log(taskContent)
}

// aqui se declara que hacer cuando el boton se acciona
btn.addEventListener("click",createTask);

const checkComplete = () => {
  let i = document.createElement("i");
  i.classList.add("far","fa-check-square","icon");
  i.addEventListener("click", completeTask);
  return i;

}

const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");// el toggle es para verificar si tiene o no la clase si la tiene la quita y si no la tiene la coloca 
  element.classList.toggle("completeIcon")
  element.classList.toggle("far");
}


/*
const deleteAll = () => {

  let i = document.createElement("i");
  i.classList.add("fas","fa-trash-alt","trashIcon","icon");
  return i;
  
}*/
}) ();