$(function() {
    /*=============================================
    			Change color  Barnav
    =============================================*/
    const url = location.pathname,
        barraNavegacion = $('.barra-navegacion')
    console.log('url ->',url);

    // Compruebo en que pagina esta
    if (url.includes('index') || url == '/' || url == ''){
        console.log('index')
        $('.manu-items a').each(function() {
            $(this).css('opacity', '1')
        })
        $('.barra-navegacion').addClass('back-transparent-dark')
        
    } else {
        // Si no es el home , la baar de navegacion cambia de color
        $('.menu-items a').addClass('change-color-barra')
        $('.container-mas span, .container-mas h4, .typcn').addClass('skin-dark')
        $('.instagram-mas > span').addClass('change-color-barra')
        $('.container-mas h4').addClass('add-border-reserva')
        $('.container-mas svg').addClass('change-color-barra')
        $('.barra-navegacion').addClass('back-transparent')

        // se le cambia la opacidad a los items del menu
        $('.menu-items a').each(function() {
            if (url.includes($(this).text())) {
                /* $(this).css('opacity', '1') */
                $(this).addClass('item-active')

            } else {
                $(this).addClass('change-opacity-items')
                    /* $(this).css('opacity', '.4') */
            }
        })
    }

    /*=============================================
                Bug nav - menu
    =============================================*/

    const breakPoint = matchMedia('(min-width: 1100px)'),
        navMenu = document.querySelector('.menu'),
        changesStyle = mql => {
            mql.matches ? navMenu.style.display = 'flex' :
                navMenu.style.display = 'none';
        }

    breakPoint.addListener(changesStyle);

    /*=============================================
                Menu Movil
    =============================================*/

    $('#menu-mobile').click(() => {
            console.log('hola aaaa');
            $('.menu').slideToggle('ocultar');
            $('.menu').css('top', '82px');

        })
        /*=============================================
                    Page Suites 
    =============================================*/

    // Ocultar contenedores detalles
    $('.detalles-reserva').hide()

    // agregar eventos a los botones de reserva e info.
    $('.btn-infoo').each(function() {
            $(this).click(function() {
                // agregar al boton la class actived
                $(this).toggleClass('btn-style-alava--actived')

                // quitar al boton de al lado el Actived
                $(this).siblings().removeClass('btn-style-alava--actived')

                //ocultar contenedor reserva
                /* $(this).parents('.container-suites')
                	.find('.detalles-reserva')
                	.slideUp() */
                // mostrar contenedor info
                $(this).parents('.container-suites')
                    .find('.detalles-reserva')
                    .slideToggle()

            })
        })
        // FUNCION PRONTO A IMPLEMENTAR //
        /* $('.btn-reserva').each(function(){
        	$(this).click(function(){
        		// agregar al boton la class actived
        		$(this).toggleClass('btn-style-alava--actived')

        		// quitar al boton de al lado el Actived
        		$(this).siblings().removeClass('btn-style-alava--actived')
        		
        		//ocultar contenedor info
        		$(this).parents('.container-suites')
        			.find('.detalles-info')
        			.slideUp()
        		// mostrar contenedor reserva
        		$(this).parents('.container-suites')
        			.find('.detalles-reserva')
        			.slideToggle()
        		
        	})
        }) */
        /*=============================================
                    Menu Fijo
    =============================================*/
        //altura de la ventana.
    let windowHeight = $(window).height();
    // altura de la barra del menu.
    let barraAltura = $('.barra-navegacion').innerHeight();



    //Cuanto scroll estamos haciedo.
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        let carouselContainer = $('#carouselId').innerHeight()

        if (url.includes('index') || url == '/') {
            if (scroll > carouselContainer) {
                console.log('se paso');
                if (matchMedia('(min-width: 1100px)').matches) {
                    $('.boton-home img').attr('src','./img/logo.png' );
                    console.log($('.boton-home img'), '<--')
                    $('.barra-navegacion').removeClass('back-transparent-dark');
                    $('.barra-navegacion').addClass('back-transparent');
                    $('.menu .menu-items a').addClass('menu-color-scroll');
                    $('.boton-home').addClass('logo-home-color');
                    $('.container-mas span').addClass('skin-dark')
                    $('.instagram-mas h4').addClass('skin-dark-with-border');
                    $('.adult').addClass('skin-dark');

                    // icono de instagram
                    $('.typcn-social-instagram').addClass('skin-dark')
                }
            } else {
                $('.boton-home img').attr('src','./img/logo-white.png' )
                console.log($('.boton-home img'), '<--')
                $('.barra-navegacion').addClass('back-transparent-dark');
                $('.barra-navegacion').removeClass('back-transparent');
                $('.menu .menu-items a').removeClass('menu-color-scroll');
                $('.boton-home').removeClass('logo-home-color');
                $('.container-mas span').removeClass('skin-dark')
                $('.instagram-mas h4').removeClass('skin-dark-with-border');
                $('.adult').removeClass('skin-dark')
            }
        }

    })
});