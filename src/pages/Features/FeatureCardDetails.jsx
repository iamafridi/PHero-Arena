import Swal from "sweetalert2";

const FeatureCardDetails = ({ events }) => {

    const handlePurchse = ()=>{
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

    const { title, offers, description, full_details, price, posted_date, image } = events;
    return (
        <div >
            <div className="justify-center items-center " >
                <a
                    href="#"
                    className="relative space-y-10 block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className='justify-between space-y-10'>
                        <div className=" sm:flex  sm:gap-4">

                            <div>
                                <h3 className=" mb-5 text-3xl font-bold text-gray-900 sm:text-xl">
                                    {title}
                                </h3>

                                <p className="mt-1 mb-5 text-lg font-medium text-gray-600">{offers}</p>
                                {/* image div  */}
                                <div className="hidden sm:block sm:shrink-0">
                                    <img
                                        alt="PHero-Arena"
                                        src={image}
                                        className=" h-96 w-110 mx-auto rounded-lg  shadow-sm "

                                    />
                                </div>
                            </div>
                        </div>
                        {/* details div  */}
                        <div className="mt-4">
                            <p className="max-w-[130ch] text-sm text-gray-500">
                                {description}
                                <br />
                                {full_details}
                            </p>
                        </div>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-xl font-medium text-gray-600">Published</dt>
                            <dd className="text-xl font-bold text-gray-500">{posted_date}</dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-xl font-medium text-black">Only at :</dt>
                            <dd className="text-xl font-bold text-black">{price}$</dd>
                        </div>
                        <button onClick={handlePurchse} className="btn btn-success">Purchase</button>
                
                    </dl>
                </a>
            </div>

        </div>
    );
};

export default FeatureCardDetails;