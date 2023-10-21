import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <div className = "h-screen flex flex-col p-5 justify-between items-center">
        <Head/>
          <div className="flex-grow">
            <Outlet/>
          </div>
        <footer className = "p-2">
            <div>
              Made by Bokai, Michael, Max, Timmy
            </div>
        </footer>


        
      </div>

    )
  }


function Head() {
  return (
    <div className = "mb-5 text-lg flex">
        <Link to = "/">LLM BUZZFEED!</Link>
    </div>
  )
}