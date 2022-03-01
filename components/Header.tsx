import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import Image from 'next/image';

type LogoProps = {
  navbarOpen?: Boolean;
  setNavbarOpen: React.Dispatch<SetStateAction<Boolean>>;
};

const Logo = ({ navbarOpen, setNavbarOpen }: LogoProps) => (
  <Image
    src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1645643461/infinite7/app-logo.png"
    width="45"
    height="45"
    alt="App logo"
    onClick={() => setNavbarOpen(!navbarOpen)}
  />
);

type NavBarProps = {
  linkName: string;
  href: string;
  navbarOpen: Boolean;
  setNavbarOpen: React.Dispatch<SetStateAction<Boolean>>;
  isActive?: boolean;
};

const NavBarLink = ({
  linkName,
  href,
  navbarOpen,
  setNavbarOpen,
  isActive
}: NavBarProps) => (
  <Link href={href} locale={false}>
    <a
      className={`flex items-center px-3 py-2 leading-snug text-black hover:opacity-50 ${
        isActive && 'font-bold'
      }`}
      onClick={() => setNavbarOpen(!navbarOpen)}
    >
      <span className="ml-2">{linkName}</span>
    </a>
  </Link>
);

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState<Boolean>(false);

  return (
    <header className="top-0 z-50 bg-finite-desert-sand">
      <nav>
        <div className="container flex flex-wrap items-center justify-between m-auto lg:max-w-full lg:w-11/12 lg:flex-nowrap">
          <div className="relative flex justify-between w-full py-1 lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="ml-auto mr-auto">
                <Logo navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
              </a>
            </Link>
            <button
              className="absolute right-0 block px-3 py-1 text-xl leading-none border border-transparent border-solid rounded outline-none cursor-pointer top-3 lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="text-black fill-current h-7 w-7"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              navbarOpen ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex flex-col text-lg font-medium list-none lg:flex-row md:text-sm lg:text-sm xl:text-base lg:ml-auto lg:items-center">
              <li>
                <NavBarLink
                  isActive
                  linkName="Explorar"
                  href="#"
                  setNavbarOpen={setNavbarOpen}
                  navbarOpen={navbarOpen}
                />
              </li>
              <li>
                <NavBarLink
                  linkName="Simular compra/venda"
                  href="#"
                  setNavbarOpen={setNavbarOpen}
                  navbarOpen={navbarOpen}
                />
              </li>
              <li>
                <NavBarLink
                  linkName="Quero comprar"
                  href="#"
                  setNavbarOpen={setNavbarOpen}
                  navbarOpen={navbarOpen}
                />
              </li>
              <li>
                <NavBarLink
                  linkName="Quero Vender"
                  href="#"
                  setNavbarOpen={setNavbarOpen}
                  navbarOpen={navbarOpen}
                />
              </li>
              <button className="py-2 transition border border-black rounded-lg lg:ml-14 px-14 hover:scale-105">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
