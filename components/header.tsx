"use client";

import useServerDarkMode from "@/hooks/use-server-dark-mode";
import DarkMode from "./dark-mode";
import Navigation, { NavigationMobile } from "./navigation";
import Link from "next/link";
import profile from "./../public/images/profile-picture.png";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const theme = useServerDarkMode();
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <>
      <header className="flex justify-between items-center mt-4">
        <div className="flex items-center md:space-x-12">
          <div>
            <Link
              href="/"
              className="text-xl font-mono flex items-center gap-4"
            >
              <Image
                src={profile}
                alt="Hendra"
                className="w-12 h-12 rounded-full"
                priority={true}
                quality={50}
                placeholder="blur"
              />
              Hendra Putu
            </Link>
          </div>
          <Navigation />
        </div>
        <div className="flex md:gap-3">
          <button className="md:hidden block" onClick={handleShow}>
            <svg
              className="fill-slate-100 size-6 md:hidden block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="md:block hidden">
            <DarkMode defaultTheme={theme} />
          </div>
        </div>
      </header>
      {isShow && <NavigationMobile />}
    </>
  );
}
