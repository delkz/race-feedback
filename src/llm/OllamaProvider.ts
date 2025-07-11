import axios from 'axios';
import { BaseLLM } from './BaseLLM';

export class OllamaProvider implements BaseLLM {
  private model: string;

  constructor(model: string = 'phi3') {
    this.model = model;
  }

async generateFeedbackStream(prompt: string, onChunk: (text: string) => void) {
  const response = await axios.post(
    'http://localhost:11434/api/generate',
    {
      model: 'phi3',
      prompt,
      stream: true,
    },
    {
      responseType: 'stream',
    }
  );

  return new Promise<void>((resolve, reject) => {
    let buffer = '';

    response.data.on('data', (chunk: Buffer) => {
      const lines = chunk.toString().split('\n').filter(Boolean);

      for (const line of lines) {
        try {
          const parsed = JSON.parse(line);
          const text = parsed.response || parsed.message?.content || '';

          buffer += text;
          onChunk(text); //`speak(text)` or `console.log(text)`
        } catch (e) {
          console.error('Erro ao parsear chunk:', line);
        }
      }
    });

    response.data.on('end', () => {
      resolve();
    });

    response.data.on('error', (err: any) => {
      reject(err);
    });
  });
}
}
