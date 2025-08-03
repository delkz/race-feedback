import express from 'express';
import cors from 'cors';
import { getLLM } from './llm/factory';
import { config } from './config';
import { createPrompt } from './tools/createPrompt';

const app = express();
app.use(cors());
const llm = getLLM(config.llmProvider, config.llmOptions);

let clients: Response[] = []; // conexões ativas
const lapData = {
  circuit: 'Daytona International Speedway',
  drivers:[
    { name: 'David', car: 'Porsche 911 GT3 Cup',position: 1 },
    { name: 'Alice', car: 'Porsche 911 GT3 Cup',position: 2 }
  ],
  turns: [
    { name: 'Curva 1', angle: 90, type: 'hairpin' },
    { name: 'Curva 2', angle: 45, type: 'chicane' },
    { name: 'Curva 3', angle: 60, type: 'sweeper' },
    { name: 'Curva 4', angle: 30, type: 'fast sweeper' },
    { name: 'Curva 5', angle: 120, type: 'tight hairpin' },
    { name: 'Curva 6', angle: 75, type: 'medium sweeper' },
    { name: 'Curva 7', angle: 90, type: 'sharp hairpin' },
    { name: 'Curva 8', angle: 45, type: 'chicane' },
  ],
  idealTimeLap: 1.40,
  currentLap: 3,
  currentLapData: {
    turns:[
      { name: 'Curva 1', time: 0.15, speed: 80 },
      { name: 'Curva 2', time: 0.20, speed: 75 },
      { name: 'Curva 3', time: 0.18, speed: 85 },
      { name: 'Curva 4', time: 0.22, speed: 90 },
      { name: 'Curva 5', time: 0.25, speed: 70 },
      { name: 'Curva 6', time: 0.20, speed: 80 },
      { name: 'Curva 7', time: 0.30, speed: 65 },
      { name: 'Curva 8', time: 0.25, speed: 75 }
    ]
  },
  currentLapTime: 1.42,
  bestLapTime: 1.39,
};

// SSE - mantém conexão aberta
app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  clients.push(res);
  console.log('🟢 Cliente conectado ao SSE');
  onNewLapData(lapData);
  // Remove se desconectar
  req.on('close', () => {
    clients = clients.filter((client) => client !== res);
    console.log('🔴 Cliente desconectado do SSE');
  });
});

// Simulador de evento do iRacing (pode ser WebSocket, webhook, etc)
function onNewLapData(lapData: any) {
  console.log('📡 Dados de volta recebidos:', lapData);
  const prompt = createPrompt({ lapData });

  clients.forEach(async (res) => {
    try {
      console.log('🔄 Gerando feedback para o cliente...');
      await llm.generateFeedbackStream(prompt, (chunk: string) => {
        res.write(`data: ${chunk}\n\n`);
      });
    } catch (err) {
      res.write(`data: ⚠️ Erro ao gerar feedback\n\n`);
    }
  });
}

// Exemplo: simular dados chegando a cada 1min
setInterval(() => {
  onNewLapData(lapData);
}, 1000 * (60 * 2 )); // A cada 1min

// Inicia o servidor
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
