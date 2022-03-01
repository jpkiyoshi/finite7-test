import { Property } from '../data/data';
import Image from 'next/image';

const PropertyCard = ({
  id,
  img,
  price,
  address,
  area,
  rooms,
  vacancy
}: Property) => {
  return (
    <section className="relative mx-auto rounded-md cursor-pointer w-80 h-52 hover:opacity-90">
      <Image src={img} layout="fill" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className="absolute w-8 h-8 top-3 right-3 fill-white"
      >
        <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
      </svg>

      <div className="absolute flex flex-col gap-1 px-6 py-5 text-black transition shadow-lg bg-finite-desert-sand w-68 left-6 top-36 hover:scale-105">
        <p className="text-xs">A partir de</p>
        <h1 className="font-bold">{price}</h1>
        <p className="text-xs">{address}</p>
        <div className="mt-3">
          <span className="text-xs">{area} - </span>
          <span className="text-xs">{rooms} quartos - </span>
          <span className="text-xs">
            {vacancy} vaga{Number(vacancy) > 1 && 's'}
          </span>
        </div>
      </div>
    </section>
  );
};
export default PropertyCard;
