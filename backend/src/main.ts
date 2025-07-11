import { getLLM } from './llm/factory';
import { config } from './config';
import { createPrompt } from './tools/createPrompt';
const llm = getLLM(config.llmProvider, config.llmOptions);

// i will improve this later when using real iracing data, for now it's just a placeholder
const lapData = {
  curva_1: { freio_pct: 90, velocidade_saida: 85 },
  curva_2: { freio_pct: 40, velocidade_saida: 60 },
  tempo_volta: 1.42,
  melhor_tempo: 1.39
};

(async () => {

  const prompt = createPrompt({lapData})

  await llm.generateFeedbackStream(prompt, (chunk) => {
    process.stdout.write(chunk);
    // Or: tts.speak(chunk); with buffering
  });
})();
