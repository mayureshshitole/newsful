import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <section>
      <nav className="bg-[#091C29] p-2 font-nunito shadow-lg rounded-b-lg md:rounded-b-xl border-b-2 border-b-white">
        <div className=" md:max-w-7xl mx-auto flex  justify-between items-center ">
          <Link href="/">
            <div className="flex justify-center items-center space-x-2 ">
              <div className="p-0.5 rounded bg-white flex items-center hover:animate-slowSpin">
                <img
                  src="/logoNewsful.png"
                  width="50"
                  height="50"
                  alt="Logo image for www. newsful.in"
                />
              </div>
              <h1 className="uppercase cursor-pointer text-indigo-400 font-semibold first-letter:text-3xl first-letter:italic first-letter:font-extrabold transform hover:scale-105 transition duration-300 ease-in-out">
                Newsful
              </h1>
            </div>
          </Link>
          <div className="hidden md:flex justify-center items-center px-2">
            <ul className="flex items-center text-indigo-400 font-semibold space-x-5 ">
              <Link href="/">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  Top News
                </li>
              </Link>
              <Link href="/FinanceNews">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  Finance
                </li>
              </Link>
              <Link href="/CrimeNews">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  Crime
                </li>
              </Link>
              <Link href="/PoliticsNews">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  Politics
                </li>
              </Link>
              <Link href="/SportsNews">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  Sports
                </li>
              </Link>
              <Link href="/EntertainmentNews">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  Entertaiment
                </li>
              </Link>
              <Link href="/WorldNews">
                <li className="uppercase cursor-pointer hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out">
                  world
                </li>
              </Link>
            </ul>
          </div>

          <button
            className="md:hidden text-indigo-400"
            onClick={() => toggleMenu()}
          >
            {!toggle ? (
              <svg
                className="w-8 h-8 transform transition duration-1000 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 transform transition duration-1000 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {toggle && (
        <Fade top>
          <div className="bg-[#09152E] md:hidden flex justify-center items-center  py-2  transform transition duration-1000 ease-in-out rounded-b-lg">
            <ul className="flex flex-col mx-auto text-indigo-400 font-semibold  ">
              <Link href="/">
                <li
                  className=" border-b-2 border-b-bluetext-indigo-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Top News</a>
                </li>
              </Link>
              <Link href="/FinanceNews">
                <li
                  className=" border-b-2 border-b-bluetext-indigo-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Finance</a>
                </li>
              </Link>
              <Link href="/CrimeNews">
                <li
                  className=" border-b-2 border-b-bluetext-indigo-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Crime</a>
                </li>
              </Link>
              <Link href="/PoliticsNews">
                <li
                  className=" border-b-2 border-b-bluetext-indigo-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Politics</a>
                </li>
              </Link>
              <Link href="/SportsNews">
                <li
                  className=" border-b-2 border-b-bluetext-indigo-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Sports</a>
                </li>
              </Link>
              <Link href="/EntertainmentNews">
                <li
                  className=" border-b-2 border-b-bluetext-indigo-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">Entertaiment</a>
                </li>
              </Link>
              <Link href="/WorldNews">
                <li
                  className=" w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">World</a>
                </li>
              </Link>
            </ul>
          </div>
        </Fade>
      )}{" "}
    </section>
  );
};

export default NavBar;
