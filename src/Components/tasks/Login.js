import React from "react";
import "./login.css";
import Man1 from '../../man1.png';
import  { Toaster } from 'react-hot-toast';
function Login({auth,setauth,login}) {

    return (
        <div className="flex flex-row w-[100vw] h-[100vh]  p-[5%] bg-[#d3d0df] lg:flex-col-reverse ">
            <div className="data w-[50%] h-[100%] bg-white rounded-tl-lg rounded-bl-lg py-16 px-36 lg:w-[100%] lg:h-[70%] md:px-2 md:py-2 md:rounded-tl-none md:rounded-br-lg ">
                <h1 className="text-center text-4xl font-bold">WELCOME</h1>
                <p className="text-center text-md font-[500] text-gray-400">
                    Welcome back! Please Enter Your Credential
                </p>
                <div className="container flex flex-col">
                    <label htmlFor="email" className="font-[500]">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control h-12 border-gray-400 border-2 rounded-lg px-3 mb-4 mt-2  text-lg focus-visible:border-blue-500"
                        placeholder="admin@gmail.com"
                        value={auth.name}
                        onChange={(e)=>{setauth(prevState => ({
                            ...prevState,
                            "name": e.target.value
                        }))}}
                    />
                    <label htmlFor="password " className="font-[500]">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control h-12 border-gray-400 border-2 rounded-lg px-3 mb-4 mt-2  text-lg focus-visible:border-blue-500 "
                        id="password"
                        placeholder="admin"
                        value={auth.pass}
                        onChange={(e)=>{setauth(prevState => ({
                            ...prevState,
                            "pass": e.target.value
                        }))}}
                        
                    />
                    <p className="text-right text-purple-800 font-bold mb-8">
                        Forgot Password
                    </p>
                    <button className="bg-purple-500 h-12 text-white bold-[500] text-lg transition-all ease-in-out duration-500 rounded-lg hover:bg-purple-700 " onClick={()=>{login()}}>
                        SIGN IN
                    </button>
                </div>
            </div>
            <div className="circle flex-col bg-[#f3f5f9]  w-[50%] h-[100%] flex justify-center items-center overflow-hidden relative rounded-tr-lg rounded-br-lg  lg:w-[100%] lg:h-[30%] md:rounded-tl-lg md:rounded-br-none bgd">
                <img style={{transform: "scale(0.8)"}}src ={Man1} alt=""/>
                
                
                {/* <div className="h-[12rem] w-[12rem]  bg-[#613eb7] rounded-full md:h-[5rem] md:w-[5rem] "></div>
                <div className=" absolute w-[100%] h-[50%] bottom-0 backdrop-blur-md bg-white/30"></div> */}
            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>

        </div>
    );
}

export default Login;
