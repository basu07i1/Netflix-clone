import { useState, useRef } from "react";
import Header from "./Header.jsx";
import { checkValidData } from "../utils/Validate.jsx";

const Login = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the form Data.
        //checkValidData(email , password);
        
        //console.log(email.current.value);
        //console.log(password.current.value);
        console.log(email);

    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />

            <form onSubmit={(e) => e.preventDefault() }
            className="w-6/12 absolute p-12 bg-yellow my-36 mx-auto right-0 left-0 text-black bg-gray-500 rounded-3xl">
            <h1 className="font-bold font-80xl text-white py-2 px-4">
                {isSignInForm ? "Sign In" : "Sign Up" }
            </h1>

                {!isSignInForm && (

                < input 
                type="text" 
                placeholder="Full Name" 
                className="py-2 px-8 m-2 cursor-pointer w-full bg-gray-700 text-white rounded-2xl "
                />
                )}
                
                <input
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="py-2 px-8  m-2 cursor-pointer w-full bg-gray-700 text-white rounded-2xl" 
                />

                

                < input 
                ref={password}
                type="password" 
                placeholder="Password" 
                className="py-2 px-8 m-2 cursor-pointer w-full bg-gray-700 text-white rounded-2xl "
                />

                <button className="p-2 m-2 cursor-pointer bg-red-700 px-10 py-auto w-full rounded-2xl text-white font-medium " onClick= {handleButtonClick}  >
                    {isSignInForm ? "Sign In" : "Sign Up" }
                    
                </button>

                <p className="px-4 py-2 cursor-pointer text-white " onClick={toggleSignInForm} >{
                isSignInForm ? "New to Netflix? Sign Up Now" 
                : "Already registered? Sign In Now" }
                </p>

            </form>
        </div>
        
    )
}

export default Login;
