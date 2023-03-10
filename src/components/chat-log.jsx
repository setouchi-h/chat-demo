import Image from "next/image"
import { useContext } from "react"
import { RxFace } from "react-icons/rx"
import { PostList } from "pages"

export const ChatLog = () => {
  const postList = useContext(PostList)

  return (
    <div>
      {postList.map((post) => (
        <div key={post.id} className="postCard">
          <div className="icon">
            <Image width={30} height={30} src={"/images/キャラ2-森のあの人.jpg"} alt="アイコン" />
          </div>
          <div className="post">
            <div className="postInfo">
              <div className="userInfo">
                <p className="postName">{post.name}</p>
              </div>
              <p className="postDate">{post.date}</p>
            </div>
            <div className="postContent">
              <p>{post.content}</p>
              <RxFace />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
