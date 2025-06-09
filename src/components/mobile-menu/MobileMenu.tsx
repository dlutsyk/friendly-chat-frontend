'use client';

import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import { Cross1Icon, HamburgerMenuIcon, GearIcon, ExitIcon } from "@radix-ui/react-icons";
import { Logo } from "@ui";
import { ChatUserList } from "@components";
import Link from "next/link";

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
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between">
              <Logo caption={'Hi, Unknown Friend'}/>
              <Dialog.Close className="cursor-pointer w-[32px] h-[32px]">
                <Cross1Icon width={24} height={24}/>
              </Dialog.Close>
            </div>
            
            <div className="flex-1 overflow-hidden my-4">
              <ChatUserList/>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-gray-200">
              <Link className="flex gap-2 items-center p-2" href="/settings" onClick={() => setOpen(false)}>
                <GearIcon width={24} height={24}/> Settings
              </Link>
              <Link
                className="flex gap-2 items-center bg-black text-white p-3 rounded-lg"
                href="/logout"
                onClick={() => setOpen(false)}
              >
                <ExitIcon width={18} height={18}/> Logout
              </Link>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;
export { MobileMenu };
