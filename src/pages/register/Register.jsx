import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../routes/AuthProvider";
// import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo, email, password);

         // Reseting Error and success message
         setRegisterError('');
         setRegisterSuccess('');

        // Creating User with Auth context
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setRegisterSuccess('User Created Successfully');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })

        // // Password Longer than six characters
        // if (password.length < 6) {
        //     setRegisterError('Password should be at least 6 characters or longer')
        // return;
        // }



       

        // // Creating User 
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         setRegisterSuccess('User Created Successfully');
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         setRegisterError(error.message)
        //     })




    }



    return (
        <div>
            <section className="relative  flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 bg- py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                        <p className="mt-4 text-gray-500">
                            Log in and Explore the world of PHero-Arena </p>
                    </div>

                    <form onSubmit={handleRegister} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Your Name"
                                    name="name" required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="photo" className="sr-only">Photo URL</label>

                            <div className="relative">
                                <input
                                    type="photo"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Your Photo URL Here"
                                    name="photo" required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Your Email"
                                    name="email" required
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Your Password"
                                    name="password" required
                                />

                                <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Already have an account?
                                <Link to="/login"> <a className="underline ml-2 font-bold text-blue-600" href="">Login</a></Link>
                            </p>

                            <button
                                type="submit"
                                className="inline-block  rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-center mt-3 text-red-700">{registerError}</p>
                    }
                    {
                        registerSuccess && <p className="text-green-600">{registerSuccess}</p>
                    }
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://i.ibb.co/RTLLmTd/login-Page-image.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default Register;