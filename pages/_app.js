import "../styles/globals.css"
import "../styles/chat.sass"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import postsReducer from "../src/features/Posts"

const store = configureStore({
  reducer: {
    posts: postsReducer
  },
})

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
