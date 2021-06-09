var list = [];

function showList()
{
    $("#itemlist").empty();
    for(i in list)
    {
        $("#itemlist").append(`<li id="${list[i].id}" class="list-group-item d-flex justify-content-between align-items-start">
        <input class="form-check-input align-item-center justify-content-center"  type="checkbox" onclick="doneTodo(t${list[i].id})"></input>
        <div id="t${list[i].id}" class="ms-2 me-auto">
            <div class="fw-bold">${list[i].title}</div>
            ${list[i].desc}
        </div>
        <a onclick="removeTodo(${list[i].id})" href="javascript:void(0)"><i class="done material-icons">delete</i></a>
        </li>`)
    }
}
$("#todo").on("submit",(e)=>{
    e.preventDefault();
    var inputTitle = $("#todoTitle").val();
    var inputDesc = $("#todoDesc").val();
    const obj = {
        title : inputTitle,
        desc: inputDesc,
        id: list.length +1
    }
    if(inputTitle!=""){
        list.push(obj);
        showList();
    }
    $('#remTasks').html(list.length);
})

function removeTodo(id){
    for(l in list){
        if(list[l].id === id){
            list.splice(l,1);
        }
    }
    $('#remTasks').html(list.length);
    showList();
}

function doneTodo(id){
    console.log($(id));
    $(id).toggleClass("completed");
}