const deleteAll = () => {

    let i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",deleteTask)
    return i;
    
  }
  
  const deleteTask = (event) => {
    
    const parent = event.target.parentElement//con . target es para poder saber cual es el elemento que estamos utilizando y parentElement es para saber cual es el padre 
  
    parent.remove()
  }
  export default deleteAll;