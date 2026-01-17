import Image from "next/image"

export default function Card({
  poster_path,
  title,
}: {
  poster_path: string
  title: string
}) {
  return (
    <div className="gap-3 flex flex-col border border-light max-w-[200px]">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="poster"
        width={200}
        height={200}
      />
      <div className="h-full">{title}</div>
    </div>
  )
}
