import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";

function SinglePost() {
  let { id } = useParams();
  return (
    <div className="w-[100%] h-auto min-h-[100vh] flex flex-col items-center">
      <Navbar />
      <Post postid={id} />
      <Footer />
    </div>
  );
}

export default SinglePost;
