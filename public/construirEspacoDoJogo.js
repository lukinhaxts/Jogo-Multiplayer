export default function construirEspacoDoJogo(areaDoJogo, jogo, requestAnimationFrame)
{
    const context = areaDoJogo.getContext("2d");
    context.fillStyle = "white";
    context.clearRect(0, 0, 10, 10);

    for(const nomeDoJogador in jogo.estadoAtual.jogadores)
    {
        const jogador = jogo.estadoAtual.jogadores[nomeDoJogador];
        context.fillStyle = "black";
        context.fillRect(jogador.x, jogador.y, 1, 1);
    }

    for(const nomeDaFruta in jogo.estadoAtual.frutas)
    {
        const fruta = jogo.estadoAtual.frutas[nomeDaFruta];
        context.fillStyle = "green";
        context.fillRect(fruta.x, fruta.y, 1, 1);
    }

    requestAnimationFrame(() => {
        construirEspacoDoJogo(areaDoJogo, jogo, requestAnimationFrame);
    });
}