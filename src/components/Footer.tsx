import React from "react";

function Footer() {
  return (
    <div className="relative col-span-full flex h-full w-full items-center justify-center bg-yellow-500 p-4">
      <p className="w-fit rounded bg-white p-1 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} DeadDriftFlycastersLLC. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
