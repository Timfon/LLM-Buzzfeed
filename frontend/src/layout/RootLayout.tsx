import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <div className = "p-2">
        <Head/>
        <Outlet/>
        <Foot/>
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