import { BaseLLM } from './BaseLLM';
import { OllamaProvider } from './providers/OllamaProvider';

export function getLLM(provider: string, options: any): BaseLLM {
  switch (provider) {
    case 'ollama':
      return new OllamaProvider(options.model);
    default:
      throw new Error(`LLM provider '${provider}' não é suportado.`);
  }
}
