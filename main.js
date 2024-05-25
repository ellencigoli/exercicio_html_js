function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

var n1 = parseFloat(document.getElementById('n1').value);
var n2 = parseFloat(document.getElementById('n2').value);
var mensagem = document.getElementById('mensagem');

if (n1>n2) {
    mensagem.textContent = "O formulário é válido: O número A é maior que o número B.";
    mensagem.style.color = "green";
}
else {
    mensagem.textContent = "O formulário é inválido: O número A deve ser maior que o número B.";
    mensagem.style.color = "red";
}
}