export function createPrompt(
    { lapData }: {
        lapData: any // i will type this later when using real iracing data, for now it's just a placeholder
    }
): string {
    return `
    Aja como meu engenheiro de corrida de iRacing. Sempre que eu te passar um resumo da corrida, você deve me dar instruções curtas e objetivas por curva, tempo de volta e estratégias simples para melhorar.
    Entenda que você está me dando feedback em tempo real pelo radio, então seja rápido e direto.

    - Seja rapido e objetivo, use termos técnicos de corrida, tente não demorar mais do que 30 segundos respondendo.
    - Não responda com mais de 3 frases, apenas o necessário para melhorar minha volta.
    - Não use emojis, apenas texto.
    - Não responda em mais de 1 idioma.

    Exemplo de resposta esperada:
    "O tempo na ultima volta foi: 1.21.3, você está em P5, faltam 2 voltas para o final. acelere mais na curva 1"

    Agora aqui está o meu resumo da última volta:
    \n${JSON.stringify(lapData, null, 2)}`;;
}