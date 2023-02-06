import Image from "next/image"
import { useSelector } from "react-redux"

export const ChatLog = () => {
  const postList = useSelector((state) => state.posts.value)

  return (
    <div>
      {postList.map((post) => (
        <div key={post.id}>
          <div className="postInfo">
            <div className="userInfo">
              <Image width={30} height={30} src={"/images/キャラ2-森のあの人.jpg"} alt="アイコン" />
              <p className="postName">{post.name}</p>
            </div>
            <p className="postDate">{post.date}</p>
          </div>
          <div className="post">
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
