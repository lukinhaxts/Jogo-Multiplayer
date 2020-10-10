export default function criarJogo()
{
    const estadoAtual = {
        jogadores: {},
        frutas: {},
        areaDoJogo: {
            altura: 10,
            largura: 10
        }
    }

    function adicionarJogador(comando)
    {
        const nomeDoJogador = comando.nomeDoJogador;
        const jogadorX = comando.jogadorX;
        const jogadorY = comando.jogadorY;

        estadoAtual.jogadores[nomeDoJogador] = {
            x: jogadorX,
            y: jogadorY
        }
    }

    function removerJogador(comando)
    {
        const nomeDoJogador = comando.nomeDoJogador;
        delete estadoAtual.jogadores[nomeDoJogador];
    }

    function adicionarFruta(comando)
    {
        const nomeDaFruta = comando.nomeDaFruta;
        const frutaX = comando.frutaX;
        const frutaY = comando.frutaY;

        estadoAtual.frutas[nomeDaFruta] = {
            x: frutaX,
            y: frutaY
        }
    }

    function removerFruta(comando)
    {
        const nomeDaFruta = comando.nomeDaFruta;
        delete estadoAtual.frutas[nomeDaFruta];
    }

    function moverJogador(comando)
    {
        
        const movimentosPermitidos = {
            ArrowUp(jogador)
            {
                if(jogador.y - 1 >= 0)
                {
                    jogador.y -= 1;
                    return;
                }
            },
            ArrowDown(jogador)
            {
                if(jogador.y + 1 < estadoAtual.areaDoJogo.altura)
                {
                    jogador.y += 1;
                    return;
                }
            },
            ArrowLeft(jogador)
            {
                if(jogador.x - 1 >= 0)
                {
                    jogador.x -= 1;
                    return;
                }
            },
            ArrowRight(jogador)
            {
                if(jogador.x + 1 < estadoAtual.areaDoJogo.largura)
                {
                    jogador.x += 1;
                    return;
                }
            }
        }

        const teclaPressionada = comando.teclaPressionada;
        const nomeDoJogador = comando.nomeDoJogador;
        const jogador = estadoAtual.jogadores[nomeDoJogador];
        const funcaoMovimento = movimentosPermitidos[teclaPressionada];
        if(jogador && funcaoMovimento)
        {
            funcaoMovimento(jogador);
            checarColisaoComFruta(nomeDoJogador);
        }
    }

    function checarColisaoComFruta(nomeDoJogador)
    {
        const jogador = estadoAtual.jogadores[nomeDoJogador];

        for(const nomeDaFruta in estadoAtual.frutas)
        {
            const fruta = estadoAtual.frutas[nomeDaFruta];
            console.log("Checando colisão entre " + nomeDoJogador + " e " + nomeDaFruta);

            if((jogador.x === fruta.x) && (jogador.y == fruta.y))
            {
                console.log("COLISÃO!! Entre " + nomeDoJogador + " e " + nomeDaFruta);
                removerFruta({nomeDaFruta: nomeDaFruta});
            }
        }
    }

    return {
        adicionarJogador,
        removerJogador,
        adicionarFruta,
        removerFruta,
        moverJogador,
        estadoAtual
    }
}