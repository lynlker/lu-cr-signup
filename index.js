function onFormSubmit(){
    var formData = readForm();
    insertNew(formData);
    resetForm();
}

function readForm(){
    const formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNew(data){
    var table = document.getElementById("tableList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dateOfBirth;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneNumber;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;
}

function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
}