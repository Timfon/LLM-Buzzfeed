import { Link } from "react-router-dom"

export default function Result(){
    return(
        <button className = "duration-300 bg-blue-600 text-white px-6 py-3 font-bold rounded-md hover:scale-110 transition ease-in-out text-3xl">
            <Link to = "/quiz" >Retry?</Link>
        </button>
    
    )
}