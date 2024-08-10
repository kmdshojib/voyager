import { signIn } from "../api/auth/[...nextauth]/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 