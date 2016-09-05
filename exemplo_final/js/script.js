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

    $('.ui.checkbox').checkbox();

    $("#termos").click(function () {
        $('.ui.modal')
                .modal('show')
                ;
    });

    $("button#submit").click(function () {

        var url = "php/server.php"; //url para onde o formulário vai ser enviado

        $.ajax({
            type: "POST",
            url: url,
            data: $("#formulario").serialize(),
            success: function (data)
            {
                alert(data);
            }, error: function (err) {
                alert(" Status " + err.status + "\n statusText:  " + err.statusText);
            }
        });

    });

    $("button#limpar").click(function () {
        $("#formulario").trigger("reset");
    });

});
