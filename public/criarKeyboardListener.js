export default function criarKeyboardListener(document)
{
    const estadoAtual = {
        observers: []
    }

    function subscrever(observerFunction)
    {
        estadoAtual.observers.push(observerFunction);
    }

    function notificarObservers(comando)
    {
        for(const observerFunction of estadoAtual.observers)
        {
            observerFunction(comando);
        }
    }

    document.addEventListener("keydown", tratamentoDeKeydown);

    function tratamentoDeKeydown(evento)
    {
        const teclaPressionada = evento.key;

        const comando = {
            nomeDoJogador: "Jogador1",
            teclaPressionada
        }

        notificarObservers(comando);
    }

    return {
        subscrever
    }
}