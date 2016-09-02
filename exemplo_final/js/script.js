$(document).ready(function () {

    $("#mobileMenu").click(function () {
        $('.ui.labeled.icon.sidebar')
                .sidebar('toggle');
    });

    $("figure").click(function () {
        $(this).transition("pulse");
    });

    $("#btnVerde").click(function () {
        $("#item1")
                .transition({
                    animation: 'fly left',
                    duration: '1s',
                    onComplete: function () {
                        console.log("acionado");
                    }
                });
    });

    $('.ui.checkbox')
            .checkbox()
            ;
});
