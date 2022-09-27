var list = [];
if (JSON.parse(localStorage.getItem("name"))) {
    list = JSON.parse(localStorage.getItem("name"));
} else {
    localStorage.setItem("name", JSON.stringify(list));
}

//todoList = JSON.parse(localStorage.getItem("todos"));
function showName() {
    let row = "";
    for (var i in list) {
        row += "<tr >";
        row += "<td>" + list[i] + "</td>";
        row += `<button onclick='onDelete(${i})'>delete</button>`;
        row += `<button onclick='onEdit(${i})'>edit</button>`;
        row += "</tr>";
    }
    document.getElementById("list_name").innerHTML = row;
};
showName();
function onAdd() {
    var name = document.getElementById("inputName").value;
    list.push(name);
    localStorage.setItem("name", JSON.stringify(list));
    window.location.reload();
}
function onDelete(i) {
    list.splice(i, 1);
    localStorage.setItem("name", JSON.stringify(list));
    window.location.reload();
}
function onEdit(i) {
    var showSubmit = "";
    showSubmit += `<input id="editName" value = "${list[i]}"></input>`
    showSubmit += `<button onclick='submitEdit(${i})'>Submit</button>`;
    document.getElementById("showEditComponent").innerHTML = showSubmit;
}
function submitEdit(i) {
    list[i] = document.getElementById("editName").value;
    localStorage.setItem("name", JSON.stringify(list));
    window.location.reload();
}


