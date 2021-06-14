let blocklist = [];

function showUrl()
{
    $("#blocklist").empty();
    for(i in blocklist)
    {
        $("#blocklist").append(`<li id="${blocklist[i].id}" class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${blocklist[i].url}</div>
        </div>
        <a onclick="removeUrl(${blocklist[i].id})" href="javascript:void(0)"><i class="done material-icons">delete</i></a>
        </li>`)
    }
}

$("#block").on("submit",(e)=>
{
    e.preventDefault();
    const url = $("#blocked_url").val();
    if(url!="")
    {
        blocklist.push({
            id : blocklist.length + 1,
            url : url
        });
        showUrl();
    }
})

function removeUrl(id){
    for(l in blocklist){
        if(blocklist[l].id === id){
            blocklist.splice(l,1);
        }
    }
    $(`#${id}`).remove();
}