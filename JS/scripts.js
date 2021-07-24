$( function(){
    //aqui vai nosso código de js
    $('nav.mobile').click(function(){
        // o que vai acontecer quando clicarmos na nav.mobile!
        var listaMenu = $('nav.mobile ul')
        
        //Abrir menu através do faded com efeito
        /* 
        if(listaMenu.is(':hidden') == true ) {
            listaMenu.fadeIn();
        } else {
            listaMenu.fadeOut();    
        }
        */
       //Abrir fechar menu com efeito!
        listaMenu.slideToggle();


        //Abrir ou fechar sem efeitos
        /*
        if(listaMenu.is(':hidden') == true ) {
            //listaMenu.show()
            listaMenu.css('display', 'block');
        } else {
            //listaMenu.hide();    
            listaMenu.css('display', 'none');
        }
        */

    })

})