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
    $("#container-parrafos p").show("fast"); 
});
$("#btn-slideUp").on("click", function () {
    $("#container-parrafos p").slideUp(2000); 
});
$("#btn-slideDown").on("click", function () {
    $("#container-parrafos p").slideDown(2000); 
});