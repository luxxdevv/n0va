// This is a server component
export const dynamic = "force-dynamic"

// Import the client component
import ForgotPasswordForm from "./form"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-n0va-dark px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 text-primary">✨</div>
            <div className="text-2xl">
              n<span>0</span>va.<span>one</span>
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Reset Your <span className="text-primary">Password</span>
          </h1>
          <p className="mt-2 text-sm text-zinc-400">Enter your email to receive a password reset link</p>
        </div>

        {/* Client component with all the auth logic */}
        <ForgotPasswordForm />
      </div>
    </div>
  )
}

