import { useEffect, useRef, useState } from "react";
import { useStore } from "../hooks/useStore";

const Console = () => {
    const [feedback, setFeedback] = useState('');
    const consoleRef = useRef<HTMLDivElement>(null);
    const setConnectionToServer = useStore((state) => state.setConnectionToServer);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3000/stream');
        setConnectionToServer(true);
        
        eventSource.onmessage = (event) => {
            setFeedback(prev => prev + event.data);
        };

        eventSource.onerror = (err) => {
            setConnectionToServer(false);
            console.error('Erro no SSE:', err);
            eventSource.close();
        };

        return () => {
            eventSource.close(); // sempre limpar
        };
    }, []);

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [feedback]);

    return (
        <div
            ref={consoleRef}
            className="md:w-1/2 rounded-lg p-6 bg-base-300 h-full overflow-auto"
        >
            <pre className="whitespace-pre-wrap font-mono break-words text-sm">
                {feedback || 'Aguardando resposta...'}
            </pre>
        </div>
    );
};

export default Console;
