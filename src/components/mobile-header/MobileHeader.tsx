import React from "react";
import { Logo } from "@ui";

import { IoIosMenu } from "react-icons/io";

const MobileHeader = () => {
  return (
    <header
      className="w-full bg-blue-500 text-white p-4 flex items-center justify-center relative"
    >
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1"
      >
        <IoIosMenu size="32"/>
      </div>
      <Logo/>
    </header>
  );
};

export default MobileHeader;
export { MobileHeader };
