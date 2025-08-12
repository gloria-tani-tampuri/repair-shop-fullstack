import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const loginPage = () => {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4 justify-center">
        <h1>Repair Shop</h1>
        <Button asChild>
            <LoginLink>Login</LoginLink>
        </Button>
    </main>
  )
}

export default loginPage
