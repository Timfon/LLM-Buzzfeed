import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <div className = "p-5" >
        <Head/>
        <div className="flex justify-center items-center flex-col">
          <Outlet/>
          <footer>
            <Foot/>
          </footer>
        </div>


        
      </div>

    )
  }


function Head() {
  return (
    <div>
        <Link to = "/">LLM BUZZFEED!</Link>
    </div>
  )
}

function Foot() {
  return (
    <div>
      Made by Bokai, Michael, Max, Timmy
    </div>
  )
}