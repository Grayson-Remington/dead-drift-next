import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="text-shadow fixed z-10 h-[72px] w-full bg-yellow-500 text-white">
      <div className="flex h-full w-full items-center justify-between px-2 sm:px-4 md:justify-center lg:px-8 ">
        <div className="hidden h-full w-auto list-none items-stretch  justify-center gap-4 md:flex">
          <Link
            href="/"
            className="flex h-full items-center overflow-hidden p-2 font-medium text-inherit active:bg-white"
          >
            Home
          </Link>
          <Link
            href="/Team"
            className="flex h-full items-center p-2 text-center font-medium text-inherit active:bg-white"
          >
            The Team
          </Link>
        </div>

        <div className="flex gap-2 py-4 md:p-4">
          <img
            className="aspect-auto h-8"
            src="./assets/dead-drift-river.png"
            alt=""
          />
          <img
            className="aspect ratio-auto h-10"
            src="./assets/dead-drift-logo.png"
            alt=""
          />
        </div>
        <div className="m-0 hidden h-full w-auto list-none items-stretch gap-4 p-0 md:flex">
          <Link
            href="/upcomingevents"
            className="flex h-full items-center p-2 font-medium text-inherit active:bg-white"
          >
            Upcoming Events
          </Link>
          <Link
            href="/videos"
            className="flex h-full items-center p-2 text-center font-medium text-inherit active:bg-white"
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
          <Hamburger
            className="md:hidden"
            toggled={isOpen}
            toggle={setIsOpen}
          />
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
            className="flex w-full list-none flex-col bg-black md:hidden"
            id="mobile-menu"
          >
            <Link
              href="/"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
            <Link
              href="/team"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              The Team
            </Link>
            <Link
              href="/upcomingevents"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Upcoming Events
            </Link>
            <Link
              href="/videos"
              className="m-2 block text-center text-2xl font-medium text-white"
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
