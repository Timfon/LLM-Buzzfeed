import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <div className = "p-5">
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
      Made in react and tailwind!
    </div>
  )
}