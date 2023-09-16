import Button from "../../global-components/button";
import SectionTitle from "../../global-components/section-title";

export default async function OfferSection() {
  return (
    <section className="bg-primaryGray mt-32 pb-32">
      {/* <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div> */}
      {/* <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div> */}
      <div>
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col justify-center items-center">
            <SectionTitle>Nasza oferta</SectionTitle>
            {/* <h4 className="mb-4 max-w-xl text-center">
              Zobacz, co możemy dla ciebie zrobić z zakreswu odnawialnych źródeł
              energii
            </h4> */}
          </div>
          {/* <div className="mb-16 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Our Blog
              </h2>
            </div>
            <div className="hidden lg:block text-right w-1/2">
              <a
                className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Articles
              </a>
            </div>
          </div> */}
          <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2 rounded-l">
              <img
                className="object-cover"
                src="/glp_slider20_rev.jpg"
                alt=""
              />
            </div>
            <div
              className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
              style={{
                clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
              }}
            >
              {/* <span className="text-sm text-gray-400">24 Jan, 2021</span> */}
              <h3 className="my-4 text-white">Fotowoltaika</h3>
              <div className="w-10 h-1 rounded-sm bg-white mb-4" />
              <p className="mb-4 text-lg text-white">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              {/* <a
                className="text-primaryGreen hover:text-secondaryGreen text-lg mb-4 mt-auto"
                href="#"
              >
                Sprawdź ofertę
              </a> */}
              <Button className="mb-2 mt-auto ml-auto">Sprawdź ofertę</Button>
              {/* <img
                src="asset3.svg"
                className="absolute h-1/4 bottom-0 right-0"
              /> */}
              {/* <img
                src="asset2.svg"
                className="absolute h-1/5 bottom-0 left-0"
              /> */}
            </div>
          </div>

          <div className="mt-20 flex flex-wrap flex-row-reverse rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2 rounded-l">
              <img
                className="object-cover"
                src="/glp_slider20_rev.jpg"
                alt=""
              />
            </div>
            <div
              className="relative flex flex-col items-end w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-gray-50 shadow-md"
              style={{
                clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%)",
              }}
            >
              {/* <span className="text-sm text-gray-400">24 Jan, 2021</span> */}
              <h3 className="my-4 text-secondaryGreen">
                Magazynowanie energii
              </h3>
              <div className="w-10 h-1 rounded-sm bg-primaryGreen mb-4" />
              <p className="mb-4 text-lg text-right">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              {/* <a
                className="text-green-600 hover:text-green-700 font-bold"
                href="#"
              >
                Sprawdź ofertę
              </a> */}
              <Button className="mb-2 mt-auto">Sprawdź ofertę</Button>
              {/* <img
                src="asset3.svg"
                className="absolute h-1/4 bottom-0 right-0"
              /> */}
              {/* <img
                src="asset2.svg"
                className="absolute h-1/4 bottom-0 left-0"
              /> */}
              {/* <img
                src="asset1.svg"
                className="absolute scale(-1) w-1/6 top-0 left-0"
              /> */}
            </div>
          </div>

          <div className="mt-20 flex flex-wrap rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2 rounded-l">
              <img className="object-cover" src="/glp_slider30.jpg" alt="" />
            </div>
            <div
              className="relative flex flex-col items-start w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-secondaryGreen shadow-md"
              style={{
                clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0 100%, 0 0)",
              }}
            >
              {/* <span className="text-sm text-gray-400">24 Jan, 2021</span> */}
              <h3 className="my-4 text-white">Usługi serwisowe</h3>
              <div className="w-10 h-1 rounded-sm bg-white mb-4" />
              <p className="mb-4 text-lg text-white">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              {/* <a
                className="text-primaryGreen hover:text-secondaryGreen text-lg mb-4 mt-auto"
                href="#"
              >
                Sprawdź ofertę
              </a> */}
              <Button className="mb-2 mt-auto ml-auto">Sprawdź ofertę</Button>
              {/* <img
                src="asset3.svg"
                className="absolute h-1/4 bottom-0 right-0"
              /> */}
              {/* <img
                src="asset2.svg"
                className="absolute h-1/5 bottom-0 left-0"
              /> */}
            </div>
          </div>

          {/* <div className="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
            <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
              <span className="text-sm text-gray-400">24 Jan, 2021</span>
              <h2 className="my-4 text-2xl font-bold">
                Morbi scelerisque nulla et lectus dignissim eleifend nulla eu
                nulla a metus
              </h2>
              <p className="mb-4 text-gray-400 leading-loose">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              <a
                className="text-green-600 hover:text-green-700 font-bold"
                href="#"
              >
                Learn More
              </a>
            </div>
            <div className="w-full lg:w-1/2 rounded-l order-0 lg:order-1">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
            <div className="w-full lg:w-1/2 rounded-l">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white">
              <span className="text-sm text-gray-400">24 Jan, 2021</span>
              <h2 className="my-4 text-2xl font-bold">
                Morbi scelerisque nulla et lectus dignissim eleifend nulla eu
                nulla a metus
              </h2>
              <p className="mb-4 text-gray-400 leading-loose">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              <a
                className="text-green-600 hover:text-green-700 font-bold"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
            <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
              <span className="text-sm text-gray-400">24 Jan, 2021</span>
              <h2 className="my-4 text-2xl font-bold">
                Morbi scelerisque nulla et lectus dignissim eleifend nulla eu
                nulla a metus
              </h2>
              <p className="mb-4 text-gray-400 leading-loose">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              <a
                className="text-green-600 hover:text-green-700 font-bold"
                href="#"
              >
                Learn More
              </a>
            </div>
            <div className="w-full lg:w-1/2 rounded-l order-0 lg:order-1">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="mb-16 flex flex-wrap rounded-lg shadow overflow-hidden">
            <div className="w-full lg:w-1/2 rounded-l bg-white">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white">
              <span className="text-sm text-gray-400">24 Jan, 2021</span>
              <h2 className="my-4 text-2xl font-bold">
                Morbi scelerisque nulla et lectus dignissim eleifend nulla eu
                nulla a metus
              </h2>
              <p className="mb-4 text-gray-400 leading-loose">
                Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
                dictum. Integer sit amet erat sit amet lectus lacinia mattis.
                Donec est tortor, fermentum at urna a, accumsan suscipit sem.
              </p>
              <a
                className="text-green-600 hover:text-green-700 font-bold"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <nav
              className="flex items-center bg-white shadow rounded"
              aria-label="Pagination"
            >
              <a className="px-4 text-gray-400 hover:text-gray-500" href="#">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </a>
              <div className="p-2 border-r border-l text-gray-500">
                <a
                  className="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800"
                  href="#"
                >
                  1
                </a>
                <a
                  className="mx-1 px-2 rounded bg-gray-50 text-gray-800 font-bold"
                  href="#"
                >
                  2
                </a>
                <a
                  className="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800"
                  href="#"
                >
                  3
                </a>
                <a
                  className="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800"
                  href="#"
                >
                  4
                </a>
                <span className="mx-3">...</span>
                <a
                  className="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800"
                  href="#"
                >
                  16
                </a>
                <a
                  className="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800"
                  href="#"
                >
                  17
                </a>
                <a
                  className="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800"
                  href="#"
                >
                  18
                </a>
              </div>
              <a className="px-4 text-gray-400 hover:text-gray-500" href="#">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg> */}
        </div>
      </div>
    </section>
  );
}
