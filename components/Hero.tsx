const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/jpkiyoshi/image/upload/v1645741248/infinite7/hero-background_zi2kzh.png')] h-[40rem]">
      <div className="flex flex-col items-center mt-32 gap-14">
        <h1 className="text-5xl font-bold text-white w-96">
          O seu negócio a um clique de distância.
        </h1>
        <div className="relative text-gray-600 focus-within:text-gray-400 ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-3 text-white bg-white rounded-xl pl-14 focus:outline-none focus:bg-white focus:text-gray-900 w-[30rem]"
            placeholder="Pesquise por rua ou bairro"
          />
          <span className="absolute inset-y-0 flex items-center pl-1 right-4">
            <span className="absolute w-0 h-8 bg-black border right-16 opacity-40"></span>
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="32"
                height="32"
                x="0"
                y="0"
                viewBox="0 0 32 32"
              >
                <g transform="matrix(1,0,0,1,0,0)">
                  <g
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_13"
                    data-name="Layer 13"
                  >
                    <path
                      d="m30 7a1 1 0 0 1 -1 1h-26a1 1 0 0 1 0-2h26a1 1 0 0 1 1 1zm-5 8h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm-9 9h-13a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2z"
                      fill="#000"
                      data-original="#000000"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <button className="absolute flex items-center w-10 h-10 bg-white rounded-full left-[91rem] -top-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="512"
            height="512"
            x="0"
            y="0"
            viewBox="0 0 100 100"
            xmlSpace="preserve"
            className=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m48 28v36.17l-14.31-14.31-2.83 2.83 19.14 19.14 19.14-19.14-2.83-2.83-14.31 14.31v-36.17z"
                  fill="#000000"
                  data-original="#000000"
                  className=""
                ></path>
              </g>
            </g>
          </svg>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3000"
          height="216"
          viewBox="0 0 3000 216"
          className="fill-white"
        >
          <path className="cls-1" d="M0,224L1472,0,3012,220" />
        </svg>
      </div>
    </div>
  );
};
export default Hero;
