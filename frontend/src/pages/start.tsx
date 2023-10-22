import { Link } from "react-router-dom"

export default function Start(){
    return(

        <div className = "justify-center flex-col flex items-center mt-52">
        <h1 className = "text-8xl font-bold mb-5">AI-strology</h1>
        <button className = "duration-300 bg-white text-purple-500 to-pink-500 px-6 py-3 font-bold rounded-md hover:scale-110 transition ease-in-out text-3xl">
            <Link to = "/quiz" >Start Quiz!</Link>
        </button>
        </div>
        
    )
}