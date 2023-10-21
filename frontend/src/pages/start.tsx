import { Link } from "react-router-dom"

export default function Start(){
    return(
        <button className = "duration-300 bg-blue-600 text-white p-2 rounded-md hover:scale-110 transition ease-in-out">
            <Link to = "/quiz" >Start Quiz!</Link>
        </button>
    )
}