import { addPost } from "@/features/Posts"
import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { PostList } from "pages"

export const MessageInput = () => {
  const postList = useContext(PostList)
  const [content, setContent] = useState("")

  const dispatch = useDispatch()

  const handleClick = () => {
    var day = new Date()
    dispatch(
      addPost({
        id: <postList className="length"></postList>,
        name: "LoginUser",
        date: `${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`,
        content: content,
      })
    )
    setContent("")
  }

  return (
    <div>
      <form className="chatform">
        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>投稿</button>
      </form>
    </div>
  )
}
