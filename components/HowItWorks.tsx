import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section>
      <div className="grid grid-cols-4 grid-rows-6 bg-black h-[80rem]">
        <div className="relative col-span-1 row-span-3 bg-white">
          <Image
            src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1645741248/infinite7/how-it-works-1_k9divr.png"
            layout="fill"
          />
        </div>
        <div className="col-span-3 row-span-2 p-10 bg-finite-desert-sand">
          <p className="uppercase">Como funciona</p>
          <h2 className="text-3xl font-bold">Para compradores</h2>
          <div className="flex w-full gap-5 mt-11">
            <div className="flex gap-5">
              <div className="flex-none w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Passo 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  aliquam totam, voluptate eos mollitia, tenetur accusamus
                  molestias nam ipsa nemo reprehenderit repellat nesciunt
                  consequuntur? Voluptatem!
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-none w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Passo 2</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  aliquam totam, voluptate eos mollitia, tenetur accusamus
                  molestias nam ipsa nemo reprehenderit repellat nesciunt
                  consequuntur? Voluptatem!
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex-none w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Passo 3</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  aliquam totam, voluptate eos mollitia, tenetur accusamus
                  molestias nam ipsa nemo reprehenderit repellat nesciunt
                  consequuntur? Voluptatem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center row-span-1 bg-finite-champagne-pink">
          <Image
            src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1645643461/infinite7/app-logo.png"
            width="50"
            height="50"
            alt="App logo"
          />
        </div>
        <div className="relative col-span-2">
          <Image
            src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1645741248/infinite7/how-it-works-2_wefayo.png"
            layout="fill"
          />
        </div>
        <div className="col-span-2 row-span-3 px-20 py-10 bg-finite-desert-sand">
          <p className="uppercase">Como funciona</p>
          <h2 className="text-3xl font-bold">Para vendedores</h2>
          <div className="flex flex-col w-full gap-10 mt-11">
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-5">
                <div className="flex-none w-10 h-10 bg-black rounded-full"></div>
                <div className="w-0 h-16 border border-dashed border-finite-champagne-pink"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Passo 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  aliquam totam, voluptate eos mollitia, tenetur accusamus
                  molestias nam ipsa nemo reprehenderit repellat nesciunt
                  consequuntur? Voluptatem!
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-5">
                <div className="flex-none w-10 h-10 bg-black rounded-full"></div>
                <div className="w-0 h-16 border border-dashed border-finite-champagne-pink"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Passo 2</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  aliquam totam, voluptate eos mollitia, tenetur accusamus
                  molestias nam ipsa nemo reprehenderit repellat nesciunt
                  consequuntur? Voluptatem!
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div className="flex-none w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Passo 3</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  aliquam totam, voluptate eos mollitia, tenetur accusamus
                  molestias nam ipsa nemo reprehenderit repellat nesciunt
                  consequuntur? Voluptatem!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 row-span-3">
          <Image
            src="https://res.cloudinary.com/jpkiyoshi/image/upload/v1645741248/infinite7/how-it-works-3_xih5ir.png"
            layout="fill"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
