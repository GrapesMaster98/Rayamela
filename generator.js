    let rpts = ['Hijo de puta.', 'Chinga tu madre.', 'Deberían darte dos medallas, una por idiota y otra por si la pierdes', 'No mereces ni siquiera las calorías que quemo hablando contigo.', 'Tu me haces feliz, cuando te largas.', 'Eres la definicion de pendejo.', 'Ni para eso sirves.', '¿Tienes mierda en la cabeza o que madre?', 'Eres como la parte azul del borrador, inutil.'];

    document.getElementById('insulto').innerHTML = insultGenerator(rpts, rpts.length);

    function insultGenerator(array, length) {
        let ranNumber = Math.floor(Math.random() * length);
        return array[ranNumber];
    }
