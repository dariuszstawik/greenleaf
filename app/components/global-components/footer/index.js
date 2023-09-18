import Logo from "../logo";

export default function Footer() {
  return (
    <section className="relative bg-primaryGray mt-32">
      <img
        src="asset1.svg"
        className="absolute w-1/12 top-0 left-0"
        alt="asset"
      />
      <img
        src="asset2.svg"
        className="absolute w-1/12 bottom-0 left-0"
        alt="asset"
      />
      <img
        src="asset3.svg"
        className="absolute w-1/12 bottom-0 right-0 translate-x-2"
        alt="asset"
      />
      {/* <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div> */}
      {/* <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div> */}
      <div className="pb-20 pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-6 lg:mb-20">
            <div className="mb-auto w-full lg:w-1/5">
              {/* <a className="text-3xl font-bold leading-none" href="#">
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a> */}
              <Logo className="mt-4 w-36" />
            </div>
            <div className="mb-5 w-full lg:w-1/5">
              <h4 className="mb-2">Green Leaf Power</h4>
              <p className="leading-loose">
                Fotowoltaika, magazynowanie energii, serwisy instalacji.
              </p>
              <p className="leading-loose">
                Śląskie, Opolskie, Dolnośląskie, Małopolskie.
              </p>
            </div>
            <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
                <h5 className="mb-4 font-bold">Biuro</h5>
                <p className=" leading-loose">ul. 11 Listoada 11</p>
                <p className=" leading-loose">40-387 Katowice</p>
              </div>
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
                <h5 className="mb-4 font-bold">Kontakt</h5>
                <p className="leading-loose">biuro@greenleaf.pl</p>
                <p className="leading-loose">tel. 600 000 000</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-sm mx-auto">© 2021. All rights reserved.</p>
            {/* <div className="flex space-x-2 lg:space-x-4">
              <a href="#">
                <img src="atis-assets/social/facebook.svg" alt="" />
              </a>
              <a href="#">
                <img src="atis-assets/social/twitter.svg" alt="" />
              </a>
              <a href="#">
                <img src="atis-assets/social/instagram.svg" alt="" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div> */}
    </section>
  );
}
