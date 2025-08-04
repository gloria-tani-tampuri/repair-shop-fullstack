import { HomeIcon, File, UserRound } from "lucide-react"
import Link from "next/link"
import NavButton from "./NavButton"

const Header = () => {
  return (
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20"> 
            <div className="flex h-8 items-center justify-between w-full "> 
                <div className=" flex itens-center gap-2">
                    <NavButton icon={HomeIcon} label="Home" href="/home" />
                   <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home"></Link>
                   <h1 className="hidden sm:block text-xl font-bold">Computer Repair Shop</h1>
                </div>
                <div className="flex items-center gap-2">
                    <p>Right</p>
                </div>
            </div>
        </header>
  )
}

export default Header
