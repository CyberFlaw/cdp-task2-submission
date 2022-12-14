import Image from "next/image";

import google from "../../public/assets/google.png";

export default function Hero(props) {
  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <h1 className="mb-8 text-4xl text-black font-bold text-center">
                  Rumble!
                </h1>
                <h3 className="text-center">Our Secret Little Rendezvous</h3>
              </div>
              <div className="mt-16 grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  onClick={() => {
                    props.signIn();
                  }}
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <div className="flex justify-center items-center">
                      <Image
                        src={google}
                        alt="google"
                        height={32}
                        width={32}
                        className="mr-2"
                      />
                      <h3 className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Sign In To Continue
                      </h3>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
