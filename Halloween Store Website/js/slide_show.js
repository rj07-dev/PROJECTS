$(document).ready(function () {
    $("#slides img:gt(0)").hide();

    setInterval(function () {
        $("#slides :first-child")
            .fadeOut(1000)
            .next("img")
            .fadeIn(1000)
            .end()
            .appendTo("#slides");
    }, 3000);
});