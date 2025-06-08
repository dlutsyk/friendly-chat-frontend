import { RiChatSmile2Line } from "react-icons/ri";

import Link from "next/link";

const Logo = ({caption = 'Friendly Chat'}) => {
  return (
    <Link className="flex items-center gap-1 font-light" href="/">
      <RiChatSmile2Line size="24"/> {caption}
    </Link>
  )
}

export { Logo }
