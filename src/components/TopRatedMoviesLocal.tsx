import { MovieArray } from "@/types/types"
import Card from "@/components/Card"

export default function LocalSection({ data }: { data: MovieArray }) {
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
      {data.map((movie) => (
        <Card
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
        />
      ))}
    </main>
  )
}
