import { useState } from "react"
import Blogs from "./components/Headers/Blogs/Blogs"
import Bookmarks from "./components/Headers/Bookmarks/Bookmarks"
import Header from "./components/Headers/Header"
import './index.css'


function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [readTime, setTime] = useState(0);

  const handleAddBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleTime = (id,time) =>{
    const newTime = readTime + time;
    setTime(newTime); 

    // remove  the read blog from bookmark

    const remainingBookmarks = bookmarks.filter(loop => loop.id !==id);
    setBookmarks(remainingBookmarks);

  }
  
  return (
    <>
      
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddBookmarks={handleAddBookmarks} handleTime={handleTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
