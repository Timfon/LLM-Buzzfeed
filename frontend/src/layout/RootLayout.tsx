import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <div className = "p-2">
        <Head/>
        <p>Home</p>
        <Outlet/>
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