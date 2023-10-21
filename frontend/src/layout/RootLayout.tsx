import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <div className="flex justify-center items-center flex-col">
        <Head/>
        <div className = "p-5 m-auto">
          <Outlet/>
        </div>

        <footer>
        <Foot/>
      </footer>
        
      </div>

    )
  }


function Head() {
  return (
    <div>
        LLM BUZZFEED!
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