import { Link } from "react-router-dom"

export default function Start(){
    return(
        <div>
        <h1 className = "text-8xl">AI-strology</h1>


        <button className = "duration-300 bg-blue-600 text-white px-6 py-3 font-bold rounded-md hover:scale-110 transition ease-in-out text-3xl">
            <Link to = "/quiz" >Start Quiz!</Link>
        </button>
        </div>
    )
}