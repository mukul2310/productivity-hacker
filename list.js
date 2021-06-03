var list = [];

function add()
{
    console.log($('#itemlist'));
    var inputTitle = $("#todoTitle").val();
    var inputDesc = $("#todoDesc").val();
    console.log(inputTitle);
    console.log(inputDesc);
    const obj = {
        title : inputTitle,
        desc: inputDesc
    }
    if(inputTitle!=""){
        list.push(obj);
        $("#itemlist").append(`<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${inputTitle}</div>
            ${inputDesc}
        </div>
        <a class="badge material-icons" onclick="doneTodo()" href="javascript:void(0)">check</a>
        <a class="badge done material-icons" onclick="removeTodo()" href="javascript:void(0)">clear</a>
        </li>`)
    }

    $('#remTasks').html(list.length);
}

function doneTodo(){

}

function removeTodo(){

}