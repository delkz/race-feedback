export interface BaseLLM {
  generateFeedbackStream(prompt: string, onChunk: (text: string) => void): Promise<void>;
}
