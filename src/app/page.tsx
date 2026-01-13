import HomePage from "../components/HomePage";

// export default function Home() {
//   return (
//     //<HomePage />
    
//   )
// }

import RealTimeClock from '@/components/RealTimeClock';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-3xl font-bold mb-10">Next.js SSE Demo</h1>
      <RealTimeClock />
    </main>
  );
}
