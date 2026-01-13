import { NextResponse } from 'next/server';

// Bu vacibdir! Next.js-ə deyirik ki, bu routu statik cache-ləməsin.
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  let intervalId: NodeJS.Timeout;

  // 1. Stream (Axın) yaradırıq
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      // Funksiya: Datanı SSE formatına salıb göndərir
      const sendEvent = (data: any) => {
        const text = `data: ${JSON.stringify(data)}\n\n`; // SSE formatı mütləq belə olmalıdır: data: ... \n\n
        controller.enqueue(encoder.encode(text));
      };

      // 2. Simulyasiya: Hər saniyə yeni data göndəririk
      intervalId = setInterval(() => {
        const message = {
          time: new Date().toLocaleTimeString(),
          message: "Serverdən salamlar!",
          timestamp: Date.now(),
        };
        sendEvent(message);
      }, 1000);

      // (Opsional) İlk qoşulanda dərhal bir mesaj göndərək
      sendEvent({ message: "Bağlantı uğurla quruldu!" });
    },

    cancel() {
      // 3. Client çıxanda (səhifəni bağlayanda) intervalı dayandırırıq
      clearInterval(intervalId);
      console.log("Client əlaqəni kəsdi.");
    },
  });

  // 4. Response qaytarırıq (Headers çox vacibdir)
  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}