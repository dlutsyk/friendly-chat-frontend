import { IoChatbubbles } from "react-icons/io5";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex items-center gap-2 font-light" href="/">
      <IoChatbubbles size="24"/> Friendly Chat
    </Link>
  )
}

export { Logo }
