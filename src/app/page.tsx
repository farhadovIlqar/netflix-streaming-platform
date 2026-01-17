import { getNowPlaying } from "@/lib/GET"
import HomePage from "../components/HomePage"

export default async function Home() {
  const data = await getNowPlaying()
  return <HomePage data={data} />
}

