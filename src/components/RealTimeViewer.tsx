"use client"

import { useEffect, useState } from "react"

type SSEData = {
  viewerCount: number
}

export default function RealTimeClock() {
  const [data, setData] = useState<SSEData | null>(null)

  useEffect(() => {
    const eventSource = new EventSource("/api/sse")

    eventSource.onmessage = (event) => {
      try {
        const parsedData: SSEData = JSON.parse(event.data)
        setData(parsedData)
      } catch (err) {
        console.error("JSON parse error:", err)
      }
    }

    eventSource.onerror = (err) => {
      console.error("SSE Error:", err)
      eventSource.close()
    }

    return () => {
      eventSource.close()
      console.log("Bağlantı bağlandı")
    }
  }, [])

  return (
    <div className="p-2 rounded-lg shadow-md bg-card w-fit flex items-center gap-1">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>

      {data ? (
        <div>
          <p className="text-xl font-mono text-blue-600">{data.viewerCount}</p>
        </div>
      ) : (
        <p>Fetching...</p>
      )}
    </div>
  )
}
