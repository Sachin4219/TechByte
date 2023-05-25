import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import MyPosts from "./pages/MyPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/new" element={<CreatePost />} />
        <Route path="/posts/my" element={<MyPosts />} />
        <Route path="/post/:id/update" element={<UpdatePost />} />
        <Route path="/all" element={<AllPosts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
