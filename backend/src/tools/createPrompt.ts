export function createPrompt(
    { lapData }: {
        lapData: any // i will type this later when using real iracing data, for now it's just a placeholder
    }
): string {
    return `
    Aja como meu engenheiro de corrida de iRacing. Sempre que eu te passar um resumo da corrida, você deve me dar instruções curtas e objetivas por curva, tempo de volta e estratégias simples para melhorar.
Seja rapido e objetivo, use termos técnicos de corrida, tente não demorar mais do que 30 segundos respondendo
Exemplo de resposta esperada:

"Curva 1: frear mais cedo, usar a zebra. Curva 4: entrada mais aberta. Curva 6: acelera forte na saída. Última volta: 1:32.000. Aproveitar vácuo na reta."

Agora aqui está o meu resumo da última sessão:

[cole aqui seus dados, como tempo, erros cometidos, condição da pista, carro, etc.]
    
    \n${JSON.stringify(lapData, null, 2)}`;;
}