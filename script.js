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
  const content = //aqui se utiliza el backticks "``" para agregar contenido html y se trae la div del html que queremos que se imprima
    `<div> 
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content; // aqui con task.innerHTML estamos agregando el contenido al html en donde esta el data-task en este caso 

    list.appendChild(task); //con appendChild se agrega un hijo a una etiqueta en el html.

  console.log(content);
}

console.log(btn);
// aqui se declara que hacer cuando el boton se acciona
btn.addEventListener("click",createTask);

