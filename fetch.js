//Estilo para la tabla
window.onload = function() {
    document.getElementsByClassName("content")[0].style.display = "grid";
}

const addForm = document.getElementById('formulario');
addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var telefono = document.getElementById('telefono').value

    /*const formData = new FormData(this)
      console.log(this) */
    fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                telefono: telefono
            })
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error => console.log(error))
    addForm.reset(); // limpia el formulario 


})

//Listinig all resources
fetch('http://www.raydelto.org/agenda.php')
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}