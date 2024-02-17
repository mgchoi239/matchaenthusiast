"use client";

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  // const { data: session } = useSession();
  // const [providers, setProviders] = useState(null);
  // const [toggleDropdown, setToggleDropdown] = useState(false);
  // useEffect(() => {
  //   const setUpProviders = async () => {
  //     const response = await getProviders();

  //     setProviders(response);
  //   };

  //   setUpProviders();
  // }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        zIndex: 1000,
      }}
      className={`flex-between w-full items-center pl-6 pr-6 pt-3 pb-4`}
    >
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/tea-ico.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
          style={{ margin: "0 10px" }}
        />
        {/* <p className="logo_text">Matcha Enthusiast</p> */}
      </Link>

      <div className="flex gap-3 md:gap-5 ml-auto" style={{ margin: "0 10px" }}>
        <Link href="/experiences" className="matcha_green_btn">
          Experiences
        </Link>
        <Link href="/projects" className="matcha_green_btn">
          Projects
        </Link>
        <Link href="/photographs" className="matcha_green_btn">
          Photographs
        </Link>

        {/* Desktop Navigation */}
        {/* <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>

              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>

              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      // signIn(provider.id)
                      console.log("Coming soon!");
                    }}
                    className="matcha_green_btn"
                  >
                    Coming Soon!
                  </button>
                ))}
            </>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
