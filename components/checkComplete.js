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

  export default checkComplete;