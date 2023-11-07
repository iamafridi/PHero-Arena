import { useLoaderData } from "react-router-dom";
import FeatureCardDetails from "./FeatureCardDetails";

const Features = () => {
    const events = useLoaderData();
    console.log(events);

    return (
        <div className="m-5">
            {/* feature banner  */}
            <div>
                <section>
                    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                            <div className=" bg-[url(https://i.ibb.co/PWrDf1h/feature1.jpg)] p-8  md:p-12 lg:px-16 lg:py-24">
                                <div className="mx-auto max-w-xl text-center ">
                                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                                        Welcome to PHero-Arena
                                    </h2>

                                    <p className="hidden text-white/90 sm:mt-4 sm:block">
                                        Our platform offers a seamless and personalized gaming experience. With a simple login, you can create your gaming profile, track your progress, and connect with like-minded gamers from around the globe. Join a vibrant gaming community where your achievements and interests matter.
                                    </p>

                                    <div className="mt-4 md:mt-8">
                                        <a
                                            href="#"
                                            className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                        >
                                            Get Started Today
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                                <img
                                    alt="PHero-Arena"
                                    src="https://i.ibb.co/1QmLgtY/feature5.jpg "
                                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                                />

                                <img
                                    alt="PHero-Arena"
                                    src="https://i.ibb.co/mHpmd4F/feature6.jpg"
                                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* feature pricing */}
                <div>
                    <h2 className="text-3xl text-center font-bold outline-dotted p-5 mt-5">Features </h2>
                    <div className="grid m-5 grid-cols-1 items-center lg:grid-cols-2 lg:gap-5">
                        {
                            events.map(event => <FeatureCardDetails
                                key={event.id}
                                events={event}
                            ></FeatureCardDetails>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;