// ===============================
// MÁSCARA DE CPF
// ===============================

const cpf = document.getElementById("cpf");

if (cpf) {
    cpf.addEventListener("input", function () {
        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;
    });
}


// ===============================
// MÁSCARA DE TELEFONE
// ===============================

const telefone = document.getElementById("telefone");

if (telefone) {
    telefone.addEventListener("input", function () {
        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

        telefone.value = valor;
    });
}


// ===============================
// MÁSCARA DE CEP
// ===============================

const cep = document.getElementById("cep");

if (cep) {
    cep.addEventListener("input", function () {
        let valor = cep.value.replace(/\D/g, "");

        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

        cep.value = valor;
    });
}


// ===============================
// TOAST
// ===============================

function mostrarToast(mensagem) {

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");

        toast.id = "toast";
        toast.className = "toast";

        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");

        document.body.appendChild(toast);
    }

    toast.textContent = mensagem;
    toast.classList.add("mostrar");

    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 4000);
}


// ===============================
// ALERTA DO FORMULÁRIO
// ===============================

function mostrarAlerta(mensagem, tipo) {

    let alerta = document.getElementById("form-alert");

    if (!alerta) {

        alerta = document.createElement("div");

        alerta.id = "form-alert";
        alerta.className = "alert";

        alerta.setAttribute("role", "alert");

        const formularioAtual = document.querySelector("form");

        if (formularioAtual) {
            formularioAtual.parentNode.insertBefore(
                alerta,
                formularioAtual
            );
        }
    }

    alerta.textContent = mensagem;

    alerta.classList.remove(
        "alert-success",
        "alert-error"
    );

    alerta.classList.add(tipo);

    alerta.hidden = false;
}


// ===============================
// CRIAR MODAL
// ===============================

function criarModal() {

    let modal = document.getElementById("modal-confirmacao");

    if (modal) {
        return modal;
    }

    modal = document.createElement("dialog");

    modal.id = "modal-confirmacao";
    modal.className = "modal";


    // Conteúdo do modal
    const conteudo = document.createElement("div");

    conteudo.className = "modal-conteudo";


    // Título
    const titulo = document.createElement("h2");

    titulo.textContent = "Cadastro realizado";


    // Texto
    const texto = document.createElement("p");

    texto.textContent =
        "Seu interesse em colaborar com a ONG foi registrado com sucesso.";


    // Botão
    const botao = document.createElement("button");

    botao.type = "button";
    botao.id = "fechar-modal";
    botao.textContent = "Fechar";


    // Montagem
    conteudo.appendChild(titulo);
    conteudo.appendChild(texto);
    conteudo.appendChild(botao);

    modal.appendChild(conteudo);

    document.body.appendChild(modal);


    // Fechar modal
    botao.addEventListener("click", function () {
        modal.close();
    });


    return modal;
}


// ===============================
// ENVIO DO FORMULÁRIO
// ===============================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        // Verificação dos campos
        if (!formulario.checkValidity()) {

            mostrarAlerta(
                "Por favor, preencha corretamente todos os campos obrigatórios.",
                "alert-error"
            );

            mostrarToast(
                "Verifique os campos do formulário."
            );

            formulario.reportValidity();

            return;
        }


        // Mensagem de sucesso
        mostrarAlerta(
            "Cadastro enviado com sucesso! Obrigado por querer colaborar.",
            "alert-success"
        );


        // Toast
        mostrarToast(
            "Cadastro enviado com sucesso!"
        );


        // Modal
        const modal = criarModal();

        modal.showModal();


        // Limpar formulário
        formulario.reset();

    });
}


// ===============================
// BADGE DE DOAÇÃO
// ===============================

const badgeDoacao = document.getElementById("badge-doacao");

if (badgeDoacao) {

    badgeDoacao.addEventListener("click", function () {

        mostrarToast(
            "A campanha está ativa! Você pode contribuir com alimentos e itens essenciais."
        );

    });
}


// ===============================
// BADGE DE VOLUNTARIADO
// ===============================

const badgeVoluntariado =
    document.getElementById("badge-voluntariado");

if (badgeVoluntariado) {

    badgeVoluntariado.addEventListener("click", function () {

        mostrarToast(
            "As inscrições estão abertas! Acesse a página Participe para realizar seu cadastro."
        );

    });
}
