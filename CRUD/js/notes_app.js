var list = [];
if (JSON.parse(localStorage.getItem("todos"))) {
    list = JSON.parse(localStorage.getItem("todos"));
} else {
    localStorage.setItem("todos", JSON.stringify(list));
}
function showWork() {
    let row = "";
    for (var i in list) {
        row += `<div id="listWorkSpace"` + "<tr >"
            + `<div id="content">${list[i]}</div>`
            + `<button id="edit" onclick='onEdit(${i})'><label for="control-modal">Edit</label></button>`
            + `<button id="delete" onclick='onDelete(${i})'>Delete</button>`
            + "</tr>" + `</div><hr></hr>`;
    }
    document.getElementById("listWork").innerHTML = row;
};
showWork();
function onSubmit(i) {
    var todos = document.getElementById("enterTask").value;
    list.push(todos);
    localStorage.setItem("todos", JSON.stringify(list));
    window.location.reload();
}
function onDelete(i) {
    list.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(list));
    window.location.reload();
}
function onEdit(i) {
    var showEdit = "";
    showEdit += `<input id="editTodos" value = "${list[i]}"></input>`;
    showEdit += `<button id = "submitEditButton" onclick='submitEdit(${i})'>Submit</button>`;
    document.getElementById("showEditComponent").innerHTML = showEdit;
}
function submitEdit(i) {
    list[i] = document.getElementById("editTodos").value;
    localStorage.setItem("todos", JSON.stringify(list));
    window.location.reload();
}