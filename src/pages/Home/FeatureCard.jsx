import { Link } from "react-router-dom";

const FeatureCard = ({ events }) => {
    const { title, description, image, id } = events;
    return (
        <div>
            <Link to="/features">
                <button
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 text-start"
                    href="/services/digital-campaigns"
                >
                    <img className="w-full h-40 " src={image} alt="" />

                    <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

                    {
                        description.length > 150 ? <p>{description.slice(0, 150)}<span className="text-end"> <Link
                            to={`/event/${id}`}
                            className="text-red-500">Read More....</Link></span> </p>
                            :
                            <p>{description}</p>

                    }
                </button>
            </Link>

        </div>
    );
};

export default FeatureCard;