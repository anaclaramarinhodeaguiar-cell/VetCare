    const slides = document.querySelectorAll('.slide');
    const indicadores = document.querySelectorAll('.indicador');

    const anterior = document.querySelector('.anterior');
    const proximo = document.querySelector('.proximo');

    let slideAtual = 0;


    function mostrarSlide(numero) {

        // Remove o slide ativo
        slides.forEach(slide => {
            slide.classList.remove('ativo');
        });

        // Remove indicador ativo
        indicadores.forEach(indicador => {
            indicador.classList.remove('ativo');
        });


        // Ativa o novo slide
        slides[numero].classList.add('ativo');

        indicadores[numero].classList.add('ativo');

        slideAtual = numero;
    }


    function proximoSlide() {

        slideAtual++;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }

        mostrarSlide(slideAtual);
    }


    function slideAnterior() {

        slideAtual--;

        if (slideAtual < 0) {
            slideAtual = slides.length - 1;
        }

        mostrarSlide(slideAtual);
    }


    // Botão próximo
    proximo.addEventListener('click', proximoSlide);


    // Botão anterior
    anterior.addEventListener('click', slideAnterior);


    // Indicadores
    indicadores.forEach((indicador, indice) => {

        indicador.addEventListener('click', () => {

            mostrarSlide(indice);

        });

    });


    // Troca automática a cada 5 segundos
    setInterval(proximoSlide, 5000);
