$(function() {
    $("#enter").click(function() {
        var surname = $('#sname').val();
        $(".masukan").fadeOut(750, function(){
            $(".header").fadeIn(750);
            $(".Opening").fadeIn(750);
            $("#panggil").append(surname+"!");
        });
    });
});

$(document).ready(function(){

    $('#campus').on('click', function(){
        alert('yaw');
    });
});

$(document).ready(function(){
    $(".header p").hover(function(){
        $(this).css("background-color", "#F5A417 ");
        $(this).css("border-radius", "25px");
        $(this).css("width", "auto");
        $(this).css("height", "auto");
        $(this).css("cursor", "pointer");
        }, function(){
        $(this).css("background-color", "transparent");
      });
})
        

