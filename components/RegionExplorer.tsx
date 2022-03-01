import Image from 'next/image';
import { data } from '../data/data';

const RegionExplorer = () => {
  return (
    <section>
      <h1 className="mt-20 text-4xl font-bold text-center">Explorar regiões</h1>
      <div className="grid grid-cols-9 grid-rows-3 gap-4 mx-10 mt-10 h-96 ">
        <div className="relative flex flex-col-reverse items-start col-span-3 row-span-3 transition cursor-pointer rounded-2xl hover:scale-105">
          <Image
            src={data[0].img}
            layout="fill"
            className="-z-10 rounded-2xl"
          />
          <div className="w-full text-white rounded-2xl p-7 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">Capital</h3>
            <p className="text-sm font-bold">33 imóveis</p>
          </div>
        </div>
        <div className="relative flex flex-col-reverse items-start col-span-2 transition cursor-pointer rounded-2xl hover:scale-105">
          <Image
            src={data[1].img}
            layout="fill"
            className="-z-10 rounded-2xl"
          />
          <div className="w-full text-white rounded-2xl p-7 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">Campinas</h3>
            <p className="text-sm font-bold">8 imóveis</p>
          </div>
        </div>
        <div className="relative flex flex-col-reverse items-start col-span-2 row-span-3 transition cursor-pointer rounded-2xl hover:scale-105">
          <Image
            src={data[2].img}
            layout="fill"
            className="-z-10 rounded-2xl"
          />
          <div className="w-full text-white rounded-2xl p-7 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">Litoral Sul</h3>
            <p className="text-sm font-bold">30 imóveis</p>
          </div>
        </div>
        <div className="relative flex flex-col-reverse items-start col-span-2 row-span-2 transition cursor-pointer rounded-2xl hover:scale-105">
          <Image
            src={data[3].img}
            layout="fill"
            className="-z-10 rounded-2xl"
          />
          <div className="w-full text-white rounded-2xl p-7 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">Bauru</h3>
            <p className="text-sm font-bold">15 imóveis</p>
          </div>
        </div>
        <div className="relative flex flex-col-reverse items-start col-span-2 row-span-2 transition cursor-pointer rounded-2xl hover:scale-105">
          <Image
            src={data[4].img}
            layout="fill"
            className="-z-10 rounded-2xl"
          />
          <div className="w-full text-white rounded-2xl p-7 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">Litoral Norte</h3>
            <p className="text-sm font-bold">15 imóveis</p>
          </div>
        </div>
        <div className="relative flex flex-col-reverse items-start col-span-2 transition cursor-pointer rounded-2xl hover:scale-105">
          <Image
            src={data[5].img}
            layout="fill"
            className="-z-10 rounded-2xl"
          />
          <div className="w-full text-white p-7 rounded-2xl bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl font-bold">Sorocaba</h3>
            <p className="text-sm font-bold">15 imóveis</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegionExplorer;
