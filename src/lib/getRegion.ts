import { headers } from "next/headers"

export async function getRegion() {
  try {
    const h = await headers()
    const country = h.get("x-vercel-ip-country")

    if (country && country.length === 2) {
      return country.toUpperCase()
    }

    return "TR"
  } catch (err) {
    console.error("getRegion() failed:", err)
    return "US"
  }
}
