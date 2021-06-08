
$("#custom").on('change', () => {
    if ($("#custom").prop('checked') === true) {
        $("div .form-control").removeAttr("hidden");
        if ($("#pomodoro").prop('checked') === true)
        {
            $("#pomodoro").trigger("click");
        }
    }
    else {
    $("div .form-control").attr("hidden",true);
    }
})
$("#pomodoro").on('change', () => {
    if ($("#pomodoro").prop('checked') === true) {
        if ($("#custom").prop('checked') === true)
        {
            $("#custom").trigger("click");
        }
    }
})
function startTimer()
{
    console.log("hi")
}
function pauseTimer()
{
    console.log("hi")
}
function stopTimer()
{
    console.log("hi")
}