function onFormSubmit(){
    // Cuando clicamos Submit, se llamará a readForm(fun) que leerá lo que hemos escrito y nos devolverá un objeto que llamamos formData.
    var formData = readForm();
    // insertNew(fun) se encargará de coger nuestro objeto, e insertar sus datos en el tablero de la derecha.
    insertNew(formData);
    // Y con esta función, se borrarán todos los datos del formulario.
    resetForm();
}

function readForm(){
    // Crea un objeto que almacenará todos los datos del formulario.
    const formData = {};
    // Obtiene los datos a partir del valor del DOM, del valor de la id que corresponde a cada input del formulario, y los almacena a formData.
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["email"] = document.getElementById("email").value;
    // Manda el objeto entero hacia donde quiera que se le haya llamado.
    return formData;
}

function insertNew(data){
    // Aquí se busca en DOM el tablero donde se muestran los datos, con el ID tableList. De ese tablero, busca el elemento HTML "tbody", la primera (y única) instancia.
    var table = document.getElementById("tableList").getElementsByTagName("tbody")[0];
    // Con esta línea, se inserta una nueva fila en el tablero, con el método HTML "insertRow". table.length se usa para insertar la fila en el último espacio.
    var newRow = table.insertRow(table.length);
    // Aquí se van insertando celdas usando la fila que insertamos antes, y añadiendo los datos que hemos cogido desde formData(obj) en readForm(fun)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dateOfBirth;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneNumber;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    // Se añaden también dos botones para editar o borrar la entrada.
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;
}

function resetForm(){
    // Se usa el DOM para borrar todo el formulario.
    document.getElementById("fullName").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
}