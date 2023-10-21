import { Outlet } from "react-router-dom";

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