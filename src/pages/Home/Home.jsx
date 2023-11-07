import { Link, useLoaderData } from "react-router-dom";
import FeatureCard from "./featureCard";


const Home = () => {
  const events = useLoaderData();
  // console.log(events);



  return (
    <div>

      <section
        className="m-2 relative bg-[url(https://i.ibb.co/7rSSZLB/1163831082.jpg)] bg-cover bg-center bg-no-repeat"
      >
        {/* <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div> */}

        <div
          className="relative items-center justify-center  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center  ltr:sm:text-center rtl:sm:text-center">
            <h1 className="text-3xl text-yellow-50 font-extrabold sm:text-5xl ">
              Find your

              <strong className="block mt-2  font-extrabold text-white hover:translate-y-3 ">
                Forever Battle Ground.
              </strong>
            </h1>

            <p className="mt-4 text-yellow-50 uppercase max-w-lg sm:text-xl/relaxed">
              Explore , Live , fight until the END
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link to="/login"> <button
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </button>
              </Link>

              <Link>
                <button
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <div className=" mt-10 space-y-10">
        <h2 className="text-4xl font-bold outline-dotted  p-4 text-center">Latest News</h2>
        <div className="grid grid-cols-2 gap-4 m-2">
          <div>
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2023-11-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Nov 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="update"
                  src="https://i.ibb.co/6wPyvpW/images-1.jpg"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      PHero-Arena DATA DROP: VCT 2023
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    And we’re back! PHero-Arena Data Drop is here to talk about all things VCT in 2023. As the year comes to an end and a new season of the Champions Tour approaches, we thought it would be a good time to take a look back at 2023 by the numbers.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2023-11-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Nov 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="update"
                  src="https://i.ibb.co/6wPyvpW/images-1.jpg"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      PHero-Arena DATA DROP: VCT 2023
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    And we’re back! PHero-Arena Data Drop is here to talk about all things VCT in 2023. As the year comes to an end and a new season of the Champions Tour approaches, we thought it would be a good time to take a look back at 2023 by the numbers.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2023-11-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Nov 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="update"
                  src="https://i.ibb.co/6wPyvpW/images-1.jpg"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      PHero-Arena DATA DROP: VCT 2023
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    And we’re back! PHero-Arena Data Drop is here to talk about all things VCT in 2023. As the year comes to an end and a new season of the Champions Tour approaches, we thought it would be a good time to take a look back at 2023 by the numbers.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2023-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2023</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="update"
                  src="https://i.ibb.co/Qvc4PKm/images.jpg"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      PHero-Arena PATCH NOTES 7.09
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    This patch, we’re looking to address some issues in the balance of power between Sentinels, especially Cypher, and some other Agents on the roster. Sentinels often craft very deliberate setups only to have Agents like Raze, Skye, and Fade destroy them with typical utility use. In this patch, we’re updating Cypher’s Trapwire (C) to try to sway these interactions more in his favor, and to encourage enemy Agents to have to be more intentional and deliberate if they aim to use their utility to counter Sentinel setups.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* feature section */}
      <section className="mt-16">
        <div>
         
          <section className="bg-gray-900 text-white">
            <div
              className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Upcoming Features and Events</h2>

                <p className="mt-4 text-gray-300">
                Are you ready to embark on an epic gaming journey? Look no further than PHero-Arena, your ultimate destination for all things gaming! Whether you are a seasoned pro, a casual gamer, or just looking to explore the world of video games, we have got you covered.
                </p>
                <p className="mt-5 uppercase"> -- To know more Please <Link to="/login"><span className="font-bold text-blue-600 ml-2 text-xl border rounded-se-full rounded-es-full p-4 hover:bg-green-50"> Login </span></Link> --</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {
            events.map(event => <FeatureCard
              key={event.id}
              events={event}
            ></FeatureCard>)
          }

              </div>

              <div className="mt-12 text-center">
               <Link to="/login">
               <button
                  href="#"
                  className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </button></Link>
              </div>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Home;