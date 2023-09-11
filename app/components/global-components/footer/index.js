export default function Footer() {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-6 lg:mb-20">
            <div className="mb-6 w-full lg:w-1/5">
              <a className="text-3xl font-bold leading-none" href="#">
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </div>
            <div className="mb-5 w-full lg:w-1/5">
              <p className="text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo.
              </p>
            </div>
            <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
                <h5 className="mb-4 font-bold">Office</h5>
                <p className="text-gray-400 leading-loose">
                  359 Hidden Valley Road, NY
                </p>
              </div>
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
                <h5 className="mb-4 font-bold">Contacts</h5>
                <p className="text-gray-400">hello@example.com</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-sm text-gray-400">
              © 2021. All rights reserved.
            </p>
            <div className="flex space-x-2 lg:space-x-4">
              <a href="#">
                <img src="atis-assets/social/facebook.svg" alt="" />
              </a>
              <a href="#">
                <img src="atis-assets/social/twitter.svg" alt="" />
              </a>
              <a href="#">
                <img src="atis-assets/social/instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
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
      </div>
    </section>
  );
}
