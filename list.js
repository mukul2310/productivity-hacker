var list = [];

function remainingTasks(){
    let cnt=0;
    for(l in list){
        if(!list[l].done){
            cnt++;
        }
    }
    return cnt;
}

function addList(l)
{
    $("#itemlist").append(`<li id="${l.id}" class="list-group-item d-flex justify-content-between align-items-start">
        <input class="form-check-input align-item-center justify-content-center"  type="checkbox" onclick="doneTodo(${l.id},t${l.id})"></input>
        <div id="t${l.id}" class="ms-2 me-auto">
            <div class="fw-bold">${l.title}</div>
            ${l.desc}
        </div>
        <a onclick="removeTodo(${l.id})" href="javascript:void(0)"><i class="done material-icons">delete</i></a>
        </li>`)
}
$("#todo").on("submit",(e)=>{
    e.preventDefault();
    var inputTitle = $("#todoTitle").val();
    var inputDesc = $("#todoDesc").val();
    const obj = {
        title : inputTitle,
        desc: inputDesc,
        id: list.length +1,
        done: false
    }
    if(inputTitle!=""){
        list.push(obj);
        addList(obj);
    }
    $('#remTasks').html(remainingTasks());
})

function removeTodo(id){
    for(l in list){
        if(list[l].id === id){
            list.splice(l,1);
        }
    }
    $(`#${id}`).remove();
    $('#remTasks').html(remainingTasks());
}

function doneTodo(id1,id){
    $(id).toggleClass("completed");
    for(l in list){
        // console.log('t'+list[l].id+"  "+id+" "+typeof list[l].id+" "+typeof id);
        if(list[l].id == id1){
            if(list[l].done)
            list[l].done = false;
            else
            list[l].done=true;
        }
    }
    $('#remTasks').html(remainingTasks());
}