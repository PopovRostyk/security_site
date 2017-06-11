/**
 * Created by rostykpopov on 6/5/17.
 */
$(document).ready(function(){
    var show_count = 0;
    $("#square").hide();
    $(".top").mouseenter(function(){
        $(this).css("background-color",  "red");
        $(".text").css("color", "yellow");
    });
    $(".top").mouseleave(function () {
        $(this).css("background-color", "aqua");
        $(".text").css("color", "black");
    });
    $("#show").click(function () {
        show_count++;
        $("#square").show("slow");
        $("#square_text").text(show_count);
    });
    $("#hide").click(function () {
        $("#square").hide("slow");
    });
});