"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".blogs") && !e.target.closest(".mega_dropdown")) ||
        e.target.closest(".mega_dropdown ul li")
      ) {
        setBlogDropdown(false);
      }

      if (
        (!e.target.closest(".mobile_menu_btn") &&
          !e.target.closest(".main_menu")) ||
        e.target.closest(".main_menu ul li a")
      ) {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <header className="py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/logo/logo.png"
              alt=""
              className="w-11"
              width={500}
              height={500}
            />
            <h2 className="text-2xl text-gradient font-bold">Code Gallery</h2>
          </Link>

          <div className="mobile_menu">
            <button
              className="mobile_menu_btn"
              onClick={() => setMobileMenu(true)}
            >
              <HiOutlineMenuAlt3 className="text-2xl" />
            </button>
          </div>

          <nav className={`main_menu ${mobileMenu && "main_menu_show"}`}>
            <button
              onClick={() => setMobileMenu(false)}
              className="menu_close_btn"
            >
              <AiOutlineClose />
            </button>

            <ul className="flex gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <button
                  className="blogs flex items-center"
                  onClick={() => setBlogDropdown(!blogDropdown)}
                >
                  Blogs <MdKeyboardArrowDown className="text-xl ml-1" />
                </button>

                <div
                  className={`mega_dropdown ${
                    blogDropdown && "mega_dropdown_show"
                  }`}
                >
                  <ul>
                    <li>
                      <Link href="">HTML & CSS</Link>
                    </li>
                    <li>
                      <Link href="">Javascript</Link>
                    </li>
                    <li>
                      <Link href="">Typescript</Link>
                    </li>
                    <li>
                      <Link href="">Tailwind CSS</Link>
                    </li>
                    <li>
                      <Link href="">Bootstrap</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link href="">React Js</Link>
                    </li>
                    <li>
                      <Link href="">Next Js</Link>
                    </li>
                    <li>
                      <Link href="">Redux</Link>
                    </li>
                    <li>
                      <Link href="">PHP</Link>
                    </li>
                    <li>
                      <Link href="">Laravel</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link href="">Express Js</Link>
                    </li>
                    <li>
                      <Link href="">MongoDB</Link>
                    </li>
                    <li>
                      <Link href="">SQL</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/">Video Tutorial</Link>
              </li>
              <li>
                <Link href="/">Courses</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">
                  <RiLoginCircleLine className="text-[17px] -mt-px mr-1" />
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
