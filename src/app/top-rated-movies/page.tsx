import LocalSection from "@/components/TopRatedMoviesLocal"
import { getTopRatedLocal } from "@/lib/GET"

const data = await getTopRatedLocal()

export default function Home() {
  return <LocalSection data={data} />
}
