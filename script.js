const btn = document.querySelector("[data-form-btn]"); //con document.querySelector("") se llama un elemento del html 
const input = document.querySelector("[data-form-input]");// y con "data-xx-xx" se hace llamado al objeto que previamente se utiliza en el html

//Arrow functions o funciones anonimas
const createTask = (evento)=>{ //para no tener que utilizar la palabra function se utiliza =>
  evento.preventDefault();
  console.log(input.value);
  input.value = "";
}

console.log(btn);
console.log(input.value);// .value es para poder sacar la informacion del objeto en este caso es de la etiqueta input

btn.addEventListener("click",createTask);// aqui se declara que hacer cuando el boton se acciona

