'use client';

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Logo } from "@ui";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-1"
          aria-label="Open menu"
        >
          <HamburgerMenuIcon width={21} height={21}/>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40"/>
        <Dialog.Content
          className="fixed top-0 left-0 h-full bg-gray-100 z-50 p-4 shadow-lg flex flex-col w-[280px] max-w-full rounded-r-lg transition-transform transform translate-x-0"
        >
          <Dialog.Title/>
          <Logo caption={'Hi, Unknown Friend'}/>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full cursor-pointer"
          >
            <Cross1Icon width={20} height={20}/>
          </button>
          <div className="p-6">
            {/* Add your menu items here */}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  
  );
};

export default MobileMenu;
export { MobileMenu };
