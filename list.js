console.log("connected");

var list=
[
    {
        title:"title",
        desc:"desc"
    },
    {
        title:"title",
        desc:"desc"
    },
    {
        title:"title",
        desc:"desc"
    }
]
printing();
function printing(){
    var titleList = $("li");
    for(var i=0 ; i<titleList.length ; i++){
        console.log(titleList[i]);
    }
    console.log("Terminated");
}

function add()
{
    var inputTitle = $("#todoTitle").val();
    var inputDesc = $("#todoDesc").val();
    console.log(inputTitle);
    console.log(inputDesc);
    if(inputTitle!=""){
        const obj=
        {
            title:inputTitle,
            desc:inputDesc
        }
        list.push(obj)
        console.log(list);

    }
    else{
        return;
    }
    for(i in list)
    {
        $("#itemlist").append(`<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${list[i].title})</div>
          ${list[i].desc}
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>`)
    }
        

    printing();
};

// function addTodo(){
//     // var li = $("li");
    
    
//     console.log(inputTitle);
//     console.log(inputDesc);
//     // var newTodo = $(inputValue);
//     // li.appendChild(newTodo);
    
// }