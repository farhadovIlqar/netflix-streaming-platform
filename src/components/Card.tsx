import Image from "next/image"

export default function Card({
  poster_path,
  title,
  vote_average,
}: {
  poster_path: string
  title: string
  vote_average: number
}) {
  return (
    <div className="gap-3 flex flex-col border border-light max-w-[200px] relative">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="poster"
        width={200}
        height={200}
      />
      <div className="h-full">{title}</div>
      <div className="absolute top-2 end-2 px-2 bg-red-500 border border-light rounded">{vote_average.toFixed(1)}</div>
    </div>
  )
}
