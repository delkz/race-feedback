import { getLLM } from './llm/factory';
import { config } from './config';
const llm = getLLM(config.llmProvider, config.llmOptions);

const lapData = {
  curva_1: { freio_pct: 90, velocidade_saida: 85 },
  curva_2: { freio_pct: 40, velocidade_saida: 60 },
  tempo_volta: 1.42,
  melhor_tempo: 1.39
};

(async () => {
  const prompt = `
    Aja como meu engenheiro de corrida de iRacing. Sempre que eu te passar um resumo da corrida, você deve me dar instruções curtas e objetivas por curva, tempo de volta e estratégias simples para melhorar.
Seja rapido e objetivo, use termos técnicos de corrida, tente não demorar mais do que 30 segundos respondendo
Exemplo de resposta esperada:

"Curva 1: frear mais cedo, usar a zebra. Curva 4: entrada mais aberta. Curva 6: acelera forte na saída. Última volta: 1:32.000. Aproveitar vácuo na reta."

Agora aqui está o meu resumo da última sessão:

[cole aqui seus dados, como tempo, erros cometidos, condição da pista, carro, etc.]
    
    \n${JSON.stringify(lapData, null, 2)}`;

  await llm.generateFeedbackStream(prompt, (chunk) => {
    process.stdout.write(chunk);
    // Or: tts.speak(chunk); with buffering
  });
})();
