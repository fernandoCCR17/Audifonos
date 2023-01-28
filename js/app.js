(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarForm);
    function validarForm(e){
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        if(email.trim() === ''){
            mostrarAlerta('El email no puede ir vacio', 'error');
            return;
        }
        if(!regex.test(email)){
            mostrarAlerta('El email no es valido', 'error');
            return;
        }
        
        mostrarAlerta('Suscrito correctamente', '');
        formulario.reset();
    }

    function mostrarAlerta(mensaje, tipo){
        const parrafoError = document.querySelector('.error');
        const parrafoExito = document.querySelector('.exito');
        parrafoError ? parrafoError.remove() : '';
        parrafoExito ? parrafoExito.remove() : '';
        const p = document.createElement('P');
        p.textContent = mensaje
        if(tipo === 'error'){
            p.classList.add('error');
        }else{
            p.classList.add('exito');
        }
        formulario.appendChild(p);
        setTimeout(() => {
            p.remove()
        }, 3000);
    }
})();