// ==================================================
// MÁSCARA DE CPF
// ==================================================

const cpf = document.getElementById("cpf");

if (cpf) {

    cpf.addEventListener("input", function () {

        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

        cpf.value = valor;

    });

}


// ==================================================
// MÁSCARA DE TELEFONE
// ==================================================

const telefone =
    document.getElementById("telefone");

if (telefone) {

    telefone.addEventListener("input", function () {

        let valor =
            telefone.value.replace(/\D/g, "");

        valor = valor.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{5})(\d{1,4})$/,
            "$1-$2"
        );

        telefone.value = valor;

    });

}


// ==================================================
// MÁSCARA DE CEP
// ==================================================

const cep = document.getElementById("cep");

if (cep) {

    cep.addEventListener("input", function () {

        let valor =
            cep.value.replace(/\D/g, "");

        valor = valor.replace(
            /^(\d{5})(\d)/,
            "$1-$2"
        );

        cep.value = valor;

    });

}


// ==================================================
// MENU HAMBÚRGUER
// ==================================================

const menuToggle =
    document.getElementById("menu-toggle");

const menuPrincipal =
    document.getElementById("menu-principal");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", function () {

        const aberto =
            menuPrincipal.classList.toggle(
                "menu-aberto"
            );

        menuToggle.setAttribute(
            "aria-expanded",
            aberto
        );

        menuToggle.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    });

}


// ==================================================
// TOAST
// ==================================================

function mostrarToast(mensagem) {

    let toast =
        document.getElementById("toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.id = "toast";

        toast.className = "toast";

        toast.setAttribute(
            "role",
            "status"
        );

        toast.setAttribute(
            "aria-live",
            "polite"
        );

        document.body.appendChild(toast);

    }

    toast.textContent = mensagem;

    toast.classList.add("mostrar");

    setTimeout(function () {

        toast.classList.remove("mostrar");

    }, 4000);

}


// ==================================================
// ALERTA
// ==================================================

function mostrarAlerta(
    mensagem,
    tipo
) {

    const alerta =
        document.getElementById(
            "form-alert"
        );

    if (!alerta) {
        return;
    }

    alerta.textContent =
        mensagem;

    alerta.classList.remove(
        "alert-success",
        "alert-error"
    );

    alerta.classList.add(tipo);

    alerta.hidden = false;

}


// ==================================================
// MODAL
// ==================================================

function criarModal() {

    let modal =
        document.getElementById(
            "modal-confirmacao"
        );

    if (modal) {
        return modal;
    }


    modal =
        document.createElement(
            "dialog"
        );

    modal.id =
        "modal-confirmacao";

    modal.className =
        "modal";


    const conteudo =
        document.createElement(
            "div"
        );

    conteudo.className =
        "modal-conteudo";


    const titulo =
        document.createElement(
            "h2"
        );

    titulo.textContent =
        "Cadastro realizado";


    const texto =
        document.createElement(
            "p"
        );

    texto.textContent =
        "Seu interesse em colaborar com a ONG foi registrado com sucesso.";


    const botao =
        document.createElement(
            "button"
        );

    botao.type = "button";

    botao.className = "botao";

    botao.textContent =
        "Fechar";


    conteudo.appendChild(
        titulo
    );

    conteudo.appendChild(
        texto
    );

    conteudo.appendChild(
        botao
    );

    modal.appendChild(
        conteudo
    );

    document.body.appendChild(
        modal
    );


    botao.addEventListener(
        "click",
        function () {

            modal.close();

        }
    );


    return modal;

}


// ==================================================
// VALIDAÇÃO DOS CAMPOS
// ==================================================

function validarCampo(campo) {

    if (!campo) {
        return true;
    }

    if (campo.checkValidity()) {

        campo.classList.remove(
            "input-erro"
        );

        campo.classList.add(
            "input-sucesso"
        );

        return true;

    }


    campo.classList.remove(
        "input-sucesso"
    );

    campo.classList.add(
        "input-erro"
    );

    return false;

}


// ==================================================
// FORMULÁRIO
// ==================================================

const formulario =
    document.getElementById(
        "formulario-cadastro"
    );


if (formulario) {


    const campos =
        formulario.querySelectorAll(
            "input, select, textarea"
        );


    campos.forEach(function (campo) {

        campo.addEventListener(
            "blur",
            function () {

                validarCampo(campo);

            }
        );

    });


    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let formularioValido = true;


            campos.forEach(
                function (campo) {

                    if (
                        campo.type !==
                        "checkbox"
                    ) {

                        if (
                            !validarCampo(
                                campo
                            )
                        ) {

                            formularioValido =
                                false;

                        }

                    }

                }
            );


            if (
                !formulario.checkValidity()
            ) {

                formularioValido =
                    false;

            }


            if (
                !formularioValido
            ) {

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


            mostrarAlerta(
                "Cadastro enviado com sucesso! Obrigado por querer colaborar.",
                "alert-success"
            );


            mostrarToast(
                "Cadastro enviado com sucesso!"
            );


            const modal =
                criarModal();


            modal.showModal();


            formulario.reset();


            campos.forEach(
                function (campo) {

                    campo.classList.remove(
                        "input-sucesso",
                        "input-erro"
                    );

                }
            );

        }
    );

}


// ==================================================
// BADGE DE DOAÇÃO
// ==================================================

const badgeDoacao =
    document.getElementById(
        "badge-doacao"
    );

if (badgeDoacao) {

    badgeDoacao.addEventListener(
        "click",
        function () {

            mostrarToast(
                "A campanha está ativa! Você pode contribuir com alimentos e itens essenciais."
            );

        }
    );

}


// ==================================================
// BADGE DE VOLUNTARIADO
// ==================================================

const badgeVoluntariado =
    document.getElementById(
        "badge-voluntariado"
    );

if (badgeVoluntariado) {

    badgeVoluntariado.addEventListener(
        "click",
        function () {

            mostrarToast(
                "As inscrições estão abertas! Acesse a página Participe para realizar seu cadastro."
            );

        }
    );

}
