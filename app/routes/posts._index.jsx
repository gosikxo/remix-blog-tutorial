import { Link, useLoaderData } from "@remix-run/react"
import { db } from "../utils/db.server"

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
      select: { id: true, title: true, createdAt: true },
    }),
  }
  console.log({ data })
  return data
}

function PostItems() {
  const { posts } = useLoaderData()

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostItems
