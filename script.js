document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario tradicional

    // Obtén los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;

    // Crea un objeto con los datos del formulario
    const formData = {
        nombre,
        apellido,
        fechaNacimiento
    };

    // Realiza una solicitud POST utilizando fetch()
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Convierte el objeto en JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Registro exitoso'); // Puedes mostrar una alerta o hacer algo más con la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al registrar'); // Maneja el error de alguna manera
    });
});
