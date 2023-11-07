import { Link } from "react-router-dom";

const Shop = () => {
    const handlePurchse = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Purchase it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Congratulations!",
                    text: "Your have Purchased Successfully.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your have canceled the order:)",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div>
            <div>
                <section>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                        <header>
                           <div className=" flex justify-between">
                           <div>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    Product Collection
                                </h2>
                                <p className="max-w-md mt-4 text-gray-500">
                                    Are you a dedicated gamer looking for the latest and greatest in gaming gear, accessories, and collectibles? Or perhaps you're a casual player in search of a perfect gift for the gamer in your life? Look no further than PHero-Arena, the ultimate haven for all things gaming!
                                </p>
                            </div>
                            <div>
<Link to="/login">  <button className="btn btn-warning">Login</button></Link>
                               </div>
                           </div>

                        </header>

                        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/PWrDf1h/feature1.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/1QmLgtY/feature5.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/TTphKV9/feature4.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/7tJ4bc6/feature3.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>
                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/mHpmd4F/feature6.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>
                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/LdgxXLy/feature2.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>
                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/PWrDf1h/feature1.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://i.ibb.co/1QmLgtY/feature5.jpg"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3
                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            Phero-Arena Esports Academy
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                                <button onClick={handlePurchse} className="btn btn-success">Purchase</button>

                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Shop;