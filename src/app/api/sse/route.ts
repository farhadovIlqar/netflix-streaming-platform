import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  function viewerCount() {
    const viewers = Math.floor(Math.random() * 51) + 300
    return viewers
  }
  let intervalId: NodeJS.Timeout

  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder()

      const sendEvent = (data: object) => {
        const text = `data: ${JSON.stringify(data)}\n\n`
        controller.enqueue(encoder.encode(text))
      }

      intervalId = setInterval(() => {
        const message = {
          viewerCount: viewerCount(),
        }
        sendEvent(message)
      }, 1000)

      sendEvent({ message: "Bağlantı uğurla quruldu!" })
    },

    cancel() {
      clearInterval(intervalId)
      console.log("Client əlaqəni kəsdi.")
    },
  })

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
