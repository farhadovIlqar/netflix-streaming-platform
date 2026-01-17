import { getRegion } from "./getRegion"

export async function getTopRatedLocal() {
  const region = await getRegion()
  console.log(region)
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  const API_KEY = process.env.TMDB_API_KEY
  if (!baseURL || !API_KEY) {
    throw new Error("Error")
  }
  const url = `${baseURL}/movie/top_rated?api_key=${API_KEY}&region=${region}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("Error ok")
  }
  const data = await res.json()
  return data.results
}

export async function getNowPlaying() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  const API_KEY = process.env.TMDB_API_KEY
  if (!baseURL || !API_KEY) {
    throw new Error("Error")
  }
  const url = `${baseURL}/movie/now_playing?api_key=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("Error ok")
  }
  const data = await res.json()
  return data.results
}

export async function getPopular() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  const API_KEY = process.env.TMDB_API_KEY
  if (!baseURL || !API_KEY) {
    throw new Error("Error")
  }
  const url = `${baseURL}/movie/popular?api_key=${API_KEY}&page=2`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("Error ok")
  }
  const data = await res.json()
  return data.results
}
