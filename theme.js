$("#dark_btn").on("click",()=>
{
    document.documentElement.style.setProperty("--bg-color","#113449");
    document.documentElement.style.setProperty("--text-color","aliceblue");
})
$("#light_btn").on("click",()=>
{
    document.documentElement.style.setProperty("--bg-color","#fff");
    document.documentElement.style.setProperty("--text-color","#000");
})