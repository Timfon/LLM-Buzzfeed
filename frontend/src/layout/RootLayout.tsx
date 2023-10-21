import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <div>
        <p>Home</p>
        <Outlet/>
      </div>
    )
  }