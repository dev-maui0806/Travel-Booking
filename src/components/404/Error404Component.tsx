import React from "react";
import Image from 'next/image';



const Error404Component : React.FC = () => {
    return(
        <div className="mx-auto w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
            backgroundImage:"url('/images/404/404_1.png')",
            height:"100vh",
        }}>
            <div className="w-full h-full flex flex-col justify-start items-center gap-8 pt-[100px]">
                <h1 className="text-white text-8xl">404</h1>
                <p className="text-white text-2xl">Sorry, page not found!</p>
                <button className="bg-transparent text-white border border-white px-10 py-2 rounded-full">return</button>
            </div>
        </div>
    )
}
export default Error404Component;