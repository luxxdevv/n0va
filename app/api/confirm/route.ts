import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get("token")
  const type = searchParams.get("type")
  const redirectTo = searchParams.get("redirect_to")

  // Redirect to the main site with the token
  return NextResponse.redirect(
    `https://n0va.one/auth/callback?token=${token}&type=${type}&redirect_to=${redirectTo || ""}`,
  )
}

