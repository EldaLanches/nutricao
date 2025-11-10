// var botaoAdicionar = document.querySelector("#adicionar-paciente");
// botaoAdicionar.addEventListener("click", function (event) { //abre chaves do botao
//     event.preventDefault();
    
//     var form = document.querySelector("#form-adiciona");
//     var pacienteTr = obtemPacienteDoFormulario(form); 

//     var pacienteTr = document.createElement("tr");

//     nomeTd.textContent = nome;
//     pesoTd.textContent = peso;
//     alturaTd.textContent = altura;
//     gorduraTd.textContent = gordura;
//     imcTd.textContent = calculaImc(peso, altura);

//     var nomeTd = document.createElement("td");
//     var pesoTd = document.createElement("td");
//     var alturaTd = document.createElement("td");
//     var gorduraTd = document.createElement("td");
//     var imcTd = document.createElement("td");

//     pacienteTr.appendChild(nomeTd);
//     pacienteTr.appendChild(pesoTd);
//     pacienteTr.appendChild(alturaTd);
//     pacienteTr.appendChild(gorduraTd);
//     pacienteTr.appendChild(imcTd);

//     var tabela = document.querySelector("#tabela-pacientes");
//     tabela.appendChild(pacienteTr);
// });

// function obtemPacienteDoFormulario(form) {
//     var paciente = {
//         nome: form.nome.value,/*esta escrito FROM ao inves de form*/
//         peso: form.peso.value, /* todos tinham ponto e virgula no final e era VIRGULA KKK */
//         altura: form.altura.value,
//         gordura: form.gordura.value,
//         imc: calculaImc(form.peso.value, form.altura.value)
//     }
//     return paciente;/*faltava esse tb */
// }

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) { //abre chaves do botao
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var pacienteTr = obtemPacienteDoFormulario(form); /* verificar se aqui tem tr */

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd); /*faltava esse dai nao ia mostrar msm*/ 

    var tabela = document.querySelector("#tabela-pacientes");


    tabela.appendChild(pacienteTr);
}); //fecha chaves do botao e fecha o parenteses da funcao

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}