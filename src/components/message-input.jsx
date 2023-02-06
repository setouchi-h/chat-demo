import { useState } from "react"

export const MessageInput = () => (
  <div>
    <form className="chatform">
      <input type="text" name="message" placeholder="投稿内容" />
      <input type="submit" />
    </form>
  </div>
)
