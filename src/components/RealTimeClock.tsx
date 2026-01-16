'use client'; // SSE brauzer API-dir (EventSource), ona görə mütləq Client Component olmalıdır

import { useEffect, useState } from 'react';

// Gələn datanın tipi
type SSEData = {
  time?: string;
  message: string;
  timestamp?: number;
};

export default function RealTimeClock() {
  const [data, setData] = useState<SSEData | null>(null);
  const [status, setStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');

  useEffect(() => {
    // 1. API-yə qoşuluruq
    const eventSource = new EventSource('/api/sse');

    // 2. Mesaj gələndə işə düşən funksiya
    eventSource.onmessage = (event) => {
      try {
        const parsedData: SSEData = JSON.parse(event.data);
        setData(parsedData);
        setStatus('connected');
      } catch (err) {
        console.error("JSON parse error:", err);
      }
    };

    // 3. Xəta baş verərsə
    eventSource.onerror = (err) => {
      console.error("SSE Error:", err);
      setStatus('error');
      eventSource.close(); // Xəta olanda bağlaya bilərik və ya yenidən cəhd edə bilərik
    };

    // 4. Cleanup: Komponent ekrandan gedəndə əlaqəni mütləq kəsməliyik!
    return () => {
      eventSource.close();
      console.log("Bağlantı bağlandı");
    };
  }, []);

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-sm">
      <h2 className="text-xl font-bold mb-4">Canlı Server Datası</h2>
      
      <div className="mb-2">
        Status: 
        <span className={`ml-2 font-mono ${
          status === 'connected' ? 'text-green-600' : 'text-red-500'
        }`}>
          {status.toUpperCase()}
        </span>
      </div>

      {data ? (
        <div className="space-y-2">
          <p className="text-4xl font-mono text-blue-600">{data.time || "--:--:--"}</p>
          <p className="text-sm text-gray-500">{data.message}</p>
        </div>
      ) : (
        <p>Gözlənilir...</p>
      )}
    </div>
  );
}