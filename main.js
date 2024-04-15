const form = document.getElementById('form-exercicio');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');
const containerMensagemErro = document.querySelector('.error-message');
const containerMensagemSucesso = document.querySelector('.success-message');

function validaNumero() {
    if(parseFloat(campoB.value) > parseFloat(campoA.value)) {
        return true;
    }
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpar mensagens anteriores
    containerMensagemErro.innerHTML = '';
    containerMensagemSucesso.innerHTML = '';
    
    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);
    const MensagemSucesso = `Parabens!, o número do campo B: <b>"${campoB.value}"</b>, é maior que o número do campo A: <b>"${campoA.value}"</b>`;
    const MensagemErro = `Infelizmente não foi desta vez, o número do campo B <b>${campoB.value}</b>, deverá ser maior que o número do campo A <b>${campoA.value}</b>`;

    if(validaNumero()) {
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    } else {
        containerMensagemErro.innerHTML = MensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});

campoB.addEventListener('submit', function(e) {
    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(e.target.value);

    if (!validaNumero()) {
        campoB.classList.add('error');
        containerMensagemErro.style.display = 'block';
    } else {
        campoB.classList.remove('error');
        containerMensagemErro.style.display = 'none';
    }
});