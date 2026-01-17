import RecomendedSection from "@/components/PopularMovies"
import { getPopular } from "@/lib/GET"

const data = await getPopular()

export default function Home() {
  return <RecomendedSection data={data} />
}
