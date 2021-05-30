$(()=>{
    $('.btn-info-modal').click(function(){
        const img = $(this).parents('.block-main')
                    .find('.font-img img').attr('src')
        const title= $(this).parents('.block-main')
                    .find('h4').text()
        const info= $(this).parents('.block-main')
                    .find('p').text()
        const modalImg = $('#exampleModal .img-experiencia-modal img'),
              modaltitle = $('#exampleModal .modal-title'),
              modalInfo = $('#exampleModal .info-modal')

        // llenamos el modal con los datos de la experiencia 
        modalImg.attr('src', img)
        modaltitle.text(title)
        modalInfo.text(info)

        //limpiar caja  reservas-modal
        $('#exampleModal .reservas-modal').html('')

        // recolectar los elementos.
        const reservaItem = $(this).parents('.block-main')
                            .find('.tipos-clases i')
        reservaItem.each(function(){
            // insertar los elemento en las opciones de precios
            $('#exampleModal .reservas-modal').append(`
            <div class="tipos-servicios">
                <div class="nombre-servicio">${$(this).text()}</div>
                <button>reservar</button>
            </div>
            `)
        })
        $('#exampleModal').modal()
    })
})