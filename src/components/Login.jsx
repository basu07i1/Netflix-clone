import Header from "./Header.jsx";

const Login = () => {
    return (
        <div>
            <Header />

            <form className="w-3/12 absolute p-12 bg-yellow my-36 mx-auto right-0 left-0 text-black">
            <h1 className="font-bold font-xl py-4">Sign In</h1>
                <input
                 type="text" 
                placeholder="Email Address" 
                className="py-2 m-2 "  />
                < input 
                type="password" 
                placeholder="Password" 
                className="py-2 m-2 "/>
                <button className="p-2 m-4 bg-red-700 px-10 py-auto "  >Sign In</button>
            </form>
        </div>
        
    )
}

export default Login;
