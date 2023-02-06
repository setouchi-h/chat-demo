import { useState } from "react"

export const MessageInput = () => (
  <div>
    <form className="chatform">
      <input type="text" name="message" placeholder="Message" />
      <button>投稿</button>
    </form>
  </div>
)
