
$('#breakdown').click(function(){
    $('#breakdown').removeClass("unselected");
    $('#breakdown').addClass("selected");

    $('#accident').removeClass("selected");
    $('#accident').addClass("unselected");

    $('#jam').removeClass("selected");
    $('#jam').addClass("unselected");

    $('#roadwork').removeClass("selected");
    $('#roadwork').addClass("unselected");

    $('#danger').removeClass("selected");
    $('#danger').addClass("unselected");
    
});

$('#accident').click(function(){
    $('#breakdown').removeClass("selected");
    $('#breakdown').addClass("unselected");

    $('#accident').removeClass("unselected");
    $('#accident').addClass("selected");

    $('#jam').removeClass("selected");
    $('#jam').addClass("unselected");

    $('#roadwork').removeClass("selected");
    $('#roadwork').addClass("unselected");

    $('#danger').removeClass("selected");
    $('#danger').addClass("unselected");
    
});

$('#jam').click(function(){
    $('#breakdown').removeClass("selected");
    $('#breakdown').addClass("unselected");

    $('#accident').removeClass("selected");
    $('#accident').addClass("unselected");

    $('#jam').removeClass("unselected");
    $('#jam').addClass("selected");

    $('#roadwork').removeClass("selected");
    $('#roadwork').addClass("unselected");

    $('#danger').removeClass("selected");
    $('#danger').addClass("unselected");
    
});

$('#roadwork').click(function(){
    $('#breakdown').removeClass("selected");
    $('#breakdown').addClass("unselected");

    $('#accident').removeClass("selected");
    $('#accident').addClass("unselected");

    $('#jam').removeClass("selected");
    $('#jam').addClass("unselected");

    $('#roadwork').removeClass("unselected");
    $('#roadwork').addClass("selected");

    $('#danger').removeClass("selected");
    $('#danger').addClass("unselected");
    
});

$('#danger').click(function(){
    $('#breakdown').removeClass("selected");
    $('#breakdown').addClass("unselected");

    $('#accident').removeClass("selected");
    $('#accident').addClass("unselected");

    $('#jam').removeClass("selected");
    $('#jam').addClass("unselected");

    $('#roadwork').removeClass("selected");
    $('#roadwork').addClass("unselected");

    $('#danger').removeClass("unselected");
    $('#danger').addClass("selected");
    
});