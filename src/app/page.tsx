import HomePage from "@/components/HomePage"
import { Suspense } from "react"

export default async function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  )
}
