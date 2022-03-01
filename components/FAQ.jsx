import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const FAQ = () => {
  return (
    <section className="w-full p-16 px-4" id="FAQ">
      <h2 className="text-4xl font-bold text-center mb-11">
        Perguntas Frequentes
      </h2>
      <div className="w-full max-w-4xl p-2 mx-auto">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left text-black rounded-lg bg-finite-desert-sand focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>Espaço para pergunta 1?</span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl md:text-2xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  sequi excepturi libero praesentium nesciunt mollitia!
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left text-black rounded-lg bg-finite-desert-sand focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>Espaço para pergunta 2?</span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl md:text-2xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  sequi excepturi libero praesentium nesciunt mollitia!
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left text-black rounded-lg bg-finite-desert-sand focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>Espaço para pergunta 3?</span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl md:text-2xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  sequi excepturi libero praesentium nesciunt mollitia!
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left text-black rounded-lg bg-finite-desert-sand focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <span>Espaço para pergunta 4?</span>
                <ChevronUpIcon
                  className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-95 opacity-50"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl md:text-2xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  sequi excepturi libero praesentium nesciunt mollitia!
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
};

export default FAQ;
