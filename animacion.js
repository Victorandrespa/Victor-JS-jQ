
//Pagina 1 ----------------------

$(document).ready(function () {
    $("#btn-ocultar").on("click", function () {
        $("p").hide();
    });
    $("#btn-mostrar").on("click", function () {
        $("p").show();
    });
    $("#btn-ocultarSlow").on("click", function () {
        $("p").hide("slow");
    });
    $("#btn-mostrarFast").on("click", function () {
        $("#containerParrafos p").show("fast");
    });
    $("#btn-ocultarSlide").on("click", function () {
        $("#containerParrafos p").slideUp(2000);
    });
    $("#btn-mostrarSlide").on("click", function () {
        $("#containerParrafos p").slideDown(2000);
    });
})


//Pagina 2 ----------------------

$(document).ready(function () {
    $("#btn-agregarFila").on("click", function () {
        let nuevaFila = `
                <tr>
                    <td><input type="number" class="form-control" placeholder="#"></td>
                    <td><input type="text" class="form-control" placeholder="nombre"></td>
                    <td><input type="email" class="form-control" placeholder="name@example.com"></td>
                </tr>
            `;
        $("#containerTabla tbody").append(nuevaFila);
    });
    $("#btn-eliminarFila").on("click", function () {
        $("#containerTabla tbody tr").last().remove();
    });
});


//Pagina 2 ----------------------

$(document).ready(function () {
    $("#btn-caracteresNombre").on("click", function () {
        let nombre = $("#inputNombre").val();
        let caracteres = nombre.length;
        $("#outputNombre").text("Caracteres: " + caracteres );
    });
    $("#btn-notasPromedio").on("click", function () {
        let notas1 = parseFloat($("#inputNotas").val());
        let notas2 = parseFloat($("#inputNotas2").val());
        let notas3 = parseFloat($("#inputNotas3").val());
        let promedio = (notas1 + notas2 + notas3)/3;
        let resultado = promedio >= 70 ? "¡Ganaste! 🎉" : "Perdiste 😢";
        $("#outputPromedio").html("Promedio: " + promedio.toFixed(2) + "<br>" +resultado  );
    });
})
