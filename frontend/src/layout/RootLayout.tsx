import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <div className = "h-screen flex flex-col p-5 justify-between items-center">
          <div className="flex-grow">
            <Outlet/>
          </div>
        <footer className = "p-2">
            <div className = "flex">
              <p className = "mr-4">Made by Bokai, Michael, Max, Timmy</p> 
              <Link to = "/">Back to Home</Link>
            </div>
        </footer>      
      </div>
    )
  }