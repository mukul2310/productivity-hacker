var list = [];

$("#block").on("submit",(e)=>
{
    e.preventDefault();
    const url = $("#blocked_url").val();
    if(url!="")
    {
        list.push(url);
        $("#blocklist").append(`<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${url}</div>
        </div>
        <a class="badge done material-icons" onclick="removeTodo()" href="javascript:void(0)">clear</a>
        </li>`)
    }
})

function removeTodo(){

}