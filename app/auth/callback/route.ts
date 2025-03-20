import { createServerClient } from "@/lib/supabase-server"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") || "/dashboard"

  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient()

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return NextResponse.redirect(new URL(`/auth/success?next=${next}`, request.url))
    }

    return NextResponse.redirect(new URL("/auth/error", request.url))
  }

  // Return the user to a error page if code is not available
  return NextResponse.redirect(new URL("/auth/error", request.url))
}

