/* OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior
- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
- passo 2 - dar um jeito de identificar o clique no elemento da aba
- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
- passo 4 - marcar a aba clicada como selecionado
- passo 5 - esconder o conteúdo anterior
- passo 6 - mostrar o conteúdo da aba selecionada
*/

// Passo 1 -dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // Passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function () {

        //Validação se a aba já é a principal, caso seja, não será executado  o restante
        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);

    });
});

function selecionarAba(aba){
    // Passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // Passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
};

function mostrarInformacoesDaAba(aba){
    // Passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // Passo 6 - mostrar o conteúdo da aba selecionada
    const idElementoInformacoesAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idElementoInformacoesAba);
    informacaoASerMostrada.classList.add("selecionado");
};