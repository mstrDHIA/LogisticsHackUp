

$('#map').click(function(){
    $('#map').addClass("active") ; 
    $('#agenda').removeClass("active") ; 
    $('#chat').removeClass("active") ;
    $('#alert').removeClass("active") ;
    $('#qrcode').removeClass("active") ;

    //$('#field2').removeClass('col-3');
    $('#field2').removeClass('field');
    $('#field2').addClass('hidden');
    $('#field2').removeClass('display');
    $('#field3').removeClass('col-8');
    $('#field3').addClass('col-11');
    $('#kharita').css('width','138%');
    
    $('#sec1').removeClass('display');
    $('#sec2').removeClass('display');
    $('#sec3').removeClass('display');
    $('#sec4').removeClass('display');
    $('#sec1').addClass('hidden');
    $('#sec2').addClass('hidden');
    $('#sec3').addClass('hidden');
    $('#sec4').addClass('hidden');



})

$('#agenda').click(function(){

    $('#sec1').removeClass('hidden');
    $('#sec2').removeClass('display');
    $('#sec3').removeClass('display');
    $('#sec4').removeClass('display');
    $('#sec1').addClass('display');
    $('#sec2').addClass('hidden');
    $('#sec3').addClass('hidden');
    $('#sec4').addClass('hidden');

   

    //$('#field2').addClass('col-3');
    $('#field2').addClass('field');
    $('#field2').removeClass('hidden');
    $('#field2').addClass('display');
    $('#field2').removeClass('col-11');
    $('#field2').addClass('col-3');
    $('#field3').removeClass('col-11');
    $('#field3').addClass('col-8');
    $('#kharita').css('width','100%');



    $('#map').removeClass("active") ; 
    $('#agenda').addClass("active") ; 
    $('#chat').removeClass("active") ;
    $('#alert').removeClass("active") ;
    $('#qrcode').removeClass("active") ;
})

$('#chat').click(function(){

    $('#sec1').removeClass('display');
    $('#sec2').removeClass('hidden');
    $('#sec3').removeClass('display');
    $('#sec4').removeClass('display');
    $('#sec1').addClass('hidden');
    $('#sec2').addClass('display');
    $('#sec3').addClass('hidden');
    $('#sec4').addClass('hidden');

    //$('#field2').addClass('col-3');
    $('#field2').addClass('field');
    $('#field2').removeClass('hidden');
    $('#field2').addClass('display');
    $('#field2').removeClass('col-11');
    $('#field2').addClass('col-3');
    $('#field3').removeClass('col-11');
    $('#field3').addClass('col-8');
    $('#kharita').css('width','100%');

    $('#map').removeClass("active") ; 
    $('#agenda').removeClass("active") ; 
    $('#chat').addClass("active") ;
    $('#alert').removeClass("active") ;
    $('#qrcode').removeClass("active") ;
})

$('#alert').click(function(){
    $('#sec1').removeClass('display');
    $('#sec2').removeClass('display');
    $('#sec3').removeClass('hidden');
    $('#sec4').removeClass('display');
    $('#sec1').addClass('hidden');
    $('#sec2').addClass('hidden');
    $('#sec3').addClass('display');
    $('#sec4').addClass('hidden');

    //$('#field2').addClass('col-3');
    $('#field2').addClass('field');
    $('#field2').removeClass('hidden');
    $('#field2').addClass('display');
    $('#field2').removeClass('col-11');
    $('#field2').addClass('col-3');
    $('#field3').removeClass('col-11');
    $('#field3').addClass('col-8');
    $('#kharita').css('width','100%');

    $('#map').removeClass("active") ; 
    $('#agenda').removeClass("active") ; 
    $('#chat').removeClass("active") ;
    $('#alert').addClass("active") ;
    $('#qrcode').removeClass("active") ;
})

$('#qrcode').click(function(){

    $('#sec1').removeClass('display');
    $('#sec1').addClass('hidden');
    $('#sec2').removeClass('display');
    $('#sec2').addClass('hidden');
    $('#sec3').removeClass('display');
    $('#sec3').addClass('hidden');
    $('#sec4').removeClass('hidden');  
    $('#sec4').addClass('display');

    //$('#field2').addClass('col-3');
    $('#field2').addClass('field');
    $('#field2').removeClass('hidden');
    $('#field2').addClass('display');
    $('#field2').removeClass('col-3');
    $('#field2').addClass('col-11');

    //$('#field3').removeClass('col-11');
    //$('#field3').addClass('col-8');
    $('#kharita').css('width','100%');

    $('#map').removeClass("active") ; 
    $('#agenda').removeClass("active") ; 
    $('#chat').removeClass("active") ;
    $('#alert').removeClass("active") ;
    $('#qrcode').addClass("active") ;
})


