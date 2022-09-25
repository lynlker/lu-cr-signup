// Aquí se declara selectedRow, fuera de cualquier función, para hacerla una variable global.
var selectedRow = null;

function onFormSubmit(){
    // Cuando clicamos Submit, se llamará a readForm(fun) que leerá lo que hemos escrito y nos devolverá un objeto que llamamos formData.
    var formData = readForm();
    // insertNew(fun) se encargará de coger nuestro objeto, e insertar sus datos en el tablero de la derecha.
    if (selectedRow == null){
        insertNew(formData);
    } else {
        updateRecord(formData);
    }
    
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
    cell5.innerHTML = `<a href='#' onClick='onEdit(this);event.preventDefault();'>Edit</a> 
                       <a href='#' onClick='onDelete(this);event.preventDefault();'>Delete</a>`;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.dateOfBirth;
    selectedRow.cells[2].innerHTML = formData.phoneNumber;
    selectedRow.cells[3].innerHTML = formData.email;
}

function resetForm(){
    // Se usa el DOM para borrar todo el formulario.
    document.getElementById("fullName").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    // Y se vuelve a poner selectedRow como nulo.

    selectedRow = null;
}

function onEdit(td) {
    // Esta función define lo que pasa cuando clicas el botón "Edit" de una fila.

    // Almacenamos en la variable "selectedRow" el siguiente valor. Cogemos el botón "Edit" específico que hemos clicado, y buscamos el
    // pariente (que sería la celda), y luego el parente de la celda (que sería, finalmente, la fila que queremos seleccionar).
    selectedRow = td.parentElement.parentElement;

    // Con las próximas líneas, usando selectedRow, cogemos sus celdas una a una y las vamos colocando en el formulario de vuelta, usando
    // getElementById para obtener los inputs específicos.
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function onDelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetForm();
    }
    
}