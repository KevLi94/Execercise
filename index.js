let selectedRow = null;

//Alertas
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
    
}
//Eliminar todos los datos 
function clearFields(){
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#correo").value = "";
};


//Eliminar datos 
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Datos de la persona eliminados", "danger");
    }
});

//Anadir datos
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

const firstname = document.querySelector("#firstname").value;
const lastname = document.querySelector("#lastname").value;
const correo = document.querySelector("#correo").value;
//validacion
if (firstname == "" || lastname == "" || correo == "") {
    showAlert("Por favor ingresa datos en los campos", "danger");
   } 
    else {
    if (selectedRow == null) { 
    const list = document.querySelector("#student-list");
    const row = document.createElement("tr");
    
    row.innerHTML = `
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${correo}</td>
    <td> 
    <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
    <a href="#" class="btn btn-danger btn-sm delete">Eliminar</a>
    `;
    list.appendChild(row);
    selectedRow = null;
    showAlert("Usuario agregado", "success");
      
     
   }
   else {
    selectedRow.children[0].textContent = firstname;
    selectedRow.children[1].textContent = lastname;
    selectedRow.children[2].textContent = correo;
    selectedRow = null;
    showAlert("Informacion de usuario actualizada", "info")

   }
   clearFields();

   }})

//Editar datos 
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstname").value = selectedRow.children[0].textContent;
        document.querySelector("#lastname").value = selectedRow.children[1].textContent;
        document.querySelector("#correo").value = selectedRow.children[2].textContent;

        showAlert("Ingrese los nuevos datos a guardar", "success")
    }
})


