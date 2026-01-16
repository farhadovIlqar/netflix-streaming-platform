import LocalSection from "@/components/LocalSection"
import { getDataFromTMDB } from "@/lib/GET"

const data = await getDataFromTMDB()

export default function Home() {
  return <LocalSection data={data} />
}
