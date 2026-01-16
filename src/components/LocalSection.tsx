import { MovieArray } from "@/types/types"

export default function LocalSection({ data }: { data: MovieArray }) {
  return (
    <div>
      {data.map((movie, index) => (
        <h1 key={index}>{movie.original_title}</h1>
      ))}
    </div>
  )
}
