import { Outlet } from "@remix-run/react"

function Posts() {
  return (
    <div>
      <h1>This is the posts route</h1>
      <Outlet />
    </div>
  )
}

export default Posts
