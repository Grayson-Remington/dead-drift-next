import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-shadow fixed z-10 h-[72px] w-full bg-yellow-500 text-white">
      <div className="flex h-full w-full items-center justify-between px-2 sm:px-4 md:justify-center lg:px-8 ">
        <div className="hidden h-full w-auto list-none items-stretch  justify-center gap-4 md:flex">
          <Link
            href="/"
            className="flex h-full items-center overflow-hidden p-2 font-medium text-inherit hover:scale-105 active:bg-white"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="flex h-full items-center p-2 text-center font-medium text-inherit hover:scale-105 active:bg-white"
          >
            The Team
          </Link>
        </div>

        <div className="relative flex gap-2 py-4 md:p-4">
          <Image
            className="aspect-auto h-8"
            src="/assets/dead-drift-river.png"
            alt=""
            width={57}
            height={32}
          />
          <Image
            className="aspect ratio-auto h-10"
            src="/assets/dead-drift-logo.png"
            alt=""
            width={210}
            height={40}
          />
        </div>
        <div className="m-0 hidden h-full w-auto list-none items-stretch gap-4 p-0 md:flex">
          <Link
            href="/upcomingevents"
            className="flex h-full items-center p-2 font-medium text-inherit hover:scale-105 active:bg-white"
          >
            Upcoming Events
          </Link>
          <Link
            href="/videos"
            className="flex h-full items-center p-2 text-center font-medium text-inherit hover:scale-105 active:bg-white"
          >
            Videos
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-end md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="flex w-full list-none flex-col border-t border-white bg-yellow-500 md:hidden"
            id="mobile-menu"
          >
            <Link
              href="/"
              className=" m-2 block text-center text-2xl font-medium text-white hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <Link
              href="/team"
              className="m-2 block text-center text-2xl font-medium text-white hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              The Team
            </Link>
            <Link
              href="/upcomingevents"
              className="m-2 block text-center text-2xl font-medium text-white hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              Upcoming Events
            </Link>
            <Link
              href="/videos"
              className="m-2 block text-center text-2xl font-medium text-white hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
            >
              Videos
            </Link>
          </div>
        )}
      </Transition>
    </nav>
  );
}
