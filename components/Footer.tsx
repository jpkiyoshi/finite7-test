import Link from 'next/link';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'next-share';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-contas-pink-light bg-finite-desert-sand">
      <div className="max-w-screen-xl px-4 pt-3 pb-10 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-between gap-10 -mx-5 -my-2x">
          <div>
            <Image
              src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1645643461/infinite7/app-logo.png"
              width="50"
              height="50"
              alt="App logo"
            />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold leading-6 text-opacity-70 text-contas-pink-light">
              Mapa do Site
            </h3>
            <div className="mt-4">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Explorar
                </a>
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Simular compra/venda
                </a>
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Login
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center mx-14">
            <h3 className="text-base font-semibold leading-6 text-opacity-70 text-contas-pink-light">
              Cadastre-se
            </h3>
            <div className="mt-4">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Sou propietário
                </a>
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Sou corretor
                </a>
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  Sou fornecedor
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold leading-6 text-opacity-70 text-contas-pink-light">
              Fale Conosco
            </h3>
            <div className="mt-4">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  flip@email.com.br
                </a>
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <a className="text-base leading-6 text-opacity-70 text-contas-pink-light hover:text-opacity-100">
                  11 98765-4321
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-base font-semibold leading-6 text-opacity-70 text-contas-pink-light">
              Siga nas redes
            </h3>
            <div className="flex flex-row items-center gap-4 mt-6">
              <div>
                <FacebookShareButton url={'https:facebook.com'}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              <div>
                <TwitterShareButton url={'https:twitter.com'}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div>
                <WhatsappShareButton url={'https:whatsapp.com'}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
