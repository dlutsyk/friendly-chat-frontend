'use client';

import { Logo } from "@ui";
import { MobileMenu } from "@components";

const MobileHeader = () => {
  
  return (
    <header className="w-full bg-blue-500 text-white p-4 flex items-center justify-center relative">
      <MobileMenu/>
      <Logo/>
    </header>
  );
};

export default MobileHeader;
export { MobileHeader };
