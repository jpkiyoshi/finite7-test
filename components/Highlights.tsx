import { data } from '../data/data';
import Link from 'next/link';
import PropertyCard from './PropertyCard';

const Highlights = () => {
  return (
    <section className="flex flex-col items-center gap-6 mb-20 -mt-28">
      <h1 className="z-10 text-4xl font-bold">Destaques</h1>
      <div className="z-20 flex gap-10 mt-4">
        <option
          value="Todos"
          className="px-3 py-1 text-white bg-black rounded-full cursor-pointer"
        >
          Todos
        </option>
        <option
          className="px-3 py-1 text-black bg-transparent rounded-full cursor-pointer"
          value="Imóveis com selo FLIP"
        >
          Imóveis com selo FLIP
        </option>
        <option
          className="px-3 py-1 text-black bg-transparent rounded-full cursor-pointer"
          value="Imóveis sem reforma"
        >
          Imóveis sem reforma
        </option>
      </div>
      <div className="grid w-5/6 grid-cols-2 mx-auto gap-y-28 mt-11 mb-36 lg:grid-cols-3">
        {data.map(property => (
          <Link key={property.id} href={`/${property.id}`}>
            <a>
              <PropertyCard
                id={property.id}
                address={property.address}
                area={property.area}
                img={property.img}
                price={property.price}
                rooms={property.rooms}
                vacancy={property.vacancy}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Highlights;
