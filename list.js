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
for(i in list)
    {
        $("#itemlist").append(`<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${list[i].title}</div>
          ${list[i].desc}
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>`)
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
    for(i in list)
    {
        $("#itemlist").append(`<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${list[i].title}</div>
          ${list[i].desc}
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>`)
    }
  }