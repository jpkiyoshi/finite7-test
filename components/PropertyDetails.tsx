import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { data } from '../data/data';
import PropertyCard from './PropertyCard';

const PropertyDetails = () => {
  const router = useRouter();
  if (!router.query.id) return null;
  const { id } = router.query;
  const property = data[Number(id)];

  return (
    <section className="container py-8 mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="mb-3 text-2xl font-bold">{property.address}</h1>
          <p>3 opções de projetos • a partir de {property.price}</p>
        </div>
        <div className="flex items-center h-10 gap-8">
          <button className="flex gap-2">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 227.216 227.216"
              xmlSpace="preserve"
              className="w-5 h-5"
            >
              <path
                d="M175.897,141.476c-13.249,0-25.11,6.044-32.98,15.518l-51.194-29.066c1.592-4.48,2.467-9.297,2.467-14.317
	c0-5.019-0.875-9.836-2.467-14.316l51.19-29.073c7.869,9.477,19.732,15.523,32.982,15.523c23.634,0,42.862-19.235,42.862-42.879
	C218.759,19.229,199.531,0,175.897,0C152.26,0,133.03,19.229,133.03,42.865c0,5.02,0.874,9.838,2.467,14.319L84.304,86.258
	c-7.869-9.472-19.729-15.514-32.975-15.514c-23.64,0-42.873,19.229-42.873,42.866c0,23.636,19.233,42.865,42.873,42.865
	c13.246,0,25.105-6.042,32.974-15.513l51.194,29.067c-1.593,4.481-2.468,9.3-2.468,14.321c0,23.636,19.23,42.865,42.867,42.865
	c23.634,0,42.862-19.23,42.862-42.865C218.759,160.71,199.531,141.476,175.897,141.476z M175.897,15
	c15.363,0,27.862,12.5,27.862,27.865c0,15.373-12.499,27.879-27.862,27.879c-15.366,0-27.867-12.506-27.867-27.879
	C148.03,27.5,160.531,15,175.897,15z M51.33,141.476c-15.369,0-27.873-12.501-27.873-27.865c0-15.366,12.504-27.866,27.873-27.866
	c15.363,0,27.861,12.5,27.861,27.866C79.191,128.975,66.692,141.476,51.33,141.476z M175.897,212.216
	c-15.366,0-27.867-12.501-27.867-27.865c0-15.37,12.501-27.875,27.867-27.875c15.363,0,27.862,12.505,27.862,27.875
	C203.759,199.715,191.26,212.216,175.897,212.216z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            Compartilhar
          </button>
          <button className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="self-end w-8 h-8 fill-black"
            >
              <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
            </svg>
            <span className="mt-1">Salvar</span>
          </button>
        </div>
      </div>
      <div className="z-20 flex gap-10 my-10">
        <option
          value="Projeto 1"
          className="px-3 py-1 text-white bg-black rounded-full cursor-pointer"
        >
          Projeto 1
        </option>
        <option
          className="px-3 py-1 text-black bg-transparent rounded-full cursor-pointer"
          value="Projeto 2"
        >
          Projeto 2
        </option>
        <option
          className="px-3 py-1 text-black bg-transparent rounded-full cursor-pointer"
          value="Projeto 3"
        >
          Projeto 3
        </option>
      </div>
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-1 h-96">
        <div className="relative flex flex-col justify-between col-span-2 row-span-2 p-5">
          <Image src={property.img} layout="fill" className="-z-10"></Image>

          <p>Projeto 1</p>
          <div className="flex gap-6">
            <button className="z-10 px-6 py-2 text-white bg-black rounded-lg cursor-pointer">
              Projeto 3D
            </button>
            <button className="z-10 px-6 py-2 text-white bg-black rounded-lg cursor-pointer">
              Tour 360
            </button>
            <button className="z-10 px-6 py-2 text-white bg-black rounded-lg cursor-pointer">
              Vídeo
            </button>
          </div>
        </div>
        <div className="relative">
          <Image src={property.img} layout="fill"></Image>
        </div>
        <div className="relative">
          <Image src={property.img} layout="fill"></Image>
        </div>
        <div className="relative">
          <Image src={property.img} layout="fill"></Image>
        </div>
        <div className="relative">
          <Image src={property.img} layout="fill"></Image>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col w-1/2 gap-8">
          <h2 className="text-2xl font-bold">Informações deste projeto</h2>
          <div>
            <h3 className="font-bold">Conceito</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
              voluptatem ratione quidem velit ut laudantium vero architecto
              magni nulla.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Acabamentos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
              voluptatem ratione quidem velit ut laudantium vero architecto
              magni nulla.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Customizações</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
              voluptatem.
            </p>
          </div>
          <button className="flex gap-6 px-5 py-3 border border-black rounded-xl w-80">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 460 460"
              xmlSpace="preserve"
              className="w-5 h-5"
            >
              <g id="XMLID_241_">
                <g>
                  <path
                    d="M369.635,0H90.365C73.595,0,60,13.595,60,30.365v399.27C60,446.405,73.595,460,90.365,460h279.27
			c16.77,0,30.365-13.595,30.365-30.365V30.365C400,13.595,386.405,0,369.635,0z M108.204,343.61v-43.196
			c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196
			C111.001,349.858,108.204,347.06,108.204,343.61z M108.204,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
			c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C111.001,262.858,108.204,260.06,108.204,256.61
			z M308.891,421H151.109c-11.046,0-20-8.954-20-20c0-11.046,8.954-20,20-20h157.782c11.046,0,20,8.954,20,20
			C328.891,412.046,319.937,421,308.891,421z M208.402,294.165h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196
			c0,3.451-2.797,6.248-6.248,6.248h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196
			C202.154,296.963,204.951,294.165,208.402,294.165z M202.154,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
			c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C204.951,262.858,202.154,260.06,202.154,256.61
			z M345.548,349.858h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196
			c3.451,0,6.248,2.797,6.248,6.248v43.196h0C351.796,347.061,348.999,349.858,345.548,349.858z M345.548,262.858h-43.196
			c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196h0
			C351.796,260.061,348.999,262.858,345.548,262.858z M354,149.637c0,11.799-9.565,21.363-21.363,21.363H127.364
			C115.565,171,106,161.435,106,149.637V62.363C106,50.565,115.565,41,127.364,41h205.273C344.435,41,354,50.565,354,62.363V149.637
			z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            Calculadora de customização
          </button>
          <span className="w-full mt-6 bg-black border"></span>
          <div className="flex flex-col gap-9">
            <h2 className="text-2xl font-bold">Informações do Imóvel</h2>
            <div className="grid grid-cols-2 gap-y-16">
              <div className="flex items-center gap-5">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div>
                  <p>Apartamento</p>
                  <p>7º andar</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div>
                  <p>{property.area}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div>
                  <p>{property.rooms} quartos</p>
                  <p>1 suíte</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div>
                  <p>
                    {property.vacancy} vaga{property.vacancy > 1 && 's'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div>
                  <p>2 banheiros</p>
                  <p>1 lavabo</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <div>
                  <p>Metrô próximo</p>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full mt-6 bg-black border"></span>
          <h2 className="text-2xl font-bold">Mais detalhes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            quaerat dolorem, sint laborum culpa officia soluta ipsa optio
            pariatur excepturi quo sit maiores doloremque reprehenderit alias
            doloribus? Cum, dicta aliquid!
          </p>
        </div>
        <div className="flex flex-col justify-center w-1/3 gap-6 p-5 border-2 border-black h-fit rounded-xl">
          <h2 className="font-bold">Projeto 1</h2>
          <p className="text-2xl font-bold">
            {property.price}
            <span className="text-sm font-normal"> à vista</span>
          </p>
          <button className="w-full py-4 text-white rounded-lg bg-finite-ebony hover:opacity-80">
            Agendar visita
          </button>
          <button className="w-full py-4 border-2 rounded-lg">
            Conversar com a FLIP
          </button>
          <div className="flex justify-between">
            <p>Condomínio</p>
            <span>R$750,00</span>
          </div>
          <div className="flex justify-between">
            <p>IPTU</p>
            <span>R$450,00</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-14">Imóveis Similares</h2>
      <div className="grid w-5/6 grid-cols-3 mx-auto mb-20 gap-y-28 mt-11">
        {data.slice(0, 3).map(property => (
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
export default PropertyDetails;
